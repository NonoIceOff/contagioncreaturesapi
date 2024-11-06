// models/Creature.js
const { Model } = require('objection');

class Creature extends Model {
  static get tableName() {
    return 'creatures';
  }

  static get relationMappings() {
    const Attack = require('./Attack');
    const CreatureAttack = require('./CreatureAttack');

    return {
      attacks: {
        relation: Model.ManyToManyRelation,
        modelClass: Attack,
        join: {
          from: 'creatures.id',
          through: {
            from: 'creature_attacks.id_creature',
            to: 'creature_attacks.id_attack',
          },
          to: 'attacks.id',
        },
      },
    };
  }
}

module.exports = Creature;
