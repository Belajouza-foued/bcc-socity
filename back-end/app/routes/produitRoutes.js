const express = require('express');
const produits = require('../controllers/produitsControllers');  
const router = express.Router();
//new start
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);  // Utiliser le bon chemin relatif
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
//new image code

const upload = multer({ storage });
//new

router.put("/:id", upload.single("image"), produits.update);
//end new image code

// Créer un nouvel admin
router.post('/', upload.single('image'), produits.create);

// Récupérer tous les admins
router.get('/', produits.findAll);      

// Récupérer un admin spécifique avec son ID
router.get('/:id', produits.findOne);

// Mettre à jour un admin avec son ID
router.put('/:id', produits.update);

// Supprimer un admin avec son ID
router.delete('/:id', produits.delete);

// Supprimer tous les admins
router.delete('/', produits.deleteAll);

module.exports = router;  // Exporter le routeur
