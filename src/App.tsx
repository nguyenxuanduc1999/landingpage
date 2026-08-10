
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteNav } from './components/SiteNav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Footer } from './components/ui/footer';
import CustomAuthDemo from './pages/login';
import TermsPage from './pages/terms';
import PrivacyPage from './pages/privacy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="bg-black min-h-screen text-white overflow-x-clip">
            <SiteNav />
            <Hero />
            <About />
            <Features />
            <Footer />
          </div>
        } />
        <Route path="/login" element={<CustomAuthDemo />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
