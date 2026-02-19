const express = require('express');
const {
  submitContactForm,
  getAllContacts,
  getContactById,
  updateContactStatus,
  replyToContact,
  deleteContact,
} = require('../controllers/contactController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/', submitContactForm);

// Admin routes (protected)
router.get('/', protect, adminOnly, getAllContacts);
router.get('/:id', protect, adminOnly, getContactById);
router.put('/:id/status', protect, adminOnly, updateContactStatus);
router.put('/:id/reply', protect, adminOnly, replyToContact);
router.delete('/:id', protect, adminOnly, deleteContact);

module.exports = router;
