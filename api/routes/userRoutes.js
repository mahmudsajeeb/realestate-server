const express = require('express');
const testuser = require('../controllers/user.controller');
 
const router = express.Router();

router.get('/test', testuser) 

module.exports = router; 

