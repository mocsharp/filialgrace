import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Temple Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-klee">
              {t('home.title')}
            </h3>
            <p className="text-sm mb-2">{t('home.title')}</p>
            <p className="text-sm text-gray-400 mt-4">
              {t('contact.mapArea')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t('nav.links')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-primary-400 transition-colors focus:outline-none focus:underline"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/lectures"
                  className="text-sm hover:text-primary-400 transition-colors focus:outline-none focus:underline"
                >
                  {t('nav.lectures')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-primary-400 transition-colors focus:outline-none focus:underline"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-primary-400 transition-colors focus:outline-none focus:underline"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t('contact.title')}
            </h3>
            <p className="text-sm mb-2">
              <span className="font-medium">{t('contact.email')}:</span>
              <br />
              <a
                href={`mailto:${'info'}@${'filialgrace'}.org`}
                className="hover:text-primary-400 transition-colors focus:outline-none focus:underline"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `mailto:${'info'}@${'filialgrace'}.org`;
                }}
              >
                {'info'}&#64;{'filialgrace'}.org
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {t('footer.copyright').replace('2025', currentYear.toString())}
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-400 hover:text-primary-400 transition-colors focus:outline-none focus:underline"
              >
                {t('footer.privacyPolicy')}
              </Link>
              <Link
                to="/legal"
                className="text-sm text-gray-400 hover:text-primary-400 transition-colors focus:outline-none focus:underline"
              >
                {t('footer.legalInfo')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
