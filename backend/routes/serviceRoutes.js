const express = require('express');
const router = express.Router();
const {getServices, setService, updateService, deleteService} = require('../controllers/serviceController');// Importing the serviceController

router.route('/').get(getServices).post(setService);
router.route('/:id').put(updateService).delete(deleteService);

module.exports = router;