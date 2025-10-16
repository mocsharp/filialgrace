import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Privacy = () => {
  const { i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-8 ${isZh ? 'font-klee' : ''}`}>
            {isZh ? '隱私政策' : 'Privacy Policy'}
          </h1>
          <div className="w-24 h-1 bg-primary-600 mb-12" />

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              {isZh ? '最後更新: 2025年10月14日' : 'Last Updated: October 14, 2025'}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {isZh ? '1. 資訊收集' : '1. Information We Collect'}
              </h2>
              <p className="text-gray-700">
                {isZh
                  ? '我們收集您在使用本網站時提供的資訊，包括但不限於您的語言偏好設定和 Cookie 同意狀態。這些資訊儲存在您瀏覽器的本地儲存空間中。'
                  : 'We collect information you provide while using this website, including but not limited to your language preferences and cookie consent status. This information is stored in your browser\'s local storage.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {isZh ? '2. Cookies 和追蹤技術' : '2. Cookies and Tracking Technologies'}
              </h2>
              <p className="text-gray-700">
                {isZh
                  ? '我們使用 Google Analytics 來了解訪客如何使用我們的網站。這有助於我們改善網站的功能和內容。您可以選擇拒絕 Cookie，但這可能會影響您使用網站某些功能的能力。'
                  : 'We use Google Analytics to understand how visitors use our website. This helps us improve the functionality and content of the site. You may choose to decline cookies, but this may affect your ability to use certain features of the website.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {isZh ? '3. 資訊使用' : '3. How We Use Information'}
              </h2>
              <p className="text-gray-700">
                {isZh
                  ? '我們使用收集的資訊來：改善使用者體驗、記住您的偏好設定、分析網站流量和使用模式。'
                  : 'We use the collected information to: improve user experience, remember your preferences, and analyze website traffic and usage patterns.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {isZh ? '4. 資訊分享' : '4. Information Sharing'}
              </h2>
              <p className="text-gray-700">
                {isZh
                  ? '我們不會將您的個人資訊出售、交易或出租給他人。我們可能會與第三方服務提供商（如 Google Analytics）分享匯總的匿名資料，以協助我們分析網站使用情況。'
                  : 'We do not sell, trade, or rent your personal information to others. We may share aggregated anonymous data with third-party service providers (such as Google Analytics) to help us analyze website usage.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {isZh ? '5. 您的權利' : '5. Your Rights'}
              </h2>
              <p className="text-gray-700">
                {isZh
                  ? '您有權存取、更正或刪除我們持有的關於您的資訊。由於我們僅使用本地儲存，您可以隨時透過清除瀏覽器的本地儲存來刪除這些資訊。'
                  : 'You have the right to access, correct, or delete information we hold about you. Since we only use local storage, you can delete this information at any time by clearing your browser\'s local storage.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {isZh ? '6. 聯絡我們' : '6. Contact Us'}
              </h2>
              <p className="text-gray-700">
                {isZh
                  ? '如果您對本隱私政策有任何疑問，請透過以下方式聯絡我們：'
                  : 'If you have any questions about this Privacy Policy, please contact us at:'
                }
              </p>
              <p className="text-primary-600 mt-2">
                <a 
                  href={`mailto:${'info'}@${'filialgrace'}.org`}
                  className="hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `mailto:${'info'}@${'filialgrace'}.org`;
                  }}
                >
                  {'info'}&#64;{'filialgrace'}.org
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
