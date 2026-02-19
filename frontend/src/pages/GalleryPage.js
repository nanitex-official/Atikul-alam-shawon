import React, { useState } from 'react';
import './GalleryPage.css';

const GALLERY_IMAGES = [
    {
        id: 1,
        src: '/assets/images/img1.jpg',
        caption: 'চান্দিনায় নতুন সড়ক প্রকল্পের উদ্বোধন',
        category: 'উন্নয়ন',
    },
    {
        id: 2,
        src: '/assets/images/img2.jpg',
        caption: 'স্থানীয় জনগণের সাথে মতবিনিময় সভা',
        category: 'গণসংযোগ',
    },
    {
        id: 3,
        src: '/assets/images/img3.jpg',
        caption: 'বিনামূল্যে চিকিৎসা সেবা ক্যাম্প আয়োজন',
        category: 'স্বাস্থ্য',
    },
    {
        id: 4,
        src: '/assets/images/img4.jpg',
        caption: 'ডিজিটাল ল্যাব উদ্বোধন – চান্দিনা মাধ্যমিক বিদ্যালয়',
        category: 'শিক্ষা',
    },
    {
        id: 5,
        src: '/assets/images/img5.jpg',
        caption: 'মাদকবিরোধী সচেতনতামূলক র‌্যালি',
        category: 'প্রচারণা',
    },
    {
        id: 6,
        src: '/assets/images/img6.jpg',
        caption: 'নারী উদ্যোক্তা মেলায় পুরস্কার বিতরণ',
        category: 'উন্নয়ন',
    },
    {
        id: 7,
        src: '/assets/images/img7.jpg',
        caption: 'গোমতী নদীর বাঁধ পরিদর্শন কার্যক্রম',
        category: 'উন্নয়ন',
    },
    {
        id: 8,
        src: '/assets/images/img8.jpg',
        caption: 'যুব উদ্যোক্তা প্রশিক্ষণ কার্যক্রমের উদ্বোধন',
        category: 'যুব কার্যক্রম',
    },
];

const GalleryPage = () => {
    const [lightboxImg, setLightboxImg] = useState(null);

    const filtered = GALLERY_IMAGES;

    const openLightbox = (img) => setLightboxImg(img);
    const closeLightbox = () => setLightboxImg(null);

    const navigate = (dir) => {
        const idx = filtered.findIndex((i) => i.id === lightboxImg.id);
        const next = (idx + dir + filtered.length) % filtered.length;
        setLightboxImg(filtered[next]);
    };

    return (
        <div className="gallery-page">
            {/* Hero */}
            <div className="gallery-hero">
                <div className="gallery-hero-overlay" />
                <div className="gallery-hero-content">
                    <h1 className="gallery-hero-title">ফটো গ্যালারি</h1>
                    <p className="gallery-hero-subtitle">
                        কুমিল্লা-৭ (চান্দিনা) আসনের উন্নয়ন কার্যক্রম, গণসংযোগ ও বিভিন্ন কর্মসূচির স্মরণীয় মুহূর্তসমূহ
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="gallery-grid">
                {filtered.map((img) => (
                    <div
                        key={img.id}
                        className="gallery-card"
                        onClick={() => openLightbox(img)}
                    >
                        <div className="gallery-card-img-wrap">
                            <img src={img.src} alt={img.caption} className="gallery-card-img" />
                            <div className="gallery-card-overlay">
                                <span className="gallery-zoom-icon">🔍</span>
                            </div>
                        </div>
                        <div className="gallery-card-caption">
                            <span className="gallery-card-category">{img.category}</span>
                            <p className="gallery-card-text">{img.caption}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {lightboxImg && (
                <div className="gallery-lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>✕</button>
                    <button
                        className="lightbox-nav lightbox-prev"
                        onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                    >
                        ‹
                    </button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={lightboxImg.src} alt={lightboxImg.caption} className="lightbox-img" />
                        <div className="lightbox-caption">
                            <span className="lightbox-category">{lightboxImg.category}</span>
                            <p>{lightboxImg.caption}</p>
                        </div>
                    </div>
                    <button
                        className="lightbox-nav lightbox-next"
                        onClick={(e) => { e.stopPropagation(); navigate(1); }}
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
