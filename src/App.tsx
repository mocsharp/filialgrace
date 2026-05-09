import { useEffect } from 'react';
import type { RouteRecord } from 'vite-react-ssg';

import Layout from './components/Layout';
import Home from './pages/Home';
import './i18n';

function SEO({ title, description }: { title?: string; description?: string }) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = title
      ? `${title} | 孝恩佛堂 Temple of Filial Grace`
      : '孝恩佛堂 Temple of Filial Grace';

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
}

const HOME_DESCRIPTION =
  "Temple of Filial Grace (孝恩佛堂) is a spiritual community in Redmond, WA fostering harmony through Buddhism, Christianity, Islam, Taoism, and Confucianism. Join our monthly study group and children's scripture classes.";

const LECTURES_DESCRIPTION =
  "Free monthly Heart Sutra study group and children's scripture classes (Di Zi Gui, art & craft) at Temple of Filial Grace in Redmond, WA. All are welcome — register to join.";

const CALENDAR_DESCRIPTION =
  'Upcoming services, study groups, and community events at Temple of Filial Grace in Redmond, WA. View our public calendar and add events to your own.';

const ABOUT_DESCRIPTION =
  'Temple of Filial Grace is a spiritual community in Redmond, WA promoting Buddhist, Taoist, and Confucian teachings. Learn our mission, the Purpose of Tao, and how the five great religions unite in our practice.';

const CONTACT_DESCRIPTION =
  'Get in touch with Temple of Filial Grace — located in the Union Hill area of Redmond, WA 98053 (Seattle metro). Email us about lectures, study groups, or visiting the temple.';

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        element: (
          <>
            <SEO title="Home" description={HOME_DESCRIPTION} />
            <Home />
          </>
        ),
        entry: 'src/pages/Home.tsx',
      },
      {
        path: 'lectures',
        lazy: async () => {
          const { default: Lectures } = await import('./pages/Lectures');
          return {
            element: (
              <>
                <SEO title="Lectures" description={LECTURES_DESCRIPTION} />
                <Lectures />
              </>
            ),
          };
        },
      },
      {
        path: 'calendar',
        lazy: async () => {
          const { default: Calendar } = await import('./pages/Calendar');
          return {
            element: (
              <>
                <SEO title="Calendar" description={CALENDAR_DESCRIPTION} />
                <Calendar />
              </>
            ),
          };
        },
      },
      {
        path: 'about',
        lazy: async () => {
          const { default: About } = await import('./pages/About');
          return {
            element: (
              <>
                <SEO title="About Us" description={ABOUT_DESCRIPTION} />
                <About />
              </>
            ),
          };
        },
      },
      {
        path: 'contact',
        lazy: async () => {
          const { default: Contact } = await import('./pages/Contact');
          return {
            element: (
              <>
                <SEO title="Contact Us" description={CONTACT_DESCRIPTION} />
                <Contact />
              </>
            ),
          };
        },
      },
      {
        path: 'privacy',
        lazy: async () => {
          const { default: Privacy } = await import('./pages/Privacy');
          return {
            element: (
              <>
                <SEO title="Privacy Policy" description="Privacy policy for filialgrace.org" />
                <Privacy />
              </>
            ),
          };
        },
      },
      {
        path: 'legal',
        lazy: async () => {
          const { default: Legal } = await import('./pages/Legal');
          return {
            element: (
              <>
                <SEO
                  title="Legal Information"
                  description="Legal information and terms of use for filialgrace.org"
                />
                <Legal />
              </>
            ),
          };
        },
      },
    ],
  },
];
