import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NEWS_ARTICLES } from '../data/newsData';
import './NewsDetail.css';

const NewsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const article = NEWS_ARTICLES.find((a) => a.id === parseInt(id));

    if (!article) {
        return (
            <div style={{ textAlign: 'center', padding: '80px 24px' }}>
                <h2>সংবাদ পাওয়া যায়নি</h2>
                <button className="news-detail-back-btn" onClick={() => navigate('/news')}>
                    ← সংবাদ পাতায় ফিরুন
                </button>
            </div>
        );
    }

    return (
        <div className="news-detail-page">
            {/* Hero */}
            <div className="news-detail-hero">
                <div className="news-detail-hero-pattern" />
                <span className="news-detail-category">{article.category}</span>
                <h1 className="news-detail-title">{article.title}</h1>
                <div className="news-detail-meta">
                    <span>📅 {article.date}</span>
                    <span>📰 {article.source}</span>
                </div>
            </div>

            {/* Content */}
            <div className="news-detail-content">
                <button className="news-detail-back-btn" onClick={() => navigate('/news')}>
                    ← সংবাদ পাতায় ফিরুন
                </button>

                {/* Article Body */}
                <div className="news-detail-body">
                    {article.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="news-detail-paragraph">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Share Section */}
                <div className="news-detail-share">
                    <h3>শেয়ার করুন</h3>
                    <div className="news-detail-share-buttons">
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                            target="_blank"
                            rel="noreferrer"
                            className="share-btn facebook"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            ফেসবুক
                        </a>
                        <a
                            href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${article.title}`}
                            target="_blank"
                            rel="noreferrer"
                            className="share-btn twitter"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                            টুইটার
                        </a>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                alert('লিংক কপি হয়েছে!');
                            }}
                            className="share-btn copy"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            কপি করুন
                        </button>
                    </div>
                </div>

                {/* Related News */}
                <div className="news-detail-related">
                    <h3>আরও সংবাদ</h3>
                    <div className="news-detail-related-grid">
                        {NEWS_ARTICLES.filter(a => a.id !== article.id && a.category === article.category)
                            .slice(0, 3)
                            .map((relatedArticle) => (
                                <div
                                    key={relatedArticle.id}
                                    className="news-detail-related-card"
                                    onClick={() => {
                                        navigate(`/news/${relatedArticle.id}`);
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    <h4>{relatedArticle.title}</h4>
                                    <span className="news-detail-related-date">{relatedArticle.date}</span>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
