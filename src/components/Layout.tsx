import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <a href="#main-content" className="skip-link focus:translate-y-0">
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-grow">
          <Outlet />
        </main>

        <Footer />
        <CookieConsent />
      </div>
    </>
  );
}
