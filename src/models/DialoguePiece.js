// models/DialoguePiece.js
const { Model } = require('objection');

class DialoguePiece extends Model {
  static get tableName() {
    return 'dialogue_piece';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['text'],
      properties: {
        id: { type: 'integer' },
        text: { type: 'string' },
        position: { type: 'integer' },
        has_choices: { type: 'boolean', default: false },
        choices: { type: 'array', items: { type: 'string' } }
      }
    };
  }
}
module.exports = DialoguePiece;
