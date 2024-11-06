// routes/questRoutes.js
const express = require('express');
const router = express.Router();
const QuestController = require('../controllers/questController');

router.get('/', QuestController.getAllQuests);
router.get('/:id', QuestController.getQuestById);
router.post('/', QuestController.createQuest);
router.patch('/:id', QuestController.updateQuest);
router.delete('/:id', QuestController.deleteQuest);

module.exports = router;
