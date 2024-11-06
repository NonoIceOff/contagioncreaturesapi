// models/Dialogue.js
const { Model } = require('objection');
const Pnj = require('./PNJ');
const DialoguePiece = require('./DialoguePiece');

class Dialogue extends Model {
  static get tableName() {
    return 'dialogue';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id_pnj', 'id_dialogue_piece'],
      properties: {
        id: { type: 'integer' },
        id_pnj: { type: 'integer' },
        id_dialogue_piece: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    return {
      pnj: {
        relation: Model.BelongsToOneRelation,
        modelClass: Pnj,
        join: {
          from: 'dialogue.id_pnj',
          to: 'pnj.id'
        }
      },
      dialoguePiece: {
        relation: Model.BelongsToOneRelation,
        modelClass: DialoguePiece,
        join: {
          from: 'dialogue.id_dialogue_piece',
          to: 'dialogue_piece.id'
        }
      }
    };
  }
}
module.exports = Dialogue;
