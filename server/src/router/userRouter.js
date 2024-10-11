const express = require('express')
const userRouter = express.Router()

// get users
const { 
    getUsers, 
    getUserByID , 
    deleteUserByID, 
    procesRegister, 
    verifyControler, 
    UpdateUserByID, 
    handelbanUserById, 
    handelUnbanUserById,
    handaleUpdatePassword,
    handaleforgetpassword,
    handaleResetpassword
} = require('../controller/userController')
const {upload} = require('../middleware/uploadFile')
const { 
    validateUserRegistration, 
    validateUserPasswordUpdate, 
    validateforgetpassword ,
    validateRestpassword
} = require('../validator/auth')


const runValidation = require('../validator')
const { isLoggedIN, isLoggedOut, isAdmin } = require('../middleware/auth')

//GET : api/users
userRouter.post('/register',
    upload.single('image'), 
    validateUserRegistration,
    isLoggedOut,
    runValidation,
    procesRegister
)
userRouter.post('/activate',isLoggedOut, verifyControler)
userRouter.get('/',isLoggedIN, getUsers)
userRouter.get('/:id([0-9a-fA-F]{24})',isLoggedIN, getUserByID)
userRouter.delete('/:id([0-9a-fA-F]{24})',isLoggedIN, deleteUserByID)
userRouter.put('/update/:id([0-9a-fA-F]{24})',upload.single('image'),isLoggedIN, UpdateUserByID)
userRouter.put('/ban-user/:id([0-9a-fA-F]{24})',isLoggedIN, isAdmin, handelbanUserById)
userRouter.put('/unban-user/:id([0-9a-fA-F]{24})',isLoggedIN, isAdmin, handelUnbanUserById)
userRouter.put('/update-password/:id([0-9a-fA-F]{24})',validateUserPasswordUpdate, isLoggedIN, handaleUpdatePassword)
userRouter.post('/forget-password',validateforgetpassword, isLoggedIN, handaleforgetpassword)
userRouter.put('/reset-password',validateRestpassword, isLoggedIN, handaleResetpassword);


module.exports = userRouter