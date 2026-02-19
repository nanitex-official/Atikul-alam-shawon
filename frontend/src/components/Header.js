import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsHidden(true);
        setIsMenuOpen(false); // Close menu when scrolling down
      } else {
        // Scrolling up
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
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const menuItems = [
    { title: 'হোম', path: '/' },
    { title: 'পরিচিতি', path: '/candidate-introduction' },
    { title: 'উল্লেখযোগ্য কাজ', path: '/commitment' },
    { title: 'গ্যালারি', path: '/gallery' },
    { title: 'সংবাদ ও আপডেট', path: '/news' },
    { title: 'যোগাযোগ', path: '/contact' }
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
                {item.submenu ? (
                  <>
                    <button
                      className="nav-link with-submenu"
                      onClick={() => toggleSubmenu(index)}
                    >
                      {item.title}
                      <span className="arrow">▼</span>
                    </button>
                    <ul className={`submenu ${openSubmenu === index ? 'active' : ''}`}>
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="submenu-item">
                          <Link to={subItem.path} className="submenu-link" onClick={closeMenu}>
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.path} className="nav-link" onClick={closeMenu}>
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

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
