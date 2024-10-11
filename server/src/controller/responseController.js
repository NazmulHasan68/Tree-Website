const errorResponse = (res, {stausCode = 500, message = 'Internal server Error'}) => {
    return res.status(stausCode).json({
        success : false,
        message : message
    })
}
const successResponse = (res, {stausCode = 200, message = 'successfull', payload ={}}) => {
    return res.status(stausCode).json({
        success : true,
        message,
        payload,
    })
}
module.exports = {errorResponse, successResponse}