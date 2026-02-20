import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
        setIsMenuOpen(false);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { title: 'হোম', path: '/' },
    { title: 'পরিচিতি', path: '/candidate-introduction' },
    { title: 'উন্নয়নমূলক কাজ', path: '/commitment' },
    { title: 'গ্যালারি', path: '/gallery' },
    { title: 'সংবাদ ও আপডেট', path: '/news' },
    { title: 'যোগাযোগ', path: '/contact' },
  ];

  return (
    <header className={`header ${isHidden ? 'header-hidden' : ''}`}>
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo">
            <img src="/assets/images/logo.png" alt="আতিকুল আলম শাওন" />
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link to={item.path} className="nav-link" onClick={closeMenu}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <Link to="/contact-form" className="btn-header" onClick={closeMenu}>
            আপনার এমপিকে লিখুন
          </Link>
        </div>

        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
