const createError = require('http-errors')
const fs = require('fs').promise
const { successResponse } = require('./responseController');
const { findwithId } = require('../services/findItem');
const runValidation = require('../validator');
const { default: mongoose } = require('mongoose');
const Product = require('../models/productModel');
const { default: slugify } = require('slugify');
const { createProductService, GetProductService } = require('../services/productServices');
const { deleteImage } = require('../helper/deleteImage');


//proces Register
const handleCreateProduct = async(req, res, next)=>{
    try {
        const {name , description , price, quantity, shipping , category, } = req.body

        const image = req.file?.path
        if(!image){
            throw createError(400, 'image file is required')
        }
        if(image.size > 1024*1024*3){
            throw createError(400, 'File is true large , it must be less then 3MB')
        }
        // const imageBufferString = image.buffer.toString('base64')

        const productData = {
            name, description, price, category, quantity, shipping, image
        }
        
        
        const product = await createProductService(productData)

        //return result 
        return successResponse(res, {
            stausCode : 200,
            message : `Product was created successfully`,
            payload : product
        })

    } catch (error) {
        next(error)
    }  
}

//Get ALl products
const handleGetAllProducts = async(req, res, next)=>{
   
    try {

        const search = req.query.search || ''
        const page = parseInt(req.query.page) || 1 ;
        const limit = parseInt(req.query.limit) || 4;

        const searchRegExp = new RegExp('.*' + search + '.*', 'i')
        const filter = {
            $or : [
                {name : {$regex :searchRegExp}},
            ]
        }
       
        const productData = await GetProductService(page , limit, filter)
        console.log(productData);

        return successResponse(res, {
            stausCode : 200,
            message : 'return all products product',
            payload : {product:productData.product,
                        pagination : {
                            totalPages : Math.ceil(productData.count/limit),
                            currentPage : page,
                            previousPage : page - 1,
                            nextPage : page + 1,
                            totalNumberOfProduct : productData.count,
                        }
                    }
        })
    } catch (error) {
        next(error)
    }
}

//Get product
const handleGetSignleProduct = async(req, res, next)=>{
   
    try {
        const {slug} = req.params
        const product = await Product.findOne({slug}).populate('category')
        if(!product) throw createError(400, 'product is not fount')

        return successResponse(res, {
            stausCode : 200,
            message : 'return a single products product',
            payload :{product}
        })
    } catch (error) {
        next(error)
    }
}


//delete product
const handleDeleteProduct = async(req, res, next)=>{
    try {
        const {slug} = req.params
        const product = await Product.findOneAndDelete({slug})
        if(!product) throw createError(400, 'product is not fount')
        
            if(product && product.image) await deleteImage(product.image)
        return successResponse(res, {
            stausCode : 200,
            message : 'Product is deleted',
        })
    } catch (error) {
        next(error)
    }
}


//update product
const handleUpdateProduct = async(req, res, next)=>{
    try {
        const {slug} = req.params;
        const updates = {};
        const updateOptions = {new : true, runValidation:true , context: 'query'}
        const allowedFields = ['name', 'description', 'price', 'sold', 'quantity', 'shipping']

        for (const key in req.body) {
            if(allowedFields.includes(key)){
                updates[key] = req.body[key];
            }
        }
        const image = req.file?.path
        if(image){
            if(image.size > 1024*1024*3){
                throw new Error('File too large. It must be less then 2MB')
            }
            updates.image = image
        }

        const updateProduct = await Product.findOneAndUpdate(
            {slug},
            updates,
            updateOptions
        )
        if(!updateProduct) throw createError(400, 'Product with this slug is not found')

        return successResponse(res, {
            stausCode : 200,
            message : 'Product was updated successfully',
            payload : {updateProduct}
        })
    } catch (error) {
        next(error)
    }
}


module.exports = {
    handleCreateProduct,
    handleGetAllProducts,
    handleGetSignleProduct,
    handleDeleteProduct,
    handleUpdateProduct
}


