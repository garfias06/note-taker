// PACKAGES
const app=require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {readFromFile, readAndAppend, deletingNote}=require('../utils/fsUtils');


// !GET
// GET request object to read existing note
app.get('/notes', (req, res) => {
  console.info(`${req.method} request received`);
  readFromFile('./db/db.json').then((note) => res.json(JSON.parse(note)));
});

// !POST
// POST request object to append a new note
app.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add note`);
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error adding note');
    }
  });

  // !!DELETE
app.delete('/notes/:id', (req, res)=>{
  if (req.params.id){
    console.info(`${req.method} request received to get id`);

    deletingNote('./db/db.json', req.params)
    res.send('DELETE request received')
  }else{
    res.error('error DELETING')
  }
});


module.exports = app;