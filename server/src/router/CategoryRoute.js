const express = require('express')
const categoryRouter = express.Router()

const { 
    validateUserRegistration, 
    validateUserPasswordUpdate, 
    validateforgetpassword ,
    validateRestpassword
} = require('../validator/auth')


const runValidation = require('../validator')
const { isLoggedIN, isLoggedOut, isAdmin } = require('../middleware/auth')
const { handlecreateCategory, handleGetCategories , handleGetCategori, handleUpdateCategori, handledeleteCategori} = require('../controller/categoryController')
const { validateCategory } = require('../validator/category')

// Post-api/categories
categoryRouter.post('/',validateCategory, runValidation, isLoggedIN, isAdmin, handlecreateCategory)

// get-api/categories
categoryRouter.get('/', handleGetCategories)

// get-api/categori
categoryRouter.get('/:slug', handleGetCategori)

// put-api/categori
categoryRouter.put('/:slug',validateCategory, runValidation, isLoggedIN, isAdmin, handleUpdateCategori)

// Delete-api/categori
categoryRouter.delete('/:slug', isLoggedIN, isAdmin, handledeleteCategori)

module.exports = categoryRouter