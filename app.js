const express = require('express');
const connection = require('./connection');
const bodyParser = require('body-parser');
// const registrationForm = require('./models/registrationForm-model');
const app = express();

connection();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set ejs view engine
app.set('view engine', 'ejs');

//set router
const registrationRouter = require('./routes/registrationForm-routes');
app.use('/', registrationRouter);


module.exports = app;