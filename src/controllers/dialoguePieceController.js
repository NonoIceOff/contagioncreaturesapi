// controllers/DialoguePieceController.js
const DialoguePiece = require('../models/DialoguePiece');

class DialoguePieceController {
  static async getAllDialoguePieces(req, res) {
    try {
      const dialoguePieces = await DialoguePiece.query();
      res.json(dialoguePieces);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getDialoguePieceById(req, res) {
    try {
      const dialoguePiece = await DialoguePiece.query().findById(req.params.id);
      res.json(dialoguePiece || { message: 'Dialogue piece not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createDialoguePiece(req, res) {
    try {
      const newDialoguePiece = await DialoguePiece.query().insert(req.body);
      res.status(201).json(newDialoguePiece);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateDialoguePiece(req, res) {
    try {
      const updatedDialoguePiece = await DialoguePiece.query().patchAndFetchById(req.params.id, req.body);
      res.json(updatedDialoguePiece);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteDialoguePiece(req, res) {
    try {
      await DialoguePiece.query().deleteById(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = DialoguePieceController;
