const express = require('express');
const connection = require('./connection');
const app = express();

connection();


module.exports = app;