const express = require('express');
const router = express.Router();
const { loginAdmin, getAdminProfile, verifyToken } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/auth');

// Public routes
router.post('/login', loginAdmin);

// Protected routes
router.get('/profile', authMiddleware, getAdminProfile);
router.get('/verify', authMiddleware, verifyToken);

module.exports = router;
