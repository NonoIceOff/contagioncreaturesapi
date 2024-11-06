// controllers/ItemController.js
const Item = require('../models/Item');

class ItemController {
  static async getAllItems(req, res) {
    try {
      const items = await Item.query();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getItemById(req, res) {
    try {
      const item = await Item.query().findById(req.params.id);
      res.json(item || { message: 'Item not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createItem(req, res) {
    try {
      const newItem = await Item.query().insert(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateItem(req, res) {
    try {
      const updatedItem = await Item.query().patchAndFetchById(req.params.id, req.body);
      res.json(updatedItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteItem(req, res) {
    try {
      await Item.query().deleteById(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ItemController;
