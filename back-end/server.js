const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Import des routes
const path = require('path');
const adminRoutes = require('./app/routes/adminRoutes');
const produitRoutes = require('./app/routes/produitRoutes')
const contactRoutes = require('./app/routes/contactRoutes')
const emailRoutes = require('./app/routes/email.routes');


// Initialize Express
const app = express();

// Middleware
app.use(express.json()); // Pour analyser les requêtes JSON
app.use(cors()); // Pour permettre les requêtes cross-origin
//new
app.use('/uploads', express.static(path.join(__dirname, 'app/uploads')));

//new
// Connexion à MongoDB
mongoose.set('strictQuery', false); // ou true selon ton besoin
mongoose.connect('mongodb://localhost:27017/bbcdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connecté à MongoDB"))
  .catch(err => console.error("Erreur de connexion à MongoDB:", err));

// Définition des routes
app.use('/api/auth', adminRoutes); // Routes pour l'authentification
app.use('/api/produits', produitRoutes); 
app.use('/api/contacts', contactRoutes); 
app.use('/api/email', emailRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 5030;
app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur le port ${PORT}`));
