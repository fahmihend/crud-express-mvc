const express = require('express');
const router = express.Router();
const controller = require('../controllers/registrationForm-controller');

router.post('/', controller.postData);
router.get('/', controller.getData);

module.exports = router;