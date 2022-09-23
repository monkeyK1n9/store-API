const express = require('express')
const app = express()
require('express-async-errors')
require('dotenv').config()

const errorHandler = require('./')

//middleware
app.use(express.json())

//routes
app.use()
