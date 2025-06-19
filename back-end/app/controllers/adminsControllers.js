const jwt = require('jsonwebtoken');
const Admin = require('../models/admins');
const fs = require('fs');
//forgot//
const bcrypt = require('bcryptjs');

const dotenv = require('dotenv');
dotenv.config();
//forgot//
// JWT Secret Key
const JWT_SECRET = 'your_jwt_secret_key';

// User Registration
exports.register = async (req, res) => {
    const { name, number,email, password  } = req.body;
   

    try {
        // Hash Password
         const hashedPassword = await bcrypt.hash(password, 10);
        // Create New User
        const newAdmin = new Admin({
            name: name,
            number: number,
         email: email,
             password: hashedPassword
          
        });

        await newAdmin.save();
        res.status(201).json({ message: 'Customer registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
};

// User Login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const admin = await Admin.findOne({email });
        if (!admin) {
            return res.status(400).json({ error: 'Invalid nom or number' });
        }
  const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Mot de passe incorrect' });
        }
       

        // Generate JWT
        const token = jwt.sign({ userId: admin._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, userId: admin._id, name: admin.name, number: admin.number});
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};
// Récupérer le profil de l'utilisateur
exports.getProfile = async (req, res) => {
    try {
        console.log('Fetching profile for userId:', req.user.userId); // Log
        const admin = await admin.findById(req.user.userId).select('-number');
          if (!admin) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(admin);
    } catch (error) {
        console.error('Error fetching user profile:', error); // Log
        res.status(500).json({ error: 'Error fetching user profile' });
    }
};



// Reset Password
