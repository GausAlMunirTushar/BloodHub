const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors');
const connectDB = require('./config/database');

// dot config
dotenv.config();

// app object
const app = express();

// Database Connection
connectDB();

// Middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


module.exports = app ;