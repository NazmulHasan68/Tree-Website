const { Schema, model } = require("mongoose")
const { defaultImagePath } = require("../secret")

//name. slug, description, price, quantity, sold, shipping, image
const ProductSchema = new Schema({
    name : {
        type : String,
        required : [true, 'Product name is requied'],
        trim : true,
        minlength: [3, "The lenght of Product name can be minium 3 character"],
    },
    slug : {
        type : String,
        required : [true, 'Product name is requied'],
        lowercase: true,
        unique: true,
    },
    description : {
        type : String,
        required : [true, 'Product decription is requied'],
        trim: true,
        minlength : [3, 'The length of Product description can be minimum 3 characters']
    },
    price : {
        type : Number,
        required : [true, 'Product price is requied'],
        trim: true,
        validate :{
            validator : (v) => {v > 0},
            message : (proos) =>`${proos.value} is not a valid price! Price must be greater then 0`
        }
    },
    quantity : {
        type : Number,
        required : [true, 'Product quantity is requied'],
        trim: true,
        validate :{
            validator : (v) => {v > 0},
            message : (proos) =>`${proos.value} is not a valid quantity! quantity must be greater then 0`
        }
    },
    sold : {
        type : Number,
        required : [true, 'sold quantity is requied'],
        trim: true,
        default : 0,
    },
    shipping : {
        type : Number,
        required : [true, 'sold quantity is requied'],
        default : 0,
    },
    image : {
        type : String,
        default : defaultImagePath
    },
    category :{
        type : Schema.Types.ObjectId,
        ref: 'Cateogry',
        required : true
    }
    
},{
    timestamps : true
})

const Product = model('Product', ProductSchema)
module.exports = Product