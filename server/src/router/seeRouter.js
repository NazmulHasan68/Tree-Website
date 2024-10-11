const express = require('express')
const {seedUserController , seedProductController} = require('../controller/seedUserController')
const {upload, uploadProductImage} = require('../middleware/uploadFile')
const seedRouter = express.Router()

seedRouter.get('/users', upload.single('image'),  seedUserController)

seedRouter.post('/products', uploadProductImage.single('image'),  seedProductController)

module.exports = seedRouter