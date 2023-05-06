// PACKAGES
const express = require('express');
// initialize instance
const app = express();
// Port where app will be listened on the server
const PORT = 3001;

// importing note router
const notes=require('./routes');

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Express.static to allow public folder for usage
app.use(express.static('public'));

app.use(notes);

// function to connect to server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
