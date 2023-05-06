// PACKAGES
const app=require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {readFromFile, readAndAppend}=require('../utils/fsUtils');


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

// app.get('/:id', (req, res)=>{
//   if(req.params.id){
//     console.info(`${req.method} request received to get id`);
//     const noteId=req.params.id;
//     for (let i = 0; i < notesFile.length; i++) {
//       const cId = notesFile[i];
//       if(cId.id===noteId){
//         res.status(200).json(cId);
//         return;
//       }
//     }
//     res.status(404).send('Not found');
//   }else{
//     res.status(400).send('ID not provided');
//   }
// });
  // app.delete('/:id', (req, res)=>{

  // })
  
  module.exports = app;