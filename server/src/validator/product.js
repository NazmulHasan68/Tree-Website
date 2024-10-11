const {body} = require('express-validator')
//registration validation

const validateProduct = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Product Name is required")
        .isLength({min:3})
        .withMessage("Product Name should be at least 3 characters long"),
    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required")
        .isLength({min:3})
        .withMessage("Description should be at least 3 characters long"),
    body("price")
        .trim()
        .notEmpty()
        .withMessage("Price is required")
        .isLength({min:0})
        .withMessage("Price must bw a positive number"),
    body("quantity")
        .trim()
        .notEmpty()
        .withMessage("quantity is required")
        .isLength({min:0})
        .withMessage("Quantity must be a positive number"),
    body("category")
        .trim()
        .notEmpty()
        .withMessage("Category is required")
        .isLength({min:0})
        .withMessage("Category must bw a positive number"),
    // body("image")
    //     .trim()
    //     .notEmpty()
    //     .withMessage("image is required")
    //     .isString()
]




module.exports = {
    validateProduct,
}