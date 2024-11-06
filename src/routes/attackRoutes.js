// routes/attackRoutes.js
const express = require('express');
const router = express.Router();
const AttackController = require('../controllers/attackController');

router.get('/', AttackController.getAllAttacks);
router.get('/:id', AttackController.getAttackById);
router.post('/', AttackController.createAttack);
router.patch('/:id', AttackController.updateAttack);
router.delete('/:id', AttackController.deleteAttack);

module.exports = router;
