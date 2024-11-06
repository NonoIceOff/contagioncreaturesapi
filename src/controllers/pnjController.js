// controllers/PnjController.js
const Pnj = require('../models/PNJ');

class PnjController {
  // Récupère tous les PNJ
  static async getAllPnjs(req, res) {
    try {
      const pnjs = await Pnj.query();
      res.json(pnjs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Récupère un PNJ par son ID
  static async getPnjById(req, res) {
    try {
      const pnj = await Pnj.query().findById(req.params.id);
      if (pnj) {
        res.json(pnj);
      } else {
        res.status(404).json({ message: 'PNJ not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Crée un nouveau PNJ
  static async createPnj(req, res) {
    try {
      const newPnj = await Pnj.query().insert(req.body);
      res.status(201).json(newPnj);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Met à jour un PNJ existant
  static async updatePnj(req, res) {
    try {
      const updatedPnj = await Pnj.query().patchAndFetchById(req.params.id, req.body);
      if (updatedPnj) {
        res.json(updatedPnj);
      } else {
        res.status(404).json({ message: 'PNJ not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Supprime un PNJ
  static async deletePnj(req, res) {
    try {
      const deletedRows = await Pnj.query().deleteById(req.params.id);
      if (deletedRows) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'PNJ not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PnjController;
