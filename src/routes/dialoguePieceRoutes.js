// routes/dialoguePieceRoutes.js
const express = require('express');
const router = express.Router();
const DialoguePieceController = require('../controllers/dialoguePieceController');

router.get('/', DialoguePieceController.getAllDialoguePieces);
router.get('/:id', DialoguePieceController.getDialoguePieceById);
router.post('/', DialoguePieceController.createDialoguePiece);
router.patch('/:id', DialoguePieceController.updateDialoguePiece);
router.delete('/:id', DialoguePieceController.deleteDialoguePiece);

module.exports = router;
