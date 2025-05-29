import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Match from './pages/Match';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import IntroLoader from './components/intro/IntroLoader';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3300); // Match this with IntroLoader animation duration + delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && <IntroLoader />}
      </AnimatePresence>
      {!showIntro && (
        <Layout>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/match" element={<Match />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      )}
    </>
  );
}
