// PACKAGES
const app=require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const {readFromFile, readAndAppend}=require('./fsUtils');

// GET request object to read existing note
app.get('/', (req, res) => {
  console.info(`${req.method} request received`);
  readFromFile('./Develop/db/db.json').then((data) => res.json(JSON.parse(data)));
});


// POST request object to append a new note
app.post('/', (req, res) => {
    console.info(`${req.method} request received to add note`);
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
  
      readAndAppend(newNote, './Develop/db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error adding note');
    }
  });
  
  module.exports = app;