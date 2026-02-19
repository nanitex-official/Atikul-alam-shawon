import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(1000 - elapsedTime, 0);
      
      setTimeout(() => {
        setIsVisible(false);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`preloader ${!isVisible ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <img src="/assets/images/logo.png" alt="Loading..." className="preloader-logo" />
        <div className="preloader-spinner"></div>
      </div>
    </div>
  );
};

export default Preloader;
