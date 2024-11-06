const express = require('express');
const Knex = require('knex');
const { Model } = require('objection');
var cors = require('cors');
require('dotenv').config();

const knexConfig = require('../knexfile');
const knex = Knex(knexConfig);

Model.knex(knex);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Importer toutes les routes
const creaturesRoutes = require('./routes/creatureRoutes');
const attacksRoutes = require('./routes/attackRoutes');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const questRoutes = require('./routes/questRoutes');
const questStadeRoutes = require('./routes/questStadeRoutes');
const dialogueRoutes = require('./routes/dialogueRoutes');
const dialoguePieceRoutes = require('./routes/dialoguePieceRoutes');
const pnjRoutes = require('./routes/pnjRoutes');

// Utiliser les routes
app.use('/api/creatures', creaturesRoutes);
app.use('/api/attacks', attacksRoutes);
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/quests', questRoutes);
app.use('/api/quest-stages', questStadeRoutes);
app.use('/api/dialogues', dialogueRoutes);
app.use('/api/dialogue-pieces', dialoguePieceRoutes);
app.use('/api/pnjs', pnjRoutes);

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Démarrer le serveur
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
