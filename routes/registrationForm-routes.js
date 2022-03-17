const express = require('express');
const router = express.Router();
const controller = require('../controllers/registrationForm-controller');

//api routes
router.post('/', controller.postData);
router.get('/', controller.getData);
router.get('/:id', controller.getDataById);
router.post('/update/:id', controller.updateData);
router.get('/delete/:id', controller.deleteData);

module.exports = router;