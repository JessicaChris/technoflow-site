import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 🛑 make sure you import these!
import Header from './components/Header';
import BannerSlider from './components/BannerSlider';
import Intro from './components/Intro';
import ScrollSections from './components/ScrollSections';
import ProjectsSection from './components/ProjectsSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import OurTeam from './components/OurTeam';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BannerSlider />
              <Intro />
              <ScrollSections />
              <ProjectsSection />
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route path="/about/our-team" element={<OurTeam />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
