// models/Pnj.js
const { Model } = require('objection');

class Pnj extends Model {
  static get tableName() {
    return 'pnj';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', maxLength: 100 },
        texture: { type: 'string', maxLength: 255 },
        icon: { type: 'string', maxLength: 255 }
      }
    };
  }
}
module.exports = Pnj;
