const express = require('express')
const app = express()

const path = require('path')
app.use(express.static('public'))

const mysql = require('mysql')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
const personRouter = require('./routes/Person');
app.use('/', personRouter);
app.listen(3000,() =>{
    console.log('App is started at http://localhost:3000')
})