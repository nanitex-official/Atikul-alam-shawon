import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CommitmentPage.css';
import { WORKS } from '../data/commitmentsData';

const CATEGORIES = ['সব', 'অবকাঠামো', 'স্বাস্থ্য', 'শিক্ষা', 'সামাজিক', 'পরিবেশ', 'ডিজিটাল'];

const STATS = [
    { number: '৬টি', label: 'মূল কর্মক্ষেত্র' },
    { number: '৫ লক্ষ+', label: 'উপকারভোগী' },
    { number: '১৫০+', label: 'প্রকল্প সম্পন্ন' },
    { number: '৫ বছর', label: 'নিরলস সেবা' },
];

const CommitmentPage = () => {
    const [activeCategory, setActiveCategory] = useState('সব');

    const filtered =
        activeCategory === 'সব' ? WORKS : WORKS.filter((w) => w.category === activeCategory);

    return (
        <div className="cp-page">
            {/* Hero */}
            <div className="cp-hero">
                <div className="cp-hero-pattern" />
                <div className="cp-hero-content">
                    <h1 className="cp-hero-title">উল্লেখযোগ্য কাজ</h1>
                    <p className="cp-hero-subtitle">
                        কুমিল্লা-৭ (চান্দিনা) আসনে বাস্তবায়িত উন্নয়ন কার্যক্রম, সামাজিক অবদান ও জনসেবামূলক অর্জনসমূহ
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="cp-stats">
                {STATS.map((s, i) => (
                    <div key={i} className="cp-stat">
                        <div className="cp-stat-num">{s.number}</div>
                        <div className="cp-stat-label">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Filter */}
            <div className="cp-filter-bar">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        className={`cp-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="cp-grid-wrap">
                <div className="cp-grid">
                    {filtered.map((work) => (
                        <div key={work.id} className="cp-card">
                            <div className="cp-card-img-wrap">
                                <img src={work.image} alt={work.title} className="cp-card-img" />
                            </div>
                            <h3 className="cp-card-title">{work.title}</h3>
                            <Link to={`/commitment/${work.id}`} className="cp-card-btn">
                                বিস্তারিত দেখুন
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommitmentPage;
