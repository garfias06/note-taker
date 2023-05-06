// PACKAGES
const express = require('express');
// instance
const app = express();
// Importing router
const noteRouter = require('./notes');
const frontEndRouter=require('./frontEnd');

// router
app.use('/api', noteRouter);
app.use('/', frontEndRouter);


module.exports = app;