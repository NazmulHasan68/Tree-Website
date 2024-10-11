const { Schema, model } = require("mongoose")
const bcrypt = require('bcryptjs');
const { defaultImagePath } = require("../secret");

const userSchema = new Schema({
    name : {
        type : String,
        required : [true, 'USer name is requied'],
        trim : true,
        maxlength: [31, "The lenght of User name can be maxium 31 character"],
        minlength: [3, "The lenght of User name can be minium 3 character"],
    },
    email : {
        type : String,
        required : [true, 'USer email is requied'],
        trim : true,
        unique : true,
        lowercase : true,
        validate : {
            validator : (v)=> {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
            },
            message : "Please enter a valid email"
        }
    },
    password : {
        type : String,
        required : [true, 'User password is requied'],
        minlength: [3, "The lenght of password must be more then 3"],
        set : (v)=>bcrypt.hashSync(v, bcrypt.genSaltSync(10))
    },
    image : {
        type : Buffer,
        contentType : String,
        required : [true , 'user Image is required']
    },
    address : {
        type : String,
        required : [true , 'user address is required'],
        minlength: [4, "minimum length mustbe 4 character"],
    },
    phone : {
        type : String,
        required : [true , 'user phone is required']
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    isBanned : {
        type : Boolean,
        default : false
    },

},{
    timestamps : true
})

const User = model('Users', userSchema)
module.exports = User