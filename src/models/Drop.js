// models/Drop.js
const { Model } = require('objection');
const Creature = require('./Creature');
const Item = require('./Item');

class Drop extends Model {
  static get tableName() {
    return 'drop';
  }

  static get relationMappings() {
    return {
      creature: {
        relation: Model.BelongsToOneRelation,
        modelClass: Creature,
        join: {
          from: 'drop.creature_id',
          to: 'creatures.id'
        }
      },
      item: {
        relation: Model.BelongsToOneRelation,
        modelClass: Item,
        join: {
          from: 'drop.item_id',
          to: 'items.id'
        }
      }
    };
  }
}

module.exports = Drop;
