import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  const religions = [
    { name: '佛教', nameEn: 'Buddhism', figure: '釋迦牟尼佛', figureEn: 'Buddha Shakyamuni' },
    { name: '基督教', nameEn: 'Christianity', figure: '耶穌基督', figureEn: 'Jesus Christ' },
    { name: '回教', nameEn: 'Islam', figure: '穆罕默德', figureEn: 'Prophet Muhammad' },
    { name: '道教', nameEn: 'Taoism', figure: '老子', figureEn: 'Laozi' },
    { name: '儒教', nameEn: 'Confucianism', figure: '孔子', figureEn: 'Confucius' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isZh ? 'font-klee' : ''}`}>
              {t('about.title')}
            </h1>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-6" />
          </div>

          {/* Temple Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className={`text-3xl font-bold mb-6 text-center ${isZh ? 'font-klee' : ''}`}>
                {t('home.title')}
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed ${isZh ? 'font-klee' : ''}`}>
                {t('about.templeDescription')}
              </p>
            </div>
          </motion.div>

          {/* Purpose Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className={`text-3xl font-bold mb-6 text-center ${isZh ? 'font-klee' : ''}`}>
                {t('about.purposeTitle')}
              </h2>
              <div className={`text-lg text-gray-700 leading-relaxed ${isZh ? 'font-klee text-center' : 'text-left'} space-y-3`}>
                {t('about.purposeItems', { returnObjects: true }) && (
                  (t('about.purposeItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <p key={index} className="leading-relaxed">
                      {item}
                    </p>
                  ))
                )}
              </div>
            </div>
          </motion.div>

          {/* Five Great Religions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t('about.fiveReligionsTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {religions.map((religion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-primary-500"
                >
                  <h3 className={`text-2xl font-bold mb-2 ${isZh ? 'font-klee' : ''}`}>
                    {religion.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{religion.nameEn}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className={`text-lg font-medium ${isZh ? 'font-klee' : ''}`}>
                      {religion.figure}
                    </p>
                    <p className="text-sm text-gray-600">{religion.figureEn}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-700 mb-6">
              {t('about.callToAction')}
            </p>
            <a
              href="/lectures"
              className="btn-primary inline-block"
              aria-label={t('nav.lectures')}
            >
              {t('nav.lectures')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
