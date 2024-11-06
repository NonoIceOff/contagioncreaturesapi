// controllers/UserController.js
const User = require('../models/User');

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await User.query();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await User.query().findById(req.params.id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createUser(req, res) {
    try {
      const newUser = await User.query().insert(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const updatedUser = await User.query().patchAndFetchById(req.params.id, req.body);
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      await User.query().deleteById(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Inscription sans cryptage
  static async register(req, res) {
    try {
      const { username, email, password } = req.body;

      // Vérifier si l'email est déjà utilisé
      const existingUser = await User.query().findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }

      // Créer l'utilisateur avec le mot de passe en clair
      const newUser = await User.query().insert({
        username,
        email,
        password, // Stocker le mot de passe en clair
      });

      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      // Vérifiez que l'email et le mot de passe ne sont pas undefined
      if (typeof email === 'undefined' || typeof password === 'undefined') {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      // Rechercher l'utilisateur par email
      const user = await User.query().findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Vérifier le mot de passe
      if (password !== user.password) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Réponse indiquant que la connexion est réussie
      res.json({ message: 'Logged in successfully', user: { id: user.id, email: user.email, username: user.username } });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = UserController;
