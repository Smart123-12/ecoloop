import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Marketplace } from './pages/Marketplace';
import { Recyclers } from './pages/Recyclers';
import { Dashboard } from './pages/Dashboard';
import { WasteListings } from './pages/WasteListings';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { Auth } from './pages/Auth';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'marketplace':
        return <Marketplace setCurrentPage={setCurrentPage} />;
      case 'recyclers':
        return <Recyclers setCurrentPage={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard setCurrentPage={setCurrentPage} />;
      case 'listings':
        return <WasteListings setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'pricing':
        return <Pricing setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      case 'auth':
        return <Auth setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-dark text-slate-800 flex flex-col justify-between selection:bg-teal-500/20 selection:text-teal-600">
      <div>
        {/* Navigation */}
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Global Page Content with Transition Effect Wrapper */}
        <main className="flex-grow">
          {renderPage()}
        </main>
      </div>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
