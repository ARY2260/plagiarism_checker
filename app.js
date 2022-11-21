const express = require('express');
const connectDB = require('./config/db');

// routes
const test = require('./routes/api/test');
const plag_check = require('./routes/api/plag_check');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Plag Check activated!'));

// use Routes
app.use('/api/test', test);
app.use('/api/plag_check', plag_check);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));