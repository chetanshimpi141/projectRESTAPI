
require('dotenv').config({path: `${process.cwd()}/.env`})
const express = require('express');
const authRouter = require('./route/authRoute')
const app = express()
const PORT = process.env.DB_PORT || 5432


app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json({
        status:'success',
        message: 'REST API are working'
    })
})

// all routes will be here
app.use('/api/v1/auth',authRouter)

app.use('*',(req,res,next)=>{
    res.status(404).json({
        status:'Fail',
        message:'Route not found'
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})