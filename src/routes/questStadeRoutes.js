// routes/questStadeRoutes.js
const express = require('express');
const router = express.Router();
const QuestStadeController = require('../controllers/questStadeController');

router.get('/', QuestStadeController.getAllQuestStages);
router.get('/:id', QuestStadeController.getQuestStageById);
router.post('/', QuestStadeController.createQuestStage);
router.patch('/:id', QuestStadeController.updateQuestStage);
router.delete('/:id', QuestStadeController.deleteQuestStage);

module.exports = router;
