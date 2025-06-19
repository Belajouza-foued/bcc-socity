const express = require('express');
const router = express.Router();
const mailerController = require('../controllers/mailControllers'); // ← à adapter

router.post('/send-email', mailerController.sendConfirmationEmail);

module.exports = router;
