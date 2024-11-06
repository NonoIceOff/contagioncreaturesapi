// controllers/QuestController.js
const Quest = require('../models/Quest');

class QuestController {
  static async getAllQuests(req, res) {
    try {
      const quests = await Quest.query().withGraphFetched('item');
      res.json(quests);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getQuestById(req, res) {
    try {
      const quest = await Quest.query().findById(req.params.id).withGraphFetched('item');
      res.json(quest || { message: 'Quest not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createQuest(req, res) {
    try {
      const newQuest = await Quest.query().insert(req.body);
      res.status(201).json(newQuest);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateQuest(req, res) {
    try {
      const updatedQuest = await Quest.query().patchAndFetchById(req.params.id, req.body);
      res.json(updatedQuest);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteQuest(req, res) {
    try {
      await Quest.query().deleteById(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = QuestController;
