import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CandidateIntroduction from './pages/CandidateIntroduction';
import Contact from './pages/Contact';
import ContactForm from './pages/ContactForm';
import NewsPage from './pages/NewsPage';
import NewsDetail from './pages/NewsDetail';
import GalleryPage from './pages/GalleryPage';
import CommitmentPage from './pages/CommitmentPage';
import CommitmentDetail from './pages/CommitmentDetail';

function App() {
  return (
    <>
      <Preloader />
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/candidate-introduction" element={<CandidateIntroduction />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-form" element={<ContactForm />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/commitment" element={<CommitmentPage />} />
            <Route path="/commitment/:id" element={<CommitmentDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
