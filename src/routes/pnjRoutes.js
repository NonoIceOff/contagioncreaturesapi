// routes/pnjRoutes.js
const express = require('express');
const router = express.Router();
const PnjController = require('../controllers/pnjController');

router.get('/', PnjController.getAllPnjs);
router.get('/:id', PnjController.getPnjById);
router.post('/', PnjController.createPnj);
router.patch('/:id', PnjController.updatePnj);
router.delete('/:id', PnjController.deletePnj);

module.exports = router;
