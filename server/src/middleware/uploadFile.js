const multer  = require('multer')

const { MAX_FILE_SIZE, ALLOWD_FILE_TYPE, UPLOAD_PRODUCT_IMG_DIRECTORY } = require('../config/index')

const storage = multer.memoryStorage()
  const fileFilter = (req, file, cb)=>{
    if(!file.mimetype.startsWith('image/')){
      return cb(new Error('Only image file are allowed'), false);
    }
    if(file.size > MAX_FILE_SIZE){
      return cb(new Error('File size exceeds the maximum limit'), false);
    }
    if(!ALLOWD_FILE_TYPE.includes(file.mimetype)){
      return cb(new Error('File Type must be jpg ,png ,jpeg'), false);
    }
    cb(null , true)
  }

const upload = multer({ 
  storage: storage,
  fileFilter : fileFilter
})

const productStorage = multer.diskStorage({
  
  // destination : function (req, file, cb){
  //   cb(null , UPLOAD_PRODUCT_IMG_DIRECTORY)
  // },
  filename : function(req, file, cb){
    cb(null , Date.now() + '-' + file.originalname)
  }
})

const uploadProductImage = multer({
  storage : productStorage,
  limits : {fileSize : MAX_FILE_SIZE},
  fileFilter: fileFilter
})
  


module.exports = {upload , uploadProductImage}



//file filtering er kaj