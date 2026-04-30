import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const CALENDAR_ID = '7800neiemkjcda4fo6r1kit450@group.calendar.google.com';
const TZ = 'America/Los_Angeles';

const buildEmbedSrc = (lang: string) => {
  const params = new URLSearchParams({
    src: CALENDAR_ID,
    ctz: TZ,
    hl: lang.startsWith('zh') ? 'zh_TW' : 'en',
    showTitle: '0',
    showPrint: '0',
    showCalendars: '0',
    showTz: '0',
  });
  return `https://calendar.google.com/calendar/embed?${params.toString()}`;
};

const openInGoogleHref = `https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(CALENDAR_ID)}`;

const Calendar = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page Header */}
          <div className="text-center mb-10">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isZh ? 'font-klee' : ''}`}>
              {t('calendar.title')}
            </h1>
            <p className={`text-lg text-gray-600 ${isZh ? 'font-klee' : ''}`}>
              {t('calendar.subtitle')}
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-6" />
          </div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`max-w-3xl mx-auto text-center text-gray-700 mb-8 leading-relaxed ${isZh ? 'font-klee' : ''}`}
          >
            {t('calendar.intro')}
          </motion.p>

          {/* Calendar Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="relative w-full" style={{ aspectRatio: '4 / 3' }}>
                <iframe
                  key={i18n.language}
                  src={buildEmbedSrc(i18n.language)}
                  title={t('calendar.title')}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href={openInGoogleHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-medium transition-colors duration-300 shadow-lg shadow-amber-900/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {t('calendar.openInGoogle')}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Calendar;
