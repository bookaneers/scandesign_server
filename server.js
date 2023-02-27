// check for prod/dev environment
// set variable on Command Prompt $set NODE_ENV=development
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//define express
const express = require('express');
const app = express();
const http = require('http');

// define cors - middleware
const cors = require('cors');
app.use(cors());

// define body-parse - middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// import mongoose schema
// const { Fattura } = require('./schema/fatturas');

//define mongoose
// mongoose.connect('mongodb://localhost:27017/fatturas')
const mongoose = require('mongoose')

// connect with the database
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
mongoose.connect('mongodb://127.0.0.1/fatturas', { useNewUrlParser: true })
    .then(() => console.log('Connected to scandesigndb in MongoDB...'))
    .catch(err => console.error('Could not connect to scandesigndb in MongoDB...', err))

mongoose.set('strictQuery', false);

// define PORT for database
// set variable on Command Prompt $set PORT=9000
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening on port ${port}...`));