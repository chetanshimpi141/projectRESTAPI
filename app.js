
require('dotenv').config({path: `${process.cwd()}/.env`})
const express = require('express');
const authRouter = require('./route/authRoute');
const catchAsync = require('./utils/catchAsync');
const app = express()
const AppError = require('./utils/appError')
const globalErrorHandler = require('./controller/errorController')

const PORT = process.env.SERVER_PORT || 5432


app.use(express.json())


// all routes will be here
app.use('/api/v1/auth',authRouter)

app.use('*',
    catchAsync(async (req,res,next)=>{
    throw new AppError(`Can't find ${req.originalUrl} on this server`,404)
}))

app.use(globalErrorHandler)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})