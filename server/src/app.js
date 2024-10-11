const express = require('express')
const morgan = require('morgan')
const body_parser =require('body-parser')
const createError = require('http-errors')
const cookieParser = require('cookie-parser') 
const xssClean = require('xss-clean')
const retelimit = require('express-rate-limit')
const userRouter = require('./router/userRouter')
const seedRouter = require('./router/seeRouter')
const { errorResponse } = require('./controller/responseController')
const authRouter = require('./router/authRouter')
const categoryRouter = require('./router/CategoryRoute')
const productRouter = require('./router/productRouter')

const app = express()

const limiter = retelimit({
	windowMs: 1 * 60 * 1000, //1minute
	max : 5,
    message : 'Too many request from this IP, Please try agin later'
})

app.use(cookieParser())
app.use(xssClean())
app.use(limiter) // this limiter is use for control extra request
app.use(morgan('dev'))  // this package is use for watch the requst from where it's coming
app.use(body_parser.json()) //third part middleware we can also use express 
app.use(body_parser.urlencoded({ extended : true})) 

// user router 
app.use("/api/users",userRouter)

//auth router
app.use("/api/auth",authRouter)

//categoryRouter
app.use('/api/categories', categoryRouter)

//categoryRouter
app.use('/api/categories', categoryRouter)

//Product route
app.use('/api/products', productRouter)

//seedRouter
app.use('/api/seed', seedRouter)

app.get('/test', (req, res)=>{
    res.status(200).send({
        message : 'Welcome to the server'
    })
})



//Client error handling
app.use((req, res, next)=>{ 
    next(createError(404, "route not found"))
})

//Server error handling -->all the errors
app.use((err, req, res, next)=>{ 
    return errorResponse(res, {
        stausCode : err.status,
        message : err.message
    })
})


module.exports = app
