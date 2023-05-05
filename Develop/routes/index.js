// PACKAGES
const express=require('express');

// Importing router
const noteRouter=require('./notes');

// instance
const app=express();

// router
app.use('/notes', noteRouter);
module.exports=app;