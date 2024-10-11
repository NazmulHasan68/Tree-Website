const mongoose = require("mongoose");
const { MONGODB_ATLAS_URL } = require('../secret');
const logger = require("../controller/loggerController");

const connectDB = async(option={})=>{
    try {
       await mongoose.connect(MONGODB_ATLAS_URL, option)
        console.log("Database connected");
       mongoose.connection.on('error', (error)=>{
        console.log('info',"DB connection error", error)
       })
    } catch (error) {
        console.log('error',"Couldnot not connection to db error")
    }
}

module.exports = connectDB