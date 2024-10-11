const slugify = require('slugify')
const Cateogry = require('../models/categoryModel');

//create category service
const CreatecategoryService = async(name)=>{
    const newCategory = await Cateogry.create({
        name : name,
        slug : slugify(name)
    })
   return newCategory
}
//multiple category service
const getcategoryService = async()=>{
   return await Cateogry.find({}).select('name slug').lean()
}

//single category service
const getSingcategoryService = async(slug)=>{
    return await Cateogry.find({slug}).select('name slug').lean()
 }


 //update category service
const UpdateCategoeyService = async(name, slug)=>{
    const filter = {slug}
    const update = {$set:{name : name, slug:slugify(name)}}
    const option = {new : true}
    const updateCategory = await Cateogry.findOneAndUpdate(
        filter,
        update,
        option
    )
    return updateCategory
 }


//update category service
const deleteCategoeyService = async(slug)=>{
    const deleteCategory = await Cateogry.deleteOne({slug})
    return deleteCategory
 }



module.exports = {CreatecategoryService, getcategoryService, getSingcategoryService, UpdateCategoeyService, deleteCategoeyService}