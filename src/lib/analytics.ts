const GA_ID = 'G-09YJTS1SSN';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

let loaded = false;

export function loadAnalytics(): void {
  if (loaded || typeof window === 'undefined') return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => window.dataLayer.push(args);
  gtag('js', new Date());
  gtag('config', GA_ID);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem('cookieConsent') === 'accepted';
}
