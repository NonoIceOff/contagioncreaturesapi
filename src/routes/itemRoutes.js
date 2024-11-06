// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/itemController');

router.get('/', ItemController.getAllItems);
router.get('/:id', ItemController.getItemById);
router.post('/', ItemController.createItem);
router.patch('/:id', ItemController.updateItem);
router.delete('/:id', ItemController.deleteItem);

module.exports = router;
