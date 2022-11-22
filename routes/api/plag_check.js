// routes/api/plag_check.js

const express = require('express');
const {spawn} = require('child_process');
const router = express.Router();

// Load Book model
const User = require('../../models/User');

// @route GET api/plag_check/check
// @description tests api run
// @access Public
router.get('/check', (req, res) => res.send('plag_check route testing - ok!'));

// @route GET api/plag_check
// @description Get all plag_check users
// @access Public
router.get('/', (req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(404).json({ nousersfound: 'No Users found' }));
});

// @route GET api/plag_check/countTokens
// @description Get Token count by username
// @access Public
router.get('/countTokens', (req, res) => {
    console.log(req.body);
    User.find({ username: req.body.username },{tokens:1},{_id:0})
      .then(tokens => res.json(tokens))
      .catch(err => res.status(404).json({ usernotfound: 'No tokens available' }));
});

// @route GET api/plag_check/:username
// @description Get user by username
// @access Public
router.get('/:username', (req, res) => {
    console.log(req.body.username);
    User.find({ username: req.body.username },{password:0})
      .then(user => res.json(user))
      .catch(err => res.status(404).json({ usernotfound: 'User not found' }));
});

//================================================
// TODO - password comparison during login
//================================================


// @route POST api/plag_check/register
// @description add/save user
// @access Public
router.post('/register', (req, res) => {
    console.log(req.body);
    User.create(req.body)
      .then(user => res.json({ msg: 'user added successfully' }))
      .catch(err => res.status(400).json({ error: `user not added ... error: ${err}` }));
});



// @route POST api/plag_check/nlp
// @description compare text
// @access Public
//===============================================
// TODO - token based usage
//===============================================
router.post('/nlp', (req, res) => {
    var results;

    // spawn new child process to call the python script
    const python = spawn('python', ['./routes/api/nlp.py',req.body.text1 ,req.body.text2 ]);

    // collect data from script
    python.stdout.on('data', function (data) {
     console.log(`Pipe data from python script ... ${data}`);
     results_data = data.toString();
     console.log(`get results ... ${results_data}`);
    });

    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        
        // send data to browser
        res.json({results: results_data})
  });
});

//===============================================
// TODO - refill token amount
//===============================================

module.exports = router;