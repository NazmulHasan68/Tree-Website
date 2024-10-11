const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const { successResponse } = require('./responseController');
const { createJsonWebToken } = require('../helper/jsonwebtoken');
const { jwtAccessKey, jwtRefreshKey } = require('../secret');

const handleLogin = async(req, res, next) =>{
    try {
        // email and password req.body 
        const {email, password} = req.body  
        // is Exist
        const user = await User.findOne({email})
        
        if(!user){
            throw createError(404, "User does not exist with this email , please register first")
        }

        //compare the password
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(!isPasswordMatch){
            throw createError(401, "Email or password did not match");
        }
        // isBanned
        if(user.isBanned){
            throw createError(403, "You are banned ! please contact authority")
        }
        // await User.findOne({email}).select('-password')
        const userWithoutPassword = user.toObject()
        delete userWithoutPassword.password

        //token, cookie
        const accessToken = createJsonWebToken({user}, jwtAccessKey, '5m')
        res.cookie('access_token',accessToken ,{
            maxAge : 5*60*1000,
            httpOnly : true,
            // secure : true,
            sameSite : 'none'
        })

        //refresh token, cookie
        const refreshToken = createJsonWebToken({user}, jwtRefreshKey, '7d')
        res.cookie('refreshToken',refreshToken ,{
            maxAge : 7*24*60*60*1000,
            httpOnly : true,
            // secure : true,
            sameSite : 'none'
        })

        //success response
        return successResponse(res, {
            stausCode : 200,
            message : 'user logged in successfully',
            payload : {userWithoutPassword}
        })
    } catch (error) {
        next(error)
    }
}




const handleLogOut = async(req, res, next) =>{
    try {

        res.clearCookie('access_token')
        res.clearCookie('refreshToken')

        return successResponse(res, {
            stausCode : 200,
            message : 'user logged out successdully',
            payload: {}
        })
    } catch (error) {
        next(error)
    }
}


//re-fresh token
const handleRefreshToken = async(req, res, next) =>{
    try {
        const oldRefreshToken = req.cookies.refreshToken;

        //verify the old refresh token
        const decondedToken = jwt.verify(oldRefreshToken, jwtRefreshKey)

        if(!decondedToken) throw createError(401, 'Invalid Refresh Token . Please login again')
        
        const accessToken = createJsonWebToken(decondedToken.user, jwtAccessKey, '5m')
        res.cookie('access_token',accessToken ,{
            maxAge : 5*60*1000,
            httpOnly : true,
            // secure : true,
            sameSite : 'none'
        })

        return successResponse(res, {
            stausCode : 200,
            message : 'New access token is generate',
            payload: {}
        })
    } catch (error) {
        next(error)
    }
}


//protector
const handleProtected = async(req, res, next) =>{
    try {
        const accessToken = req.cookies.access_token;
        //verify the old refresh token
        const decondedToken = jwt.verify(accessToken, jwtAccessKey)
        if(!decondedToken) throw createError(401, 'Invalid accesstoken Token . Please login again')
        
        return successResponse(res, {
            stausCode : 200,
            message : 'Protected Resourses accessed successfully',
            payload: {}
        })
    } catch (error) {
        next(error)
    }
}
module.exports = {handleLogin, handleLogOut, handleRefreshToken, handleProtected}