const express = require('express')
const authRouter = express.Router()


const runValidation = require('../validator')
const { handleLogin, handleLogOut, handleRefreshToken, handleProtected} = require('../controller/AuthController')
const { isLoggedOut, isLoggedIN } = require('../middleware/auth')
const { validateUserLogin } = require('../validator/auth')

//api/auth/login
authRouter.post('/login',validateUserLogin, runValidation, isLoggedOut, handleLogin)
authRouter.post('/logout',isLoggedIN, handleLogOut)
authRouter.get('/refresh-token', handleRefreshToken)
authRouter.get('/protected', handleProtected)



module.exports = authRouter