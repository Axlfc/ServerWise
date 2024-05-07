const express = require('express');
const app = express();
const path = require('path');
const usersRouter = require('./routes/users');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define the message variable and render the index view file
app.get('/', (req, res) => {
  const message = 'Hello, World!';
  res.render('index', { message });
});

// Define the ping route handler
app.get('/ping', (req, res) => {
  const message = { msg: 'pong' };
  res.render('ping', { message });
});

app.use('/api/users', usersRouter);


// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});