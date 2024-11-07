// routes/dropRoutes.js
const express = require('express');
const DropController = require('../controllers/dropController');
const router = express.Router();

router.get('/creatures/:id/drops', DropController.getDropsByCreatureId);

module.exports = router;
