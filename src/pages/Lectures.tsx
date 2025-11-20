import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { config } from '../config';

const Lectures = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isZh ? 'font-klee' : ''}`}>
              {t('lectures.title')}
            </h1>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-6" />
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {t('lectures.subtitle')}
            </h2>
          </motion.div>

          {/* Lectures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Study Group */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="p-6 text-white" style={{ backgroundColor: '#7c3aed' }}>
                <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${isZh ? 'font-klee' : ''}`}>
                  {t('lectures.studyGroup.title')}
                </h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <p className="text-gray-600 text-sm font-medium mb-1">
                    {t('lectures.studyGroup.topic')}:
                  </p>
                  <p className={`text-lg font-semibold text-gray-800 ${isZh ? 'font-klee' : ''}`}>
                    {t('lectures.studyGroup.currentTopic')}
                  </p>
                </div>
                <div className="flex items-start mb-6">
                  <svg
                    className="w-6 h-6 text-primary-600 mt-1 mr-3 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">
                      {t('lectures.studyGroup.schedule')}
                    </p>
                  </div>
                </div>
                <a
                  href={config.studyGroupRegistrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center inline-block px-6 py-3 text-white font-medium rounded-lg transition-colors"
                  style={{ backgroundColor: '#7c3aed' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6d28d9'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7c3aed'}
                  aria-label={t('lectures.studyGroup.registerLink')}
                >
                  {t('lectures.studyGroup.registerLink')}
                </a>
              </div>
            </motion.div>

            {/* Children's Class */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-pink-500 p-6 text-white">
                <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${isZh ? 'font-klee' : ''}`}>
                  {t('lectures.childrenClass.title')}
                </h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <p className="text-gray-600 text-sm font-medium mb-1">
                    {t('lectures.childrenClass.topic')}:
                  </p>
                  <p className={`text-lg font-semibold text-gray-800 ${isZh ? 'font-klee' : ''}`}>
                    {t('lectures.childrenClass.currentTopic')}
                  </p>
                </div>
                <div className="flex items-start mb-6">
                  <svg
                    className="w-6 h-6 text-pink-500 mt-1 mr-3 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">
                      {t('lectures.childrenClass.schedule')}
                    </p>
                  </div>
                </div>
                <a
                  href="#register-children-class"
                  className="w-full text-center inline-block px-6 py-3 text-white font-medium rounded-lg transition-colors"
                  style={{ backgroundColor: '#ec4899' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#db2777'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ec4899'}
                  aria-label={t('lectures.childrenClass.registerLink')}
                >
                  {t('lectures.childrenClass.registerLink')}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 max-w-3xl mx-auto bg-blue-50 rounded-xl p-8 text-center"
          >
            <svg
              className="w-12 h-12 text-primary-600 mx-auto mb-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-700 text-lg">
              {isZh
                ? '有關課程的更多資訊，請透過聯絡頁面與我們聯繫。'
                : 'For more information about our classes, please contact us through the Contact page.'
              }
            </p>
            <a
              href="/contact"
              className="inline-block mt-6 text-primary-600 font-medium hover:text-primary-700 focus:outline-none focus:underline"
            >
              {t('nav.contact')} →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Lectures;
