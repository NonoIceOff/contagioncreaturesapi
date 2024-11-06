// controllers/DialogueController.js
const Dialogue = require('../models/Dialogue');

class DialogueController {
  static async getAllDialogues(req, res) {
    try {
      const dialogues = await Dialogue.query().withGraphFetched('[pnj, dialoguePiece]');
      res.json(dialogues);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getDialogueById(req, res) {
    try {
      const dialogue = await Dialogue.query()
        .findById(req.params.id)
        .withGraphFetched('[pnj, dialoguePiece]');
      res.json(dialogue || { message: 'Dialogue not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createDialogue(req, res) {
    try {
      const newDialogue = await Dialogue.query().insert(req.body);
      res.status(201).json(newDialogue);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateDialogue(req, res) {
    try {
      const updatedDialogue = await Dialogue.query().patchAndFetchById(req.params.id, req.body);
      res.json(updatedDialogue);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteDialogue(req, res) {
    try {
      await Dialogue.query().deleteById(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = DialogueController;
