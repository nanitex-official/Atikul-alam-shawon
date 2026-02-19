const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// @desc    Get all users
// @route   GET /api/users
// @access  Private
router.get('/', protect, async (req, res) => {
    try {
        const User = require('../models/User');
        const users = await User.find({}).select('-password');
        res.status(200).json({ success: true, count: users.length, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// @desc    Get single user by ID
// @route   GET /api/users/:id
// @access  Private
router.get('/:id', protect, async (req, res) => {
    try {
        const User = require('../models/User');
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
