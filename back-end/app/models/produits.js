const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  titre: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String} // <-- ajout de l'image (nom du fichier)
 });

module.exports = mongoose.model('Produit', produitSchema);
