// models/Quest.js
const { Model } = require('objection');
const Item = require('./Item');

class Quest extends Model {
  static get tableName() {
    return 'quest';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title'],
      properties: {
        id: { type: 'integer' },
        title: { type: 'string', maxLength: 100 },
        description: { type: 'string' },
        is_finished: { type: 'boolean', default: false },
        item_id: { type: 'integer' },
        item_quantity: { type: 'integer', default: 1 },
        money: { type: 'number', default: 0.0 }
      }
    };
  }

  static get relationMappings() {
    return {
      item: {
        relation: Model.BelongsToOneRelation,
        modelClass: Item,
        join: {
          from: 'quest.item_id',
          to: 'items.id'
        }
      }
    };
  }
}
module.exports = Quest;
