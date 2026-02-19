import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Commitments from '../components/Commitments';
import NewsPreview from '../components/NewsPreview';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Commitments limit={3} showViewAll={true} />
      <NewsPreview />
      <CallToAction />
    </div>
  );
};

export default HomePage;
