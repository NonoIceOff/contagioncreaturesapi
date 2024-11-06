// models/User.js
const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['username', 'email', 'password'],
      properties: {
        id: { type: 'integer' },
        username: { type: 'string', maxLength: 50 },
        email: { type: 'string', maxLength: 100 },
        password: { type: 'string', maxLength: 255 },
        points: { type: 'integer', default: 0 },
        money: { type: 'number', default: 0.0 }
      }
    };
  }
}
module.exports = User;
