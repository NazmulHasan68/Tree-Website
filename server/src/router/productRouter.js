const express = require('express')
const productRouter = express.Router()
const {uploadProductImage} = require('../middleware/uploadFile')
const runValidation = require('../validator')
const { isLoggedIN, isLoggedOut, isAdmin } = require('../middleware/auth')
const { 
    handleCreateProduct, 
    handleGetAllProducts ,
    handleGetSignleProduct, 
    handleDeleteProduct, 
    handleUpdateProduct} = require('../controller/productController')
const { validateProduct } = require('../validator/product')


//POST : api/product
productRouter.post('/',
    uploadProductImage.single('image'),
    validateProduct,
    isLoggedIN,
    isAdmin,  
    runValidation,
    handleCreateProduct
)

//GET : api/products
productRouter.get('/',handleGetAllProducts)

//GET : api/product/:slug
productRouter.get('/:slug',handleGetSignleProduct)

//delete : api/product/:slug
productRouter.delete('/:slug',isLoggedIN, isAdmin, handleDeleteProduct)

//update : api/product/:slug
productRouter.put('/:slug',isLoggedIN, isAdmin, uploadProductImage.single('image'), handleUpdateProduct)


module.exports = productRouter