import React from 'react';
import { Link } from 'react-router-dom';
import './CandidateIntroduction.css';

const CandidateIntroduction = () => {
  return (
    <div className="candidate-page">
      {/* ── Hero intro ── */}
      <div className="cp-section candidate-hero">
        <div className="candidate-photo-wrap">
          <div className="candidate-photo-bg"></div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/me.jpg`}
            alt="আতিকুল আলম শাওন"
            className="candidate-photo"
          />
        </div>
        <div className="candidate-info">
          <p className="candidate-greeting">হ্যালো, আমি</p>
          <h1 className="candidate-name">
            আতিকুল আলম <span>শাওন</span>
          </h1>
          <p className="candidate-title">কুমিল্লা-৭ (চান্দিনা) আসনের একজন নির্বাচিত সংসদ সদস্য</p>
          <p className="candidate-desc">
            আতিকুল আলম শাওন একজন বাংলাদেশী রাজনীতিবিদ।
            দীর্ঘ রাজনৈতিক জীবনে তিনি গণতন্ত্র, সুশাসন ও জনগণের ভোটাধিকার রক্ষার আন্দোলনে নেতৃত্ব দিয়েছেন।
          </p>
          <p className="candidate-desc">
            তার নেতৃত্বে কুমিল্লা-৭ (চান্দিনা) আসনে উল্লেখযোগ্য উন্নয়ন কাজ সম্পন্ন হয়েছে এবং এলাকার জনগণের কল্যাণে নিরলসভাবে কাজ করে যাচ্ছেন।
          </p>
          <Link to="/contact" className="candidate-btn">যোগাযোগ করুন</Link>
          <div className="candidate-social">
            <a href="https://www.facebook.com/atikulalam.shawan" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://bn.wikipedia.org/wiki/আতিকুল_আলম_শাওন" target="_blank" rel="noopener noreferrer" aria-label="Wikipedia"><i className="fab fa-wikipedia-w"></i></a>
          </div>
        </div>
      </div>

      <div className="cp-divider"></div>

      {/* ── ব্যক্তিজীবন ── */}
      <div className="cp-section">
        <div className="bio-section-inner">
          <div className="bio-section-text">
            <span className="bio-section-tag">ব্যক্তিজীবন</span>
            <h2>ব্যক্তিগত জীবন</h2>
            <p>
              আতিকুল আলম শাওন বাংলাদেশের কুমিল্লা জেলার চান্দিনা উপজেলায় জন্মগ্রহণ করেন।
              তিনি একটি সন্মানিত পরিবারে বেড়ে ওঠেন। শিক্ষাজীবন সমাপ্ত করে উন্নত ডিগ্রি অর্জন করেন।
            </p>
            <p>
              ব্যক্তিগত জীবনে তিনি বিবাহিত এবং দুই সন্তানের জনক। তিনি সমাজসেবা, শিক্ষা ও মানবিক উন্নয়নে গভীরভাবে
              বিশ্বাসী। সাধারণ মানুষের সমস্যা সমাধানে সবসময় সুর্বিবেচনার সাথে কাজ করেন।
            </p>
            <ul className="bio-highlights">
              <li><i className="fas fa-map-marker-alt"></i> চান্দিনা, কুমিল্লা</li>
              <li><i className="fas fa-graduation-cap"></i> উচ্চশিক্ষিত</li>
              <li><i className="fas fa-heart"></i> সমাজসেবায় নিবেদিত</li>
            </ul>
          </div>
          <div className="bio-section-images">
            <div className="bio-img-main">
              <img src={`${process.env.PUBLIC_URL}/assets/images/me.jpg`} alt="ব্যক্তিজীবন" />
            </div>
          </div>
        </div>
      </div>

      <div className="cp-divider"></div>

      {/* ── রাজনৈতিক জীবন ── */}
      <div className="cp-section bio-section-reverse">
        <div className="bio-section-inner">
          <div className="bio-section-text">
            <span className="bio-section-tag">রাজনীতি</span>
            <h2>রাজনৈতিক জীবন</h2>
            <p>
              আতিকুল আলম শাওন দীর্ঘদিন ধরে বাংলাদেশের রাজনীতিতে সক্রিয় ভূমিকা পালন করে আসছেন।
              কুমিল্লা-৭ (চান্দিনা) আসনের নির্বাচিত সংসদ সদস্য হিসেবে তিনি এলাকার মানুষের জন্য বহু সংসদীয় কার্যক্রম গ্রহণ করেছেন।
            </p>
            <p>
              তিনি গণতন্ত্র প্রতিষ্ঠা, সুশাসন নিয়ম-নীতি প্রতিষ্ঠা এবং জনগণের ভোটাধিকার সুরক্ষার জন্য নিরলসভাবে কাজ করে যাচ্ছেন।
              শিক্ষা, স্বাস্থ্য, সড়ক যোগাযোগ ও তরুণ উদ্যোক্তাদের কর্মসংস্থানে তার অবদান উল্লেখযোগ্য।
            </p>
            <ul className="bio-highlights">
              <li><i className="fas fa-landmark"></i> সংসদ সদস্য, কুমিল্লা-৭</li>
              <li><i className="fas fa-users"></i> জনগণের প্রতিনিধি</li>
              <li><i className="fas fa-chart-line"></i> উন্নয়নমুখী নেতৃত্ব</li>
            </ul>
          </div>
          <div className="bio-section-images">
            <div className="bio-img-main">
              <img src={`${process.env.PUBLIC_URL}/assets/images/shawon.png`} alt="রাজনৈতিক জীবন" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateIntroduction;
