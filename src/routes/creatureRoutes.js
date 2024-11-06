// routes/creatureRoutes.js
const express = require('express');
const router = express.Router();
const CreatureController = require('../controllers/creatureController');

router.get('/', CreatureController.getAllCreatures);
router.get('/:id', CreatureController.getCreatureById);
router.post('/', CreatureController.createCreature);
router.patch('/:id', CreatureController.updateCreature);
router.delete('/:id', CreatureController.deleteCreature);

module.exports = router;
