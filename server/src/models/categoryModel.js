const { Schema, model } = require("mongoose")
const categorySchema = new Schema({
    name : {
        type : String,
        required : [true, 'Category name is requied'],
        trim : true,
        unique : true,
        minlength: [3, "The lenght of Slug name can be minium 3 character"],
    },
    slug : {
        type : String,
        required : [true, 'Slug name is requied'],
        lowercase: true,
        unique: true,
    },
    
},{
    timestamps : true
})

const Cateogry = model('Cateogry', categorySchema)
module.exports = Cateogry