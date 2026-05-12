
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteNav } from './components/SiteNav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Footer } from './components/ui/footer';
import CustomAuthDemo from './pages/login';

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
      </Routes>
    </Router>
  );
}

export default App;
