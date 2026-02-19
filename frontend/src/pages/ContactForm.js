import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    address: '',
    subject: '',
    message: '',
    attachment: null,
    privacyAccepted: false
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus({
          type: 'error',
          message: 'ফাইলের আকার ৫ MB এর বেশি হতে পারবে না'
        });
        return;
      }
      setFileName(file.name);
      setFormData({
        ...formData,
        attachment: file
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ type: '', message: '' });

    // Validate required fields
    if (!formData.name || !formData.mobileNumber || !formData.subject || !formData.message) {
      setSubmitStatus({
        type: 'error',
        message: 'অনুগ্রহ করে সকল প্রয়োজনীয় তথ্য প্রদান করুন'
      });
      return;
    }

    setLoading(true);

    try {
      // Prepare form data
      const submitData = {
        name: formData.name,
        mobileNumber: formData.mobileNumber,
        email: formData.email,
        address: formData.address,
        subject: formData.subject,
        message: formData.message,
        attachment: fileName || null
      };

      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে। শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।'
        });
        
        // Reset form
        setFormData({
          name: '',
          mobileNumber: '',
          email: '',
          address: '',
          subject: '',
          message: '',
          attachment: null,
          privacyAccepted: false
        });
        setFileName('');
        
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'বার্তা পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'সার্ভারের সাথে সংযোগ করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-page">
      <section className="page-hero">
        <div className="container">
          <h1>আপনার এমপিকে লিখুন</h1>
          <p className="hero-subtitle">
            আপনার এলাকার যেকোনো সমস্যা, অভিযোগ, প্রস্তাব বা পরামর্শ সরাসরি আমার কাছে জানাতে এই ফর্মটি ব্যবহার করুন।
            আপনার তথ্য গোপন রাখা হবে (যদি আপনি চান) এবং প্রতিটি বার্তা গুরুত্বসহকারে পর্যালোচনা করা হবে।
          </p>
        </div>
      </section>

      <section className="section form-section">
        <div className="container">
          {submitStatus.message && (
            <div className={`alert alert-${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">নাম (প্রাসঙ্গিক) *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="আপনার নাম (চাইলে ফাঁকা রাখতে পারেন)"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobileNumber">মোবাইল নম্বর *</label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="সক্রিয় মোবাইল নম্বর নিখুন, প্রয়োজনে যোগাযোগের জন্য।"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">ইমেইল (প্রাসঙ্গিক)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="আপনার ইমেইল (যদি থাকে)"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">ঠিকানা / এলাকা *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="গ্রাম/মহল্লা, ইউনিয়ন/ওয়ার্ড, উপজেলা/থানা"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">অভিযোগ / মতামতের বিষয় *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="সংক্ষেপে বিষয় নিখুন (যেমন: রাস্তা সমস্যা, স্বাস্থ্যসেবা, মাদক, শিক্ষা, প্রশাসনিক হয়রানি ইত্যাদি)"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">বিস্তারিত অভিযোগ / মতামত *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="আপনার সমস্যার বিস্তারিত নিখুন—কবে থেকে, কাদের বেশি কষ্ট হচ্ছে, আপনে কোনও অভিযোগ করেছেন কি না ইত্যাদি।"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="attachment">সংযুক্তি (প্রাসঙ্গিক – ফাইল আপলোড)</label>
                <div className="file-input-wrapper">
                  <label htmlFor="attachment" className="file-label">
                    Choose File
                  </label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                    className="file-input"
                  />
                  <span className="file-name">{fileName || 'No file chosen'}</span>
                </div>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleChange}
                  />
                  <span>আমার নাম ও যোগাযোগের তথ্য অনুমতিহীনে প্রকাশ না করার অনুরোধ করছি।</span>
                </label>
              </div>

              <button type="submit" className="btn btn-submit" disabled={loading}>
                {loading ? 'পাঠানো হচ্ছে...' : 'মতামত পাঠান'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
