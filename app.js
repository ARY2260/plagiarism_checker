const express = require('express');
const connectDB = require('./config/db');

// routes
const test = require('./routes/api/test');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Plag Check activated!'));

// use Routes
app.use('/api/test', test);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));