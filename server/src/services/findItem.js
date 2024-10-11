const createError = require("http-errors")
const { mongoose } = require("mongoose")

const findwithId = async(Model, id, options={})=>{
      try {

        const item = await Model.findById(id, options)

        if(!item) throw createError(404, `${Model.modelName} do not exis with is id`)
        return item;
    
      } catch (error) {
        if(error instanceof mongoose.Error){
            throw(createError(400, 'Invalid item id'))
            return
        }
        throw error;
      }
}

module.exports = {findwithId}