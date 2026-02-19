import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h4>আপনার এলাকার যেকোনো সমস্যা, অভিযোগ বা পরামর্শ সরাসরি প্রার্থী ও তার টিমকে জানাতে চান?</h4>
          </div>
          <div className="cta-button-wrapper">
            <a href="/contact-form" className="btn btn-cta">
              বার্তা পাঠান
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
