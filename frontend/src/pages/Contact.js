import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero-section">
        <div className="container">
          <p className="contact-subtitle">আমাদের সাথে যোগাযোগ করুন</p>
          <h1 className="contact-main-heading">আসুন যোগাযোগ করি!</h1>
          <p className="contact-description">
            আমরা সবসময় আপনার সেবায় প্রস্তুত। আপনার যেকোনো প্রশ্ন, পরামর্শ বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116688.42824024956!2d91.07824792167969!3d23.3547753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375368e188056c09%3A0x5cc9470965630e7e!2sChandina%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1708358400000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
              
              <div className="map-marker">
                <div className="marker-icon"></div>
                <div className="marker-tooltip">
                  <div className="tooltip-flag">🇧🇩</div>
                  <h4>চান্দিনা, কুমিল্লা</h4>
                  <p>কুমিল্লা-৭ (চান্দিনা)<br />বাংলাদেশ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-methods-section">
        <div className="container">
          <div className="contact-methods-grid">
            <div className="contact-method-card">
              <div className="method-icon email-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>
              <h3 className="method-title">ইমেইল ঠিকানা</h3>
              <p className="method-description">ইমেইলের মাধ্যমে যোগাযোগ করুন।</p>
              <a href="mailto:atikulalamshawon@gmail.com" className="method-link">
                atikulalamshawon@gmail.com
              </a>
            </div>

            <div className="contact-method-card">
              <div className="method-icon chat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="method-title">এমপিকে লিখুন</h3>
              <p className="method-description">সরাসরি এমপিকে লিখুন</p>
              <Link to="/contact-form" className="method-link">
                বার্তা পাঠান
              </Link>
            </div>

            <div className="contact-method-card">
              <div className="method-icon phone-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="method-title">ফোন নম্বর</h3>
              <p className="method-description">সকাল ৯টা - বিকাল ৫টা</p>
              <a href="tel:+8801712345678" className="method-link">
                (+৮৮০) ১৭১২-৩৪৮৯৬৫
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
