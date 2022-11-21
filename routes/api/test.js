// routes/api/test.js

const express = require('express');
const router = express.Router();

// @route GET api/test/check
// @description tests api run
// @access Public
router.get('/check', (req, res) => res.send('api route testing - ok!'));

module.exports = router;