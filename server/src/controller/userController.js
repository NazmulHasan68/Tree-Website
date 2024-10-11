const createError = require('http-errors')
const fs = require('fs').promise
const User = require('../models/userModel');
const { successResponse } = require('./responseController');
const { findwithId } = require('../services/findItem');
const { deleteImage } = require('../helper/deleteImage');
const { jwtactivationKey, clientURl, jwtResetPasswordKey } = require('../secret');
const { createJsonWebToken } = require('../helper/jsonwebtoken');
const { EmailWithNodeMail } = require('../helper/email');
const jwt = require('jsonwebtoken');
const runValidation = require('../validator');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs')

// get :for all the users
const getUsers = async(req, res, next)=>{
    try {
        const search = req.query.search || "";
        const page = Number(req.query.page)|| 1;
        const limit = Number(req.query.limit) || 5;

        const searchRegExp = new RegExp('.*'+ search +'.*', 'i')
        const filter = {
            isAdmin : {$ne : true},
            $or : [
                {name : {$regex : searchRegExp}},
                {email : {$regex : searchRegExp}},
                {phone : {$regex : searchRegExp}},
            ]
        }
        const option = {password : 0}

        const users = await User.find(filter,option)
                                .limit(limit)  // how many user you want
                                .skip((page-1)*limit) // page number

        const count = await User.find(filter).countDocuments() // count all the user number find use for if anyone filter all the user then count just suggestest number
        if(!users) throw createError(404, 'No users found')

        return successResponse(res, {
            stausCode : 200,
            message : 'user profile is returend',
            payload : {
                users,
                pagination : {
                    totalPage : Math.ceil(count /limit),
                    currentPage :  page,
                    previousPage : page - 1 > 0 ? page-1 :null,
                    nextpage : page + 1 <= Math.ceil(count/limit) ? page + 1 :  null
                }
            }
        })

    } catch (error) {
        next(error)
    }  
}

// get : for sigle user
const getUserByID = async(req, res, next)=>{
    try {
        console.log(req.body.userId);
        
        const id = req.params.id
        const options = {password : 0}
        const user =await findwithId(User, id,options)

        return successResponse(res, {
            stausCode : 200,
            message : 'user profile is returend',
            payload : {user}
        })

    } catch (error) {
        if(error instanceof mongoose.Error.CastError){
            throw createError(400, 'invalid Id')
        }
        next(error)
    }  
}

// delete : for sigle user
const deleteUserByID = async(req, res, next)=>{
    try {

        // at first the user is find ====
        const id = req.params.id
        const options = {password : 0}
        const user =await findwithId(User,id,options) // this method is fullfild in service finditem


        // delete logic ====
        await User.findByIdAndDelete({_id: id, isAdmin:false})

        //return result ====
        return successResponse(res, {
            stausCode : 200,
            message : 'User was delete successfully',
        })

    } catch (error) {
        next(error)
    }  
}


//proces Register
const procesRegister = async(req, res, next)=>{
    try {
        const {name , email , password, phone, address} = req.body
        
        const Image = req.file
        if(!Image){
            throw createError(400, 'Image file is required')
        }

        if(Image.size > 1024*1024*3){
            throw createError(400, 'File is true large , it must be less then 3MB')
        }


        const imageBufferString = Image.buffer.toString('base64')

        const userExists = await User.findOne({email:req.body.email})
        if(userExists){
            throw createError(409, 'User with this email already exists . please login')
        }

        //create jwt 
        const token = createJsonWebToken({name , email ,password, phone, address, image:imageBufferString}, jwtactivationKey, '10m')

        //prepare email
            const emailData  = {
                email,
                subject : 'Account activation Now!',
                html : `
                    <h2>Hello Mr. ${name} !</h2>
                    <p>Please CLick here to <a href="${clientURl}/api/users/activate/${token}" target="_blank">Activate your account</a></p>
                `
            }
        ///send email nodemiler
            try {
                await EmailWithNodeMail(emailData) 
            } catch (error) {
                next(createError(500,'fail to send verification email'))
                return;
            }

        //return result ====
        return successResponse(res, {
            stausCode : 200,
            message : `Please to go you ${email} for completing, your registration process`,
            payload : {token}
        })

    } catch (error) {
        next(error)
    }  
}


// verify
const verifyControler = async(req, res, next)=>{
    try {
       try {
        const token = req.body.token
        if(!token) throw createError(404, 'token not found');
        const decoded = jwt.verify(token, jwtactivationKey)
        if(!decoded) throw createError(404, 'user is not able to verify')
        //check user 
        const userExists = await User.findOne({email:decoded.email})
        if(userExists){
            throw createError(409, 'User with this email already exists . please login')
        }
        const user = await User.create(decoded)
        //return result ====
        return successResponse(res, {
            stausCode : 200,
            message : `user was register successfully`,
            payload : {user}
        })
       } catch (error) {
            if(error.name === 'TokenExpiredError'){
                throw createError(404, 'Token has expired')
            }else if(error.name === 'jsonWebTokenError'){
                throw createError(404, 'Invalid Token')
            }else{
                throw error
            }
       }

    } catch (error) {
        next(error)
    }  
}



// Update : for sigle user
const UpdateUserByID = async(req, res, next)=>{
    try {

        // at first the user is find ====
        const userId = req.params.id;
        const options = {password:0}
        await findwithId(User, userId, options)
        const Updateoptions = {new: true , runValidation:true, context:'query'}
        let updates = {}
       //name, email, password, address, phone, image
        // if(req.body.name){
        //     updates.name = req.body.name
        // }
    
        for(let key in req.body){
            if(['name', 'phone', 'password', 'address'].includes(key)){
                updates[key]=req.body[key];
            }else if(['email'].includes(key)){
                throw new Error('Email can not be updated')
            }
        }

        const Image = req.file
        if(Image){
            //image size maxmum 2mb
            if(Image.size > 1024*1024*3){
                throw createError(400, 'File is true large , it must be less then 3MB')
            }
            updates.Image = Image.buffer.toString('base64')
        }
        // delete updates.email
        const updatedUser = await User.findByIdAndUpdate(userId, updates, Updateoptions).select("-password")
        if(!updatedUser){
            throw createError(404, 'With this Id Does not exits!')
        }
        return successResponse(res, {
            stausCode : 200,
            message : 'User was updated successfully',
            payload: {updatedUser}
        })

    } catch (error) {
        next(error)
    }  
}


// Ban user
const handelbanUserById = async(req, res, next)=>{
    try {

        // at first the user is find ====
        const userId = req.params.id;
        await findwithId(User, userId)
        const updates = {isBanned:true}
        const Updateoptions = {new: true , runValidation:true, context:'query'}




        // delete updates.email
        const updatedUser = await User.findByIdAndUpdate(userId, updates, Updateoptions).select("-password")
        if(!updatedUser){
            throw createError(404, 'User was not bannan successfully!')
        }
        return successResponse(res, {
            stausCode : 200,
            message : 'User was Banned successfully',
            payload: {updatedUser}
        })

    } catch (error) {
        if(error instanceof mongoose.Error.CastError){
            throw createError(400, 'Invalid Id')
        }
        next(error)
    }  
}

//Unban user
const handelUnbanUserById = async(req, res, next)=>{
    try {

        // at first the user is find ====
        const userId = req.params.id;
        await findwithId(User, userId)
        const updates = {isBanned: false}
        const Updateoptions = {new: true , runValidation:true, context:'query'}


        // delete updates.email
        const updatedUser = await User.findByIdAndUpdate(userId, updates, Updateoptions).select("-password")
        if(!updatedUser){
            throw createError(404, 'User was not bannan successfully!')
        }
        return successResponse(res, {
            stausCode : 200,
            message : 'User was Banned successfully',
            payload: {updatedUser}
        })

    } catch (error) {
        if(error instanceof mongoose.Error.CastError){
            throw createError(400, "Invaild id")
        }
        next(error)
    }  
}

//update password
const handaleUpdatePassword = async(req, res, next) =>{
    try {
        const {email, oldPassword, newPassword, confirmPassword} = req.body
        const userId = req.params.id
        const user = await findwithId(User,userId)

        const isPasswordMatch = await bcrypt.compare(oldPassword, user.password)
        if(!isPasswordMatch){
            throw createError(401, 'Password did not match')
        }

        const filter = {userId};
        const update = {$set : {password : newPassword}}
        const updateOptions = {new : true}

        const updateUser = await User.findByIdAndUpdate(userId, update,updateOptions).select('-password')
        if(!updateUser){
            throw createError(400, 'User was not updated successfully')
        }

        return successResponse(res, {
            stausCode : 200,
            message : 'user was updates successfully',
            payload: {updateUser}
        })

    } catch (error) {
        next(error)
    }
}

//forget password
const handaleforgetpassword = async(req, res, next) =>{
    try {
        const {email} = req.body
        const userData = await User.findOne({email : email})

        if(!userData){
            throw createError(400, 'Email is incorrect oryou have not verified your email address. please register first')
        }

        const token = createJsonWebToken({email}, jwtResetPasswordKey, '10m')

        //prepare email
            const emailData  = {
                email,
                subject : 'Reset password Email',
                html : `
                    <h2>Hello Mr. ${userData.name} !</h2>
                    <p>Please CLick here to <a href="${clientURl}/api/users/reset-password/${token}" target="_blank">Reset your password</a></p>
                `
            }
        
        ///send email nodemiler
            try {
                await EmailWithNodeMail(emailData) 
            } catch (error) {
                next(createError(500,'fail to send reset-password email'))
                return;
            }

        //return result ====
        return successResponse(res, {
            stausCode : 200,
            message : `Please to go you ${email} for address, for reset -password`,
            payload : {token}
        })

    } catch (error) {
        next(error)
    }
}

//reset password
const handaleResetpassword = async(req, res, next) =>{
    try {
        const {token, password} = req.body
        const decoded = jwt.verify(token, jwtResetPasswordKey)

        if(!decoded){
            throw createError(400, 'Invalid to expaired token')
        }
        const filter = {email : decoded.email}
        const update = {password : password}
        const options = {new : true}
        const updateUser = await User.findOneAndUpdate(
            filter,
            update,
            options
        ).select('-password')

        if(!updateUser) throw createError(400, 'password reset failed')
       
        return successResponse(res, {
            stausCode : 200,
            message : 'Password reset successfully',
        })

    } catch (error) {
        next(error)
    }
}


module.exports = {
    getUsers, 
    getUserByID, 
    deleteUserByID, 
    procesRegister, 
    verifyControler, 
    UpdateUserByID, 
    handelbanUserById, 
    handelUnbanUserById,
    handaleUpdatePassword,
    handaleforgetpassword,
    handaleResetpassword
}