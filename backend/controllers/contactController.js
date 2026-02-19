const Contact = require('../models/Contact');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res, next) => {
  try {
    const { name, mobileNumber, email, address, subject, message, attachment } = req.body;

    // Validate required fields
    if (!name || !mobileNumber || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'সকল প্রয়োজনীয় তথ্য প্রদান করুন',
      });
    }

    // Create contact entry
    const contact = await Contact.create({
      name,
      mobileNumber,
      email: email || '',
      address: address || '',
      subject,
      message,
      attachment: attachment || null,
    });

    res.status(201).json({
      success: true,
      message: 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে। শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।',
      data: {
        id: contact._id,
        name: contact.name,
        status: contact.status,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'বার্তা পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Get all contacts (for admin)
// @route   GET /api/contact
// @access  Private/Admin
const getAllContacts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const status = req.query.status || 'all';
    const skip = (page - 1) * limit;

    // Build query
    const query = status === 'all' ? {} : { status };

    // Get contacts with pagination
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .select('-__v');

    // Get total count
    const total = await Contact.countDocuments(query);

    res.status(200).json({
      success: true,
      data: contacts,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit),
        limit,
      },
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'তথ্য লোড করতে সমস্যা হয়েছে',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Get single contact
// @route   GET /api/contact/:id
// @access  Private/Admin
const getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'যোগাযোগ খুঁজে পাওয়া যায়নি',
      });
    }

    // Update status to read if it was pending
    if (contact.status === 'pending') {
      contact.status = 'read';
      await contact.save();
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({
      success: false,
      message: 'তথ্য লোড করতে সমস্যা হয়েছে',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Update contact status
// @route   PUT /api/contact/:id/status
// @access  Private/Admin
const updateContactStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (!['pending', 'read', 'replied', 'archived'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'অবৈধ স্ট্যাটাস',
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'যোগাযোগ খুঁজে পাওয়া যায়নি',
      });
    }

    res.status(200).json({
      success: true,
      message: 'স্ট্যাটাস আপডেট করা হয়েছে',
      data: contact,
    });
  } catch (error) {
    console.error('Update contact status error:', error);
    res.status(500).json({
      success: false,
      message: 'আপডেট করতে সমস্যা হয়েছে',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Reply to contact
// @route   PUT /api/contact/:id/reply
// @access  Private/Admin
const replyToContact = async (req, res, next) => {
  try {
    const { replyMessage } = req.body;

    if (!replyMessage) {
      return res.status(400).json({
        success: false,
        message: 'উত্তর বার্তা প্রদান করুন',
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        replied: true,
        replyMessage,
        repliedAt: new Date(),
        status: 'replied',
      },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'যোগাযোগ খুঁজে পাওয়া যায়নি',
      });
    }

    res.status(200).json({
      success: true,
      message: 'উত্তর সফলভাবে পাঠানো হয়েছে',
      data: contact,
    });
  } catch (error) {
    console.error('Reply to contact error:', error);
    res.status(500).json({
      success: false,
      message: 'উত্তর পাঠাতে সমস্যা হয়েছে',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Delete contact
// @route   DELETE /api/contact/:id
// @access  Private/Admin
const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'যোগাযোগ খুঁজে পাওয়া যায়নি',
      });
    }

    res.status(200).json({
      success: true,
      message: 'যোগাযোগ মুছে ফেলা হয়েছে',
    });
  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({
      success: false,
      message: 'মুছে ফেলতে সমস্যা হয়েছে',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

module.exports = {
  submitContactForm,
  getAllContacts,
  getContactById,
  updateContactStatus,
  replyToContact,
  deleteContact,
};
