import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Legal = () => {
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
            {isZh ? '法律資訊' : 'Legal Information'}
          </h1>
          <div className="w-24 h-1 bg-primary-600 mb-12" />

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {isZh ? '版權聲明' : 'Copyright Notice'}
              </h2>
              <p className="text-gray-700">
                {isZh
                  ? '© 2025 孝恩佛堂。保留所有權利。本網站的所有內容，包括但不限於文字、圖形、圖像、音訊和視訊，均受版權法保護。未經明確書面許可，不得複製、分發或傳輸本網站的任何內容。'
                  : '© 2025 Temple of Filial Grace. All rights reserved. All content on this website, including but not limited to text, graphics, images, audio, and video, is protected by copyright law. No part of this website may be reproduced, distributed, or transmitted without explicit written permission.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {isZh ? '使用條款' : 'Terms of Use'}
              </h2>
              <p className="text-gray-700 mb-4">
                {isZh
                  ? '使用本網站即表示您同意遵守以下條款和條件：'
                  : 'By using this website, you agree to comply with the following terms and conditions:'
                }
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  {isZh
                    ? '您將合法且負責任地使用本網站'
                    : 'You will use this website lawfully and responsibly'
                  }
                </li>
                <li>
                  {isZh
                    ? '您不會嘗試未經授權存取本網站的任何部分'
                    : 'You will not attempt unauthorized access to any part of the website'
                  }
                </li>
                <li>
                  {isZh
                    ? '您不會使用本網站從事任何非法活動'
                    : 'You will not use the website for any illegal activities'
                  }
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {isZh ? '免責聲明' : 'Disclaimer'}
              </h2>
              <p className="text-gray-700">
                {isZh
                  ? '本網站提供的資訊僅供一般參考之用。雖然我們努力保持資訊的最新和準確，但我們不對資訊的完整性、準確性或可靠性作出任何聲明或保證。對本網站資訊的任何依賴均由您自行承擔風險。'
                  : 'The information provided on this website is for general informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information. Any reliance you place on information from this website is strictly at your own risk.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {isZh ? '外部連結' : 'External Links'}
              </h2>
              <p className="text-gray-700">
                {isZh
                  ? '本網站可能包含第三方網站的連結。這些連結僅為您提供方便。我們不對這些外部網站的內容負責，也不認可或保證其內容。'
                  : 'This website may contain links to third-party websites. These links are provided for your convenience only. We are not responsible for the content of external websites and do not endorse or guarantee their content.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {isZh ? '適用法律' : 'Governing Law'}
              </h2>
              <p className="text-gray-700">
                {isZh
                  ? '本法律聲明受美國華盛頓州法律管轄。因本網站使用而產生的任何爭議應提交華盛頓州法院管轄。'
                  : 'This legal notice is governed by the laws of the State of Washington, United States. Any disputes arising from the use of this website shall be subject to the jurisdiction of the courts of Washington State.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {isZh ? '聯絡資訊' : 'Contact Information'}
              </h2>
              <p className="text-gray-700">
                {isZh
                  ? '如果您對本法律聲明有任何疑問，請聯絡：'
                  : 'If you have any questions about this legal notice, please contact:'
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

export default Legal;
