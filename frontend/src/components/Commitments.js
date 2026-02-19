import React from 'react';
import { Link } from 'react-router-dom';
import CommitmentCard from '../components/CommitmentCard';
import './Commitments.css';

const Commitments = ({ limit = null, showViewAll = false }) => {
  // Actual images from public/assets/images
  const img1 = "/assets/images/img1.jpg";
  const img2 = "/assets/images/img2.jpg";
  const img3 = "/assets/images/img3.jpg";
  const img4 = "/assets/images/img4.jpg";
  const img5 = "/assets/images/img5.jpg";
  const img6 = "/assets/images/img6.jpg";

  const commitments = [
    {
      title: 'নদীভাঙন ও বন্যা–নিরাপত্তা',
      image: img1,
      link: '/commitment/1'
    },
    {
      title: 'ঢাকা নয়, চিকিৎসা হবে রায়পুরেই',
      image: img2,
      link: '/commitment/2'
    },
    {
      title: 'মাদকমুক্ত কুমিল্লা-৭ (চান্দিনা)',
      image: img3,
      link: '/commitment/3'
    },
    {
      title: 'শিক্ষা, দক্ষতা ও নারী ক্ষমতায়ন',
      image: img4,
      link: '/commitment/4'
    },
    {
      title: 'সবুজ রায়পুর ও পরিবেশ',
      image: img5,
      link: '/commitment/5'
    },
    {
      title: 'ডিজিটাল ও স্মার্ট জনসেবা',
      image: img6,
      link: '/commitment/6'
    }
  ];

  const displayedCommitments = limit ? commitments.slice(0, limit) : commitments;

  return (
    <section className="commitments-section section">
      <div className="container">
        <h3 className="section-title">উল্লেখযোগ্য কাজ</h3>
        <div className="commitments-grid grid grid-3">
          {displayedCommitments.map((commitment, index) => (
            <CommitmentCard
              key={index}
              title={commitment.title}
              image={commitment.image}
              link={commitment.link}
            />
          ))}
        </div>
        {showViewAll && (
          <div className="view-all-link">
            <Link to="/commitment" className="btn">
              সব দেখুন →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Commitments;
