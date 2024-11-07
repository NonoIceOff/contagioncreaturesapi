// controllers/DropController.js
const Drop = require('../models/Drop');

class DropController {
  static async getDropsByCreatureId(req, res) {
    try {
      const { id } = req.params;

      // Récupère tous les drops pour la créature spécifiée
      const drops = await Drop.query()
        .where('creature_id', id)
        .withGraphFetched('item'); // Inclut les informations sur l'item associé

      // Calcule les items qui droppent en fonction du taux
      const droppedItems = drops.filter(drop => {
        const randomValue = Math.random() * 100;
        return randomValue <= drop.rate;
      }).map(drop => drop.item);

      if (droppedItems.length > 0) {
        res.json(droppedItems);
      } else {
        res.status(404).json({ message: 'No items dropped for this creature' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = DropController;
