const fs = require('fs').promise
const deleteImage = async(userImagepath) =>{

    try {
        await fs.access(userImagepath)
        await fs.unlink(userImagepath)
        console.log("user image was deleted")
    } catch (error) {
        console.error("user image was deleted")
    }
}
module.exports = {deleteImage}