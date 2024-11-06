// controllers/CreatureController.js
const Creature = require('../models/Creature');
const Attack = require('../models/Attack');

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
      const attacks = await Attack.query()
        .joinRelated('creature_attacks')
        .where('creature_attacks.id_creature', req.params.id);
      
      if (attacks.length > 0) {
        res.json(attacks);
      } else {
        res.status(404).json({ message: 'No attacks found for this creature' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CreatureController;
