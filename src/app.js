const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Mentions = require('./models/mentions');

//Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open');
})

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
})

db.on('disconnected', () => {
    console.log('Mongoose default connection is desconnected')
})

process.on('SIGINT', () => {
    db.close(() => {
        console.log('Mongoose default connection is desconnected due to application termination.')
        process.exit(0);
    })
})



const app = express();

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

module.exports = app;