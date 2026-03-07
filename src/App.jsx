import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import AiAgents from './pages/AiAgents';
import ContentMarketing from './pages/ContentMarketing';
import SocialMedia from './pages/SocialMedia';
import About from './pages/About';
import Careers from './pages/Careers';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-agents" element={<AiAgents />} />
          <Route path="/content-marketing" element={<ContentMarketing />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
