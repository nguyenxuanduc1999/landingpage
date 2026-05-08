
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Footer } from './components/ui/footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Hero />
      <About />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
