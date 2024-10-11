const data = require("../data")
const Product = require("../models/productModel")
const User = require("../models/userModel")

const seedUserController = async(req, res, next)=>{
    try {
        await User.deleteMany({})
        
        const user = await User.insertMany(data.users)
         
        return res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}


const seedProductController = async(req, res, next)=>{
    try {
        await Product.deleteMany({})
        
        const products = await Product.insertMany(data.products)

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


module.exports = {seedUserController , seedProductController}