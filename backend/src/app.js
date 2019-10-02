const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares 
app.use(cors());
app.use(express.json());

// routes
app.use('/api/user', require('./routes/user'));
app.use('/api/news', require('./routes/news'));
//app.get('/api/user', (req, res) => res.send('User route'));
//app.get('/api/news', (req, res) => res.send('News route'));

module.exports = app;
