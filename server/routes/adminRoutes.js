const express = require('express');
const router = express.Router();
const { loginAdmin, getAdminProfile, verifyToken, registerAdmin } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/auth');

// Public routes
router.post('/login', loginAdmin);
router.post('/register', registerAdmin); // For backend registration only

// Protected routes
router.get('/profile', authMiddleware, getAdminProfile);
router.get('/verify', authMiddleware, verifyToken);

module.exports = router;
