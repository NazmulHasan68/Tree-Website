const createError = require("http-errors");
const jwt = require('jsonwebtoken');
const { jwtAccessKey } = require("../secret");


//islogin
const isLoggedIN = async(req, res, next) =>{
    try {
        const token = req.cookies.access_token
        if(!token){
            throw createError(400, "Access Token not found. please login ")
        }
        const decoded = jwt.verify(token, jwtAccessKey)
        if(!decoded){
            throw createError(400, "Invaid access Token please login again")
        }
        req.user = decoded.user

        next()
        
    } catch (error) {
        return next(error)
    }
}



//islogout
const isLoggedOut = async(req, res, next) =>{
    try {
        const token = req.cookies.access_token

        if(token){
           try {
                const decoded = jwt.verify(token, jwtAccessKey)
                if(decoded){
                    throw createError(400, 'user is already logged in')
                }
           } catch (error) {
                throw error
           }
        }
        next()
        
    } catch (error) {
        return next(error)
    }
}



//isAdmin
const isAdmin = async(req, res, next) =>{
    try {
       if(!req.user.isAdmin){
            throw createError(403, "Forbidden . you must be an admin to access the resourse")
       }
        next()
    } catch (error) {
        return next(error)
    }
}



module.exports = {isLoggedIN, isLoggedOut, isAdmin}
