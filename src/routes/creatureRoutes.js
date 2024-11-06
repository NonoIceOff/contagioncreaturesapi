// routes/creatureRoutes.js
const express = require('express');
const CreatureController = require('../controllers/creatureController');
const router = express.Router();

router.get('/', CreatureController.getAllCreatures);
router.get('/:id', CreatureController.getCreatureById);
router.post('/', CreatureController.createCreature);
router.put('/:id', CreatureController.updateCreature);
router.delete('/:id', CreatureController.deleteCreature);

router.get('/:id/attacks', CreatureController.getAttacksByCreatureId);

module.exports = router;
