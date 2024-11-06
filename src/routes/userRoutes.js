// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);


// Route pour l'inscription (register)
router.post('/register', UserController.register);

// Route pour la connexion (login)
router.post('/login', UserController.login);

module.exports = router;
