require('dotenv').config()

const serverPort = process.env.SERVER_PORT || 8000
const MONGODB_ATLAS_URL = process.env.MONGODB_ATLAS_URL 
const defaultImagePath =  process.env.DEFAULT_USER_IMAGE_PATH || 'public/images/users/avater.png'
const jwtactivationKey =  process.env.JWT_ACTIVATION_KEY || 'abcd'
const smtpUserName = process.env.SMTP_USERNAME || ''
const smtpPassword = process.env.SMTP_PASSWORD || ''
const clientURl = process.env.CLIENT_URL || ''
const jwtAccessKey = process.env.JWT_ACCESS_KEY || ''
const jwtResetPasswordKey = process.env.JWT_RESET_PASSWORD_KEY || 'acbd'
const jwtRefreshKey = process.env.JWT_REFRESH_KEY || 'abcd'

module.exports = {
    serverPort, 
    MONGODB_ATLAS_URL,
    defaultImagePath, 
    jwtactivationKey,
    smtpUserName,
    smtpPassword,
    clientURl,
    jwtAccessKey,
    jwtResetPasswordKey,
    jwtRefreshKey
}