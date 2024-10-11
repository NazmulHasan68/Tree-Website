const createError = require("http-errors");
const runValidation = require("../validator");
const User = require("../models/userModel");

const handleUserAction = async(userId, action) =>{
    try {
        let update;
        let successMessage;
        if(action === 'ban'){
            update = { isBanned : true};
            successMessage = 'User was banned successfully'
        }else if(action === 'unban'){
            update = { isBanned : false}
            successMessage = "User was unbanned successfully"
        }else{
            throw createError(400, 'Invalid action , Use "ban" or "unban"')
        }

        const updateIption = {new : true, runValidation:true, context : 'query'}
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            update,
            updateIption
        ).select('-password')

        if(!updateIption){
            throw createError(400, 'user was not banned successfully')
        }
    } catch (error) {
        throw (error)
    }
}




module.exports = {handleUserAction}