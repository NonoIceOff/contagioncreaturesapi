// models/Item.js
const { Model } = require('objection');

class Item extends Model {
  static get tableName() {
    return 'items';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', maxLength: 100 },
        mode: { type: 'string', maxLength: 50 },
        description: { type: 'string' },
        texture: { type: 'string', maxLength: 255 },
        coef: { type: 'number' },
        type: { type: 'string', maxLength: 50 }
      }
    };
  }
}
module.exports = Item;
