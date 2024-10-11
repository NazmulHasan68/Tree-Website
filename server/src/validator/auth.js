const {body} = require('express-validator')
//registration validation

const validateUserRegistration = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({min:3 , max:31})
        .withMessage("Name should be at least 3-31 characters long"),
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid Email address"),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("password is required")
        .isLength({min:5 })
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/)
        .withMessage("Minimum eight characters, at least one letter, one number and one special character"),

    body("address")
        .trim()
        .notEmpty()
        .withMessage("Address is required")
        .isLength({min:4 , max:31})
        .withMessage("Address can be minium 4 characters long"),
    body("phone")
        .trim()
        .notEmpty()
        .withMessage("Phone is required"),
    body("image")
        .custom((value, {req})=>{
            if(!req.file || !req.file.buffer){
                throw new Error('User image is required')
            }
            return true;
        })
        .withMessage('User image is required')
]

//sign in validation
const validateUserLogin = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid Email address"),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("password is required")
        .isLength({min:5 })
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/)
        .withMessage("Minimum eight characters, at least one letter, one number and one special character"),
]

//user password Update
const validateUserPasswordUpdate = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid Email address"),
    body("oldPassword")
        .trim()
        .notEmpty()
        .withMessage("Old Password is required")
        .isLength({min:5 })
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/)
        .withMessage("old password Minimum eight characters, at least one letter, one number and one special character"),
    body("newPassword")
        .trim()
        .notEmpty()
        .withMessage("password is required")
        .isLength({min:5 })
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/)
        .withMessage("new password Minimum eight characters, at least one letter, one number and one special character"),
    body('confirmPassword').custom((value, {req})=>{
        if(value !== req.body.newPassword){
            throw new Error("Password and confirm password did not match")
        }
        return true
    })
]


//forget password
const validateforgetpassword = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid Email address"),
]


//Reset Password
const validateRestpassword = [
    body("token")
        .trim()
        .notEmpty()
        .withMessage("token is required")
        .isEmail()
        .withMessage("Invalid token"),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("password is required")
        .isLength({min:5 })
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/)
        .withMessage("Minimum eight characters, at least one letter, one number and one special character"),
    
]





module.exports = {
    validateUserRegistration,
    validateUserLogin,
    validateUserPasswordUpdate,
    validateforgetpassword,
    validateRestpassword,
}