const slugify = require('slugify')
const createError = require('http-errors');
const { successResponse } = require('./responseController');
const Cateogry = require('../models/categoryModel');
const { CreatecategoryService, getcategoryService, getSingcategoryService, UpdateCategoeyService, deleteCategoeyService } = require('../services/categoryServices');

//create creategory
const handlecreateCategory = async(req, res, next)=>{
    try {
        const {name} = req.body
        await CreatecategoryService(name)
        return successResponse(res, {
            stausCode : 200,
            message : 'category was create successfully',
        })
    } catch (error) {
        next(error)
    }
}

//multiple category
const handleGetCategories = async(req, res, next)=>{
    try {
        
        const categories = await getcategoryService()
        return successResponse(res, {
            stausCode : 200,
            message : 'category fetech successfully',
            payload : categories
        })

    } catch (error) {
        next(error)
    }
}


//sigle category
const handleGetCategori = async(req, res, next)=>{
    try {
        const {slug} = req.params
        const categories = await getSingcategoryService(slug)
        if(!categories){
            throw createError(400, 'category was not found')
        }
        return successResponse(res, {
            stausCode : 200,
            message : 'category fetech successfully',
            payload : categories
        })

    } catch (error) {
        next(error)
    }
}


//update creategory
const handleUpdateCategori = async(req, res, next)=>{
    try {
        const {name} = req.body
        const {slug} = req.params
        const category = await UpdateCategoeyService(name, slug)
        if(!category){
            throw createError(400, 'NO category was not found with this slug')
        }
        return successResponse(res, {
            stausCode : 200,
            message : 'category was updated successfully',
            payload : category
        })
    } catch (error) {
        next(error)
    }
}



//delete creategory
const handledeleteCategori = async(req, res, next)=>{
    try {
        const {slug} = req.params
        const reult = await deleteCategoeyService(slug)

        if(!reult) throw createError(400, 'No category found')

        return successResponse(res, {
            stausCode : 200,
            message : 'category was deleted successfully',
        })
    } catch (error) {
        next(error)
    }
}


module.exports = {handlecreateCategory, handleGetCategories, handleGetCategori ,handleUpdateCategori, handledeleteCategori}