const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Register
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  db.query(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, password],
    (err) => {
      if (err) return res.status(500).send('Registration failed');
      res.send('User registered');
    }
  );
});

// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, results) => {
      if (err || results.length === 0)
        return res.status(401).send('Invalid credentials');
      res.send('Login successful');
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
