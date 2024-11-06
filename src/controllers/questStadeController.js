// controllers/QuestStadeController.js
const QuestStade = require('../models/QuestStade');

class QuestStadeController {
  static async getAllQuestStages(req, res) {
    try {
      const questStages = await QuestStade.query().withGraphFetched('quest');
      res.json(questStages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getQuestStageById(req, res) {
    try {
      const questStage = await QuestStade.query().findById(req.params.id).withGraphFetched('quest');
      res.json(questStage || { message: 'Quest stage not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createQuestStage(req, res) {
    try {
      const newQuestStage = await QuestStade.query().insert(req.body);
      res.status(201).json(newQuestStage);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateQuestStage(req, res) {
    try {
      const updatedQuestStage = await QuestStade.query().patchAndFetchById(req.params.id, req.body);
      res.json(updatedQuestStage);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteQuestStage(req, res) {
    try {
      await QuestStade.query().deleteById(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = QuestStadeController;
