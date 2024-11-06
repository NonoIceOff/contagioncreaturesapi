// models/QuestStade.js
const { Model } = require('objection');
const Quest = require('./Quest');

class QuestStade extends Model {
  static get tableName() {
    return 'quest_stade';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['description', 'quest_id'],
      properties: {
        id: { type: 'integer' },
        description: { type: 'string' },
        quest_id: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    return {
      quest: {
        relation: Model.BelongsToOneRelation,
        modelClass: Quest,
        join: {
          from: 'quest_stade.quest_id',
          to: 'quest.id'
        }
      }
    };
  }
}
module.exports = QuestStade;
