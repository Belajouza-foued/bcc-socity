// middlewares/upload.js
const multer = require("multer");
const path = require("path");

// Configuration du stockage des fichiers
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");  // dossier où les images seront enregistrées
  },
  filename: function (req, file, cb) {
    // Génère un nom unique avec timestamp + extension d'origine
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Filtrer uniquement les fichiers image
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("Seules les images sont autorisées (jpeg, jpg, png, gif)"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // max 5Mo
});

module.exports = upload;
