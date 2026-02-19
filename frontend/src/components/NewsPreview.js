import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS_ARTICLES } from '../data/newsData';
import './NewsPreview.css';

const NewsPreview = () => {
    const preview = NEWS_ARTICLES.slice(0, 3);

    return (
        <section className="news-preview-section">
            <div className="news-preview-container">
                <div className="news-preview-header">
                    <h2 className="news-preview-title">সংবাদ ও আপডেট</h2>
                    <p className="news-preview-subtitle">কুমিল্লা-৭ (চান্দিনা) আসনের সর্বশেষ উন্নয়ন কার্যক্রম ও সংবাদ</p>
                </div>

                <div className="news-preview-grid">
                    {preview.map((article) => (
                        <div key={article.id} className="news-preview-card">
                            <div className="news-preview-icon-wrap">
                                <span className="news-preview-icon">{article.icon}</span>
                            </div>
                            <h3 className="news-preview-card-title">{article.title}</h3>
                            <Link to="/news" className="news-preview-card-btn">
                                বিস্তারিত দেখুন
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="news-preview-footer">
                    <Link to="/news" className="news-preview-btn">
                        সব সংবাদ দেখুন →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsPreview;
