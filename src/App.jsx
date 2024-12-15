import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ResourcesPage from './pages/ResourcesPage';
import AccomplishmentsPage from './pages/AccomplishmentsPage';
import TimelinePage from './pages/TimelinePage';
import AwardsPage from './pages/AwardsPage';
import CertificationsPage from './pages/CertificationsPage';
import DegreesPage from './pages/DegreesPage';
import NewsPage from './pages/NewsPage';
import BlogPost from './pages/BlogPost';

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogpost/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/accomplishments" element={<AccomplishmentsPage />} />
        <Route path="/accomplishments/timeline" element={<TimelinePage />} />
        <Route path="/accomplishments/awards" element={<AwardsPage />} />
        <Route path="/accomplishments/certifications" element={<CertificationsPage />} />
        <Route path="/accomplishments/degrees" element={<DegreesPage />} />
        <Route path="/accomplishments/news" element={<NewsPage />} />
      </Routes>
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default App;
