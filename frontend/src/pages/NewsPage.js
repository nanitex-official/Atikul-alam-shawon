import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewsPage.css';
import { VIDEOS } from '../data/videosData';
import { NEWS_ARTICLES } from '../data/newsData';

/* ──────────────────────────────────────────
   DATA
────────────────────────────────────────── */
const CATEGORIES = ['সব', 'উন্নয়ন', 'স্বাস্থ্য', 'শিক্ষা', 'সংসদ', 'প্রচারণা'];

const SIDEBAR_UPDATES = [
    { text: 'চান্দিনায় নতুন বাজার কমপ্লেক্স উদ্বোধন ২৫ ফেব্রুয়ারি', date: '১৯ ফেব্রুয়ারি, ২০২৬' },
    { text: 'শিক্ষা বৃত্তি আবেদনের শেষ তারিখ ২৮ ফেব্রুয়ারি', date: '১৭ ফেব্রুয়ারি, ২০২৬' },
    { text: 'বিনামূল্যে চিকিৎসা ক্যাম্প – ২২ ফেব্রুয়ারি চান্দিনা হাই স্কুল মাঠ', date: '১৫ ফেব্রুয়ারি, ২০২৬' },
    { text: 'যুব উদ্যোক্তা প্রশিক্ষণ কার্যক্রম শুরু ১ মার্চ থেকে', date: '১৩ ফেব্রুয়ারি, ২০২৬' },
    { text: 'নারী উদ্যোক্তা মেলা – ৫ মার্চ চান্দিনা শহর মাঠ', date: '১১ ফেব্রুয়ারি, ২০২৬' },
];

/* ──────────────────────────────────────────
   COMPONENT
────────────────────────────────────────── */
const NewsPage = () => {
    const [activeCategory, setActiveCategory] = useState('সব');
    const navigate = useNavigate();

    const featured = NEWS_ARTICLES.find((a) => a.featured);
    const filtered = NEWS_ARTICLES.filter(
        (a) => !a.featured && (activeCategory === 'সব' || a.category === activeCategory)
    );

    return (
        <div className="news-page">
            {/* ── Hero ── */}
            <div className="news-hero">
                <h1 className="news-hero-title">সংবাদ ও আপডেট</h1>
                <p className="news-hero-subtitle">
                    কুমিল্লা-৭ (চান্দিনা) আসনের সর্বশেষ উন্নয়ন কার্যক্রম, সংসদীয় কার্যক্রম এবং গুরুত্বপূর্ণ সংবাদ
                </p>
            </div>

            {/* ── Filter Bar ── */}
            <div className="news-filter-bar">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* ── Main ── */}
            <div className="news-main">
                <div className="news-layout">
                    {/* Left: articles + videos */}
                    <div className="news-content-col">
                        {/* Featured */}
                        {featured && (activeCategory === 'সব' || activeCategory === featured.category) && (
                            <div 
                                className="news-featured-card"
                                onClick={() => navigate(`/news/${featured.id}`)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="news-featured-content">
                                    <span className="featured-badge">⭐ প্রধান সংবাদ</span>
                                    <h2>{featured.title}</h2>
                                    <div className="news-meta">
                                        <span>📅 {featured.date}</span>
                                        <span>📰 {featured.source}</span>
                                        <span className="news-category-badge">
                                            {featured.category}
                                        </span>
                                    </div>
                                    <p className="news-excerpt">{featured.excerpt}</p>
                                    <span className="news-read-more">বিস্তারিত পড়ুন →</span>
                                </div>
                            </div>
                        )}

                        {/* Regular cards */}
                        <div className="news-grid">
                            {filtered.map((article) => (
                                <div 
                                    key={article.id} 
                                    className="news-card"
                                    onClick={() => navigate(`/news/${article.id}`)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="news-card-img">{article.icon}</div>
                                    <div className="news-card-title">{article.title}</div>
                                    <span className="news-card-btn">বিস্তারিত দেখুন</span>
                                </div>
                            ))}
                        </div>

                        {/* Videos */}
                        <div className="news-videos-section">
                            <h3 className="news-videos-title">ভিডিও সংবাদ</h3>
                            <div className="news-videos-grid">
                                {VIDEOS.map((v) => (
                                    <div key={v.id} className="news-video-card">
                                        <div className="news-video-wrapper">
                                            <iframe
                                                src={v.src}
                                                title={v.caption}
                                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                                allowFullScreen
                                                scrolling="no"
                                            />
                                        </div>
                                        <div className="news-video-caption">{v.caption}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="news-sidebar">
                        {/* Latest updates */}
                        <div className="sidebar-widget">
                            <h4 className="sidebar-widget-title">📢 সর্বশেষ আপডেট</h4>
                            <ul className="sidebar-updates-list">
                                {SIDEBAR_UPDATES.map((u, i) => (
                                    <li key={i} className="sidebar-update-item">
                                        <div className="sidebar-update-text">{u.text}</div>
                                        <div className="sidebar-update-date">{u.date}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social */}
                        <div className="sidebar-widget">
                            <h4 className="sidebar-widget-title">🔗 সোশ্যাল মিডিয়া</h4>
                            <div className="social-links-row">
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-share-btn facebook"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    ফেসবুক
                                </a>
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-share-btn youtube"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                    ইউটিউব
                                </a>
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="sidebar-widget contact-cta">
                            <h4 className="sidebar-widget-title">
                                📬 যোগাযোগ করুন
                            </h4>
                            <p>
                                আপনার এলাকার সমস্যার কথা আমাদের জানান। আমরা সমাধানে সচেষ্ট থাকব।
                            </p>
                            <a href="/contact-form" className="btn-contact">
                                এখনই লিখুন →
                            </a>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
