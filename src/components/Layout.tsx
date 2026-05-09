import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

function LanguageBootstrap() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const stored = window.localStorage.getItem('i18nextLng');
    const detected = stored || (navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en');
    const target = detected.startsWith('zh') ? 'zh' : 'en';
    if (target !== i18n.language) {
      i18n.changeLanguage(target);
    }
    document.documentElement.lang = target === 'zh' ? 'zh-Hant' : 'en';
  }, [i18n]);

  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <LanguageBootstrap />
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
