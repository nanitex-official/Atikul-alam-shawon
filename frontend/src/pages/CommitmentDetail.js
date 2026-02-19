import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { WORKS } from '../data/commitmentsData';
import './CommitmentDetail.css';

const CommitmentDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const work = WORKS.find((w) => w.id === parseInt(id));

    if (!work) {
        return (
            <div style={{ textAlign: 'center', padding: '80px 24px' }}>
                <h2>তথ্য পাওয়া যায়নি</h2>
                <button className="cd-back-btn" onClick={() => navigate('/commitment')}>
                    ← ফিরে যান
                </button>
            </div>
        );
    }

    return (
        <div className="cd-page">
            {/* Hero */}
            <div className="cd-hero">
                <div className="cd-hero-pattern" />
                <div className="cd-hero-cat">{work.category}</div>
                <h1 className="cd-hero-title">{work.title}</h1>
                <div className="cd-hero-year">{work.year}</div>
            </div>

            {/* Content */}
            <div className="cd-content">
                <button className="cd-back-btn" onClick={() => navigate('/commitment')}>
                    ← উল্লেখযোগ্য কাজে ফিরুন
                </button>

                {/* Image */}
                <div className="cd-image-wrap">
                    <img src={work.image} alt={work.title} />
                </div>

                {/* Summary */}
                <p className="cd-summary">{work.summary}</p>

                {/* Details */}
                <div className="cd-details-section">
                    <h3 className="cd-details-title">বিস্তারিত কার্যক্রম</h3>
                    <ul className="cd-details-list">
                        {work.details.map((d, i) => (
                            <li key={i}>
                                {d}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Achievement */}
                <div className="cd-achievement">
                    মূল অর্জন: {work.achievement}
                </div>
            </div>
        </div>
    );
};

export default CommitmentDetail;
