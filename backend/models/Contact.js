const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'নাম প্রদান করুন'],
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: [true, 'মোবাইল নম্বর প্রদান করুন'],
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'সঠিক ইমেইল প্রদান করুন'],
  },
  address: {
    type: String,
    default: '',
    trim: true,
  },
  subject: {
    type: String,
    required: [true, 'বিষয় প্রদান করুন'],
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'বার্তা প্রদান করুন'],
  },
  attachment: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    enum: ['pending', 'read', 'replied', 'archived'],
    default: 'pending',
  },
  replied: {
    type: Boolean,
    default: false,
  },
  replyMessage: {
    type: String,
    default: null,
  },
  repliedAt: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true,
});

// Add indexes for better query performance
contactSchema.index({ status: 1, createdAt: -1 });
contactSchema.index({ email: 1 });
contactSchema.index({ mobileNumber: 1 });

module.exports = mongoose.model('Contact', contactSchema);
