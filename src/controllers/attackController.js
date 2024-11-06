// controllers/AttackController.js
const Attack = require('../models/Attack');

class AttackController {
  static async getAllAttacks(req, res) {
    try {
      const attacks = await Attack.query();
      res.json(attacks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAttackById(req, res) {
    try {
      const attack = await Attack.query().findById(req.params.id);
      res.json(attack || { message: 'Attack not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createAttack(req, res) {
    try {
      const newAttack = await Attack.query().insert(req.body);
      res.status(201).json(newAttack);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateAttack(req, res) {
    try {
      const updatedAttack = await Attack.query().patchAndFetchById(req.params.id, req.body);
      res.json(updatedAttack);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteAttack(req, res) {
    try {
      await Attack.query().deleteById(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AttackController;
