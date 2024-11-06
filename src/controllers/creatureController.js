// controllers/CreatureController.js
const Creature = require('../models/Creature');

class CreatureController {
  static async getAllCreatures(req, res) {
    try {
      const creatures = await Creature.query();
      res.json(creatures);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getCreatureById(req, res) {
    try {
      const creature = await Creature.query().findById(req.params.id);
      res.json(creature || { message: 'Creature not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createCreature(req, res) {
    try {
      const newCreature = await Creature.query().insert(req.body);
      res.status(201).json(newCreature);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateCreature(req, res) {
    try {
      const updatedCreature = await Creature.query().patchAndFetchById(req.params.id, req.body);
      res.json(updatedCreature);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteCreature(req, res) {
    try {
      await Creature.query().deleteById(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAttacksByCreatureId(req, res) {
    try {
      const creature = await Creature.query()
        .findById(req.params.id)
        .withGraphFetched('attacks'); // Utilise la relation définie dans Creature

      if (creature) {
        res.json(creature.attacks); // Retourne uniquement les attaques
      } else {
        res.status(404).json({ message: 'Creature not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CreatureController;
