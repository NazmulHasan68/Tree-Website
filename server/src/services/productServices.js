const slugify = require('slugify')
const Cateogry = require('../models/categoryModel');
const createError = require('http-errors');
const Product = require('../models/productModel');
const cloudinary = require('../config/cloudinary');
const { publicIdvalueWithOUtExtenstionFromUrl } = require('../helper/cloudinaryHelpers');

//create category service
const createProductService = async(productData)=>{

    const {name , description,category, price, shipping, quantity} = productData
    const productExists = await Product.exists({name : name})
     
    if(!productExists){
        throw createError(409, 'Product with this name already exists')
    }

    if(productExists && productExists.image){
        const public_id = await publicIdvalueWithOUtExtenstionFromUrl(productExists.image)
    }
    const {result} = await cloudinary.uploader.destroy(`ecommerceMern/${public_id}`)

    if(result !== 'ok') throw new Error('User image was not deleted successfuly from cloudinary .please try again')
    await Product.findOneAndDelete({
        slug : slug,
        isAdmin : false
    })

    const image = productData.image

    if(image){
        const uploadResult = await cloudinary.uploader.upload(image, {folder: 'ecommerceMern',})
        productData.image = uploadResult.secure_url;
    }

    //create product
    const product = await Product.create({
        name : name,
        slug: slugify(name),
        description : description,
        price : price,
        quantity : quantity,
        shipping : shipping,
        image : image,
        category : category
    })
   return product
}


//GET category service
const GetProductService = async(page, limit, filter={})=>{
    const product = await Product.find(filter)
    .populate('category')
    .skip((page-1)*limit)
    .limit(limit)
    .sort({createdAt : -1 })

    if(!product) throw createError(404, 'No product found')
    const count = await Product.find(filter).countDocuments()

    return {product,count}
}


module.exports = {
    createProductService,
    GetProductService
}