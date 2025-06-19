const express = require('express');
const contacts = require('../controllers/contactsControllers');  
const router = express.Router();
const path = require('path');
const fs = require('fs');
// Récupérer tous les admins
router.post('/', contacts.create);
router.get('/', contacts.findAll);      
// Récupérer un admin spécifique avec son ID
router.get('/:id', contacts.findOne);

// Mettre à jour un admin avec son ID
router.put('/:id', contacts.update);

// Supprimer un admin avec son ID
router.delete('/:id', contacts.delete);

// Supprimer tous les admins
router.delete('/', contacts.deleteAll);

module.exports = router;  // Exporter le routeur
