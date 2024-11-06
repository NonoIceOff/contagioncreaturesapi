const { Model } = require('objection');

class Creature extends Model {
  static get tableName() {
    return 'creatures';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'infected', 'type', 'boost', 'effets', 'textureA', 'textureInfected'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        infected: { type: 'boolean' },
        type: { type: 'array', items: { type: 'string' } },
        boost: { type: 'array', items: { type: ['number', 'string'] } },
        effets: { type: 'array', items: { type: 'string' } },
        textureA: { type: 'string' },
        textureInfected: { type: 'string' },
      },
    };
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
            from: 'creature_attacks.creature_id',
            to: 'creature_attacks.attack_id',
          },
          to: 'attacks.id',
        },
      },
    };
  }
}

module.exports = Creature;
