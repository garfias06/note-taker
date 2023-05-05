// PACKAGES
const express = require('express');
const path = require('path');

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Express.static to allow public folder for usage
app.use(express.static('public'));

// Port where app will be listened on the server
const PORT = 3001;
// initialize instance
const app = express();

// importing note router
const notes=require('./Develop/routes/index');
app.use('/api', notes);

// GET index.html file
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);

// GET notes.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/notes.html'))
);



// function to connect to server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
