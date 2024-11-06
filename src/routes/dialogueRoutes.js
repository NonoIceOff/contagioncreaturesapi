// routes/dialogueRoutes.js
const express = require('express');
const router = express.Router();
const DialogueController = require('../controllers/dialogueController');

router.get('/', DialogueController.getAllDialogues);
router.get('/:id', DialogueController.getDialogueById);
router.post('/', DialogueController.createDialogue);
router.patch('/:id', DialogueController.updateDialogue);
router.delete('/:id', DialogueController.deleteDialogue);

module.exports = router;
