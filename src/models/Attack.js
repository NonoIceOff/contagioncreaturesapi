// models/Attack.js
const { Model } = require('objection');

class Attack extends Model {
  static get tableName() {
    return 'attacks';
  }

  static get relationMappings() {
    const Creature = require('./Creature');
    const CreatureAttack = require('./CreatureAttack');

    return {
      creatures: {
        relation: Model.ManyToManyRelation,
        modelClass: Creature,
        join: {
          from: 'attacks.id',
          through: {
            from: 'creature_attacks.id_attack',
            to: 'creature_attacks.id_creature',
          },
          to: 'creatures.id',
        },
      },
    };
  }
}

module.exports = Attack;
