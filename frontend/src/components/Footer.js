import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.facebook.com/atikulalam.shawan" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://bn.wikipedia.org/wiki/আতিকুল_আলম_শাওন" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-wikipedia-w"></i>
          </a>

        </div>

        <h2 className="footer-title">আতিকুল আলম শাওন</h2>

        <p className="footer-description">
          একজন বাংলাদেশী রাজনীতিবিদ এবং কুমিল্লা-৭ (চান্দিনা) আসনের নির্বাচিত সংসদ সদস্য
        </p>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>© ২০২৬ সর্বস্বত্ব সংরক্ষিত</p>
          </div>
          <div className="developer">
            <p>
              Developed by{' '}
              <a href="https://nanitex.com/" target="_blank" rel="noopener noreferrer">
                NaniteX
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
