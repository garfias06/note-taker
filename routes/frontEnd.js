const app=require('express').Router();
const path = require('path');

// GET notes.html
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET index.html file
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports=app;