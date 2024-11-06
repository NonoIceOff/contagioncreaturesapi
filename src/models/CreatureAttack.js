// models/CreatureAttack.js
const { Model } = require('objection');

class CreatureAttack extends Model {
  static get tableName() {
    return 'creature_attacks';
  }
}

module.exports = CreatureAttack;
