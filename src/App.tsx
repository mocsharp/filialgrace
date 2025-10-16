import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import Lectures from './pages/Lectures';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Legal from './pages/Legal';
import './i18n';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// SEO Component
function SEO({ title, description }: { title?: string; description?: string }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | 孝恩佛堂 Temple of Filial Grace`;
    } else {
      document.title = '孝恩佛堂 Temple of Filial Grace';
    }

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="skip-link focus:translate-y-0"
        >
          Skip to main content
        </a>

        <Header />
        
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SEO
                    title="Home"
                    description="Temple of Filial Grace (孝恩佛堂) - A spiritual center in Seattle promoting harmony through the teachings of Buddhism, Christianity, Islam, Taoism, and Confucianism."
                  />
                  <Home />
                </>
              }
            />
            <Route
              path="/lectures"
              element={
                <>
                  <SEO
                    title="Lectures"
                    description="Join our study groups and children's scripture classes. Monthly in-person sessions and irregular children's classes available."
                  />
                  <Lectures />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <SEO
                    title="About Us"
                    description="Learn about the Temple of Filial Grace and the teachings of I-Kuan Tao (一貫道), promoting universal harmony through the five great religions."
                  />
                  <About />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <SEO
                    title="Contact Us"
                    description="Contact Temple of Filial Grace in Union Hill, Redmond, WA 98053. Get in touch with us for more information."
                  />
                  <Contact />
                </>
              }
            />
            <Route
              path="/privacy"
              element={
                <>
                  <SEO title="Privacy Policy" description="Privacy policy for filialgrace.org" />
                  <Privacy />
                </>
              }
            />
            <Route
              path="/legal"
              element={
                <>
                  <SEO title="Legal Information" description="Legal information and terms of use for filialgrace.org" />
                  <Legal />
                </>
              }
            />
          </Routes>
        </main>

        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
