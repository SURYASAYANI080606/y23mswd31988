const express = require('express');
const { loginUser } = require('../controllers/authController');
const router = express.Router();

// POST request for login
router.post('/login', loginUser);

module.exports = router;
