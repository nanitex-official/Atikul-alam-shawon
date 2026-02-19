import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">আতিকুল আলম শাওন সম্পর্কে জানুন</h2>
            <p className="about-text">
              আতিকুল আলম শাওন একজন বাংলাদেশী রাজনীতিবিদ এবং 
              কুমিল্লা-৭ (চান্দিনা) আসনের নির্বাচিত সংসদ সদস্য। দীর্ঘ রাজনৈতিক জীবনে তিনি 
              গণতন্ত্র, সুশাসন ও জনগণের ভোটাধিকার রক্ষার আন্দোলনে নেতৃত্ব দিয়েছেন; একই সঙ্গে শিক্ষা, 
              স্বাস্থ্য, সড়ক–যোগাযোগ, কৃষি ও তরুণদের কর্মসংস্থানে বাস্তব কাজ করেছেন।
            </p>
            <a href="/candidate-introduction" className="btn">পূর্ণ পরিচিতি দেখুন</a>
          </div>
          <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/assets/images/me.jpg`} alt="আতিকুল আলম শাওন" />
            <div className="about-image-caption">
              <span>আতিকুল আলম শাওন</span>
              <span className="about-image-sub">সংসদ সদস্য, কুমিল্লা-৭ (চান্দিনা)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
