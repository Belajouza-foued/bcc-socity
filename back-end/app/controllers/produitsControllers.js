const Produit = require("../models/produits");
const path = require('path');
const fs = require('fs');
const { produits } = require("../models");
// Ajouter un admin
    

// Trouver tous les admins
exports.create = (req, res) => {
  console.log("Reçu dans req.body :", req.body);
  console.log("Image uploadée :", req.file);

  const produit = new Produit({
    name: req.body.name,
    titre: req.body.titre,
    price: req.body.price,
    description: req.body.description,
    image: req.file ? req.file.filename : null // stocke le nom du fichier image
  });

  produit.save()
    .then(data => res.status(201).send(data))
    .catch(err => {
      console.error("Erreur lors de la sauvegarde :", err);
      res.status(500).send({
        message: err.message || "Une erreur est survenue lors de la création du produit."
      });
    });
};


//trouver produits
exports.findAll = (req, res) => {
  const name = req.query.name;
  const condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
  Produit.find(condition)
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message: err.message || "Erreur lors de la récupération des admins.",
      })
    );
};
// Trouver un admin par ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Produit.findById(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({ message: "Produit non trouvé avec id=" + id });
      }
      res.send(data);
    })
    .catch(err =>
      res.status(500).send({
        message: "Erreur lors de la récupération de l'admin avec id=" + id,
      })
    );
};

// Supprimer un admin par ID
exports.delete = (req, res) => {
  const id = req.params.id;

  Produit.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({ message: `Impossible de supprimer l'produit avec id=${id}.` });
      }
      res.send({ message: "produit supprimé avec succès !" });
    })
    .catch(err =>
      res.status(500).send({
        message: "Erreur lors de la suppression de l'admin avec id=" + id,
      })
    );
};

// Supprimer tous les admins
exports.deleteAll = (req, res) => {
  Produit.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} admins supprimés avec succès.`,
      });
    })
    .catch(err =>
      res.status(500).send({
        message: err.message || "Erreur lors de la suppression des admins.",
      })
    );
};

// Mettre à jour un admin par ID
exports.update = async (req, res) => {
  try {
    const { name, titre, price, description  } = req.body;
    const updatedData = { name, titre, price, description };

    if (req.file) {
      updatedData.image = req.file.filename; // nouvelle image si uploadée
    }
    //supresssion image and update
    if (req.file && produit.image) {
  const oldPath = path.join(__dirname, "../uploads", produit.image);
  fs.unlink(oldPath, (err) => {
    if (err) console.error("Erreur suppression image :", err.message);
  });
}
//end
    const updatedProduit = await Produit.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!updatedProduit) return res.status(404).json({ message: "Produit non trouvé" });

    res.json(updatedProduit);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la mise à jour", error: err.message });
  }
};
