// models/Attack.js
const { Model } = require('objection');

class Attack extends Model {
  static get tableName() {
    return 'attacks';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'value'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', maxLength: 100 },
        icon: { type: 'string', maxLength: 255 },
        description: { type: 'string' },
        value: { type: 'integer' },
        mode: { type: 'string', maxLength: 50 },
        difficulty: { type: 'string', maxLength: 50 },
        type: { type: 'string', maxLength: 50 }
      }
    };
  }
}
module.exports = Attack;
