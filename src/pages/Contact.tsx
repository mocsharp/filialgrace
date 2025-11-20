import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Contact = () => {
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
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isZh ? 'font-klee' : ''}`}>
              {t('contact.title')}
            </h1>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-6" />
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-8">
                  {t('contact.findUs')}
                </h2>

                {/* Email */}
                <div className="mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-primary-600"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {t('contact.email')}
                      </h3>
                      <a
                        href={`mailto:${'info'}@${'filialgrace'}.org`}
                        className="text-primary-600 hover:text-primary-700 focus:outline-none focus:underline"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `mailto:${'info'}@${'filialgrace'}.org`;
                        }}
                      >
                        {'info'}&#64;{'filialgrace'}.org
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-primary-600"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {t('contact.location')}
                      </h3>
                      <p className="text-gray-600">
                        {t('contact.mapArea')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social/Additional Info */}
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    {t('contact.welcomeMessage')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full min-h-[500px]">
                <div className="relative w-full h-full">
                  {/* Placeholder for Google Maps */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <svg
                        className="w-16 h-16 text-primary-600 mx-auto mb-4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <p className="text-gray-700 font-medium mb-2">
                        {t('contact.mapLocation')}
                      </p>
                      <p className="text-sm text-gray-600">
                        Union Hill, Redmond, WA 98053
                      </p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Union+Hill+Redmond+WA+98053"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        {t('contact.openInGoogleMaps')}
                      </a>
                    </div>
                  </div>

                  {/* Actual Google Maps Embed - Replace with real embed code */}
                  <iframe
                    title="Temple Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86014.48698273155!2d-122.20471284999999!3d47.67364095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906c8d4e2a7f99%3A0x5c10f6c9f2e4b1e8!2sUnion%20Hill%2C%20Redmond%2C%20WA%2098053!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 max-w-3xl mx-auto bg-blue-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              {t('contact.interestedInLectures')}
            </h3>
            <p className="text-gray-700 mb-6">
              {t('contact.visitLectures')}
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

export default Contact;
