// models/CreatureAttack.js
const { Model } = require('objection');
const Creature = require('./Creature');
const Attack = require('./Attack');

class CreatureAttack extends Model {
  static get tableName() {
    return 'creature_attacks';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id_creature', 'id_attack'],
      properties: {
        id: { type: 'integer' },
        id_creature: { type: 'integer' },
        id_attack: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    return {
      creature: {
        relation: Model.BelongsToOneRelation,
        modelClass: Creature,
        join: {
          from: 'creature_attacks.id_creature',
          to: 'creatures.id'
        }
      },
      attack: {
        relation: Model.BelongsToOneRelation,
        modelClass: Attack,
        join: {
          from: 'creature_attacks.id_attack',
          to: 'attacks.id'
        }
      }
    };
  }
}
module.exports = CreatureAttack;
