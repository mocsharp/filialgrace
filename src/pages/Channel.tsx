import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// YouTube 天道知音. Per-show URLs default to the channel page until specific playlist
// URLs are added below — replace the `url` on each show entry with its playlist link.
const CHANNEL_URL = 'https://www.youtube.com/channel/UCeUJfjHIdsvQIQ96AnGwoIg';

type Show = {
  key: 'awakening' | 'compassionate' | 'lightLamp' | 'holySong' | 'shorts';
  url: string;
  usesElevenLabs?: boolean;
  elevenLabsVoices?: string;
};

const SHOWS: Show[] = [
  { key: 'awakening', url: CHANNEL_URL, usesElevenLabs: true, elevenLabsVoices: 'Amy & Leo' },
  { key: 'compassionate', url: CHANNEL_URL, usesElevenLabs: true, elevenLabsVoices: 'Amy & Leo' },
  { key: 'lightLamp', url: CHANNEL_URL },
  { key: 'holySong', url: CHANNEL_URL },
  { key: 'shorts', url: CHANNEL_URL, usesElevenLabs: true },
];

const ELEVENLABS_URL = 'https://elevenlabs.io';

const Channel = () => {
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
            <img
              src="/images/heavenly-way-logo.png"
              alt={`${t('channel.title')} — ${t('channel.subtitle')}`}
              width={224}
              height={224}
              className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-6 rounded-2xl shadow-lg object-cover"
            />
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isZh ? 'font-klee' : ''}`}>
              {t('channel.title')}
            </h1>
            <p className={`text-lg text-gray-600 ${isZh ? 'font-klee' : ''}`}>
              {t('channel.subtitle')}
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
            {t('channel.intro')}
          </motion.p>

          {/* Visit Channel CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-16"
          >
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-full font-medium transition-colors duration-300 shadow-lg shadow-red-900/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
              </svg>
              {t('channel.visitChannel')}
            </a>
          </motion.div>

          {/* Shows Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="max-w-5xl mx-auto"
          >
            <h2
              className={`text-2xl md:text-3xl font-bold text-center mb-8 ${isZh ? 'font-klee' : ''}`}
            >
              {t('channel.showsTitle')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SHOWS.map((show) => (
                <a
                  key={show.key}
                  href={show.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <h3
                    className={`text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1 ${isZh ? 'font-klee' : ''}`}
                  >
                    {t(`channel.shows.${show.key}.name`)}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {t(`channel.shows.${show.key}.englishName`)}
                  </p>
                  <p className={`text-gray-700 leading-relaxed ${isZh ? 'font-klee' : ''}`}>
                    {t(`channel.shows.${show.key}.description`)}
                  </p>
                  {show.usesElevenLabs && (
                    <span
                      className={`inline-flex items-center gap-1.5 mt-4 px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium ${isZh ? 'font-klee' : ''}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3 10v4M7 6v12M11 3v18M15 7v10M19 10v4" />
                      </svg>
                      <span>
                        {t('channel.elevenLabsBadge')}
                        {show.elevenLabsVoices && (
                          <span className="text-gray-500"> · {show.elevenLabsVoices}</span>
                        )}
                      </span>
                    </span>
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ElevenLabs Credit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl mx-auto mt-20"
          >
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-10 md:p-12 text-center">
              <p
                className={`text-sm uppercase tracking-wider text-gray-500 mb-10 md:mb-12 ${isZh ? 'font-klee' : ''}`}
              >
                {t('channel.poweredBy.label')}
              </p>
              <a
                href={ELEVENLABS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                aria-label="ElevenLabs"
              >
                <img
                  src="/images/elevenlabs-logo.svg"
                  alt="ElevenLabs"
                  className="h-10 md:h-12 mx-auto"
                  loading="lazy"
                />
              </a>
              <p
                className={`mt-10 md:mt-12 text-gray-700 leading-relaxed ${isZh ? 'font-klee' : ''}`}
              >
                {t('channel.poweredBy.description')}{' '}
                <a
                  href={ELEVENLABS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                >
                  elevenlabs.io
                </a>
                .
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Channel;
