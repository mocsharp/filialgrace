import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
const Lectures = lazy(() => import('./pages/Lectures'));
const Calendar = lazy(() => import('./pages/Calendar'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Legal = lazy(() => import('./pages/Legal'));
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
          <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SEO
                    title="Home"
                    description="Temple of Filial Grace (孝恩佛堂) is a spiritual community in Redmond, WA fostering harmony through Buddhism, Christianity, Islam, Taoism, and Confucianism. Join our monthly study group and children's scripture classes."
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
                    description="Free monthly Heart Sutra study group and children's scripture classes (Di Zi Gui, art & craft) at Temple of Filial Grace in Redmond, WA. All are welcome — register to join."
                  />
                  <Lectures />
                </>
              }
            />
            <Route
              path="/calendar"
              element={
                <>
                  <SEO
                    title="Calendar"
                    description="Upcoming services, study groups, and community events at Temple of Filial Grace in Redmond, WA. View our public calendar and add events to your own."
                  />
                  <Calendar />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <SEO
                    title="About Us"
                    description="Temple of Filial Grace is a spiritual community in Redmond, WA promoting Buddhist, Taoist, and Confucian teachings. Learn our mission, the Purpose of Tao, and how the five great religions unite in our practice."
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
                    description="Get in touch with Temple of Filial Grace — located in the Union Hill area of Redmond, WA 98053 (Seattle metro). Email us about lectures, study groups, or visiting the temple."
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
          </Suspense>
        </main>

        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
