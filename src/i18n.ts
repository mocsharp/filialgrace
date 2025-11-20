import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation 
      nav: {
        links: 'Site Index',
        home: 'Home',
        lectures: 'Lectures',
        about: 'About',
        contact: 'Contact',
        title: '孝恩佛堂 Temple of Filial Grace',
      },
      // Home Page
      home: {
        title: 'Temple of Filial Grace',

        subtitle: 'A Place of Spiritual Harmony',
        divineText: 'Ming Ming Shang Di Wu Liang Qing Xu Zhi Zun Zhi Sheng San Jie Shi Fang Wan Ling Zhen Zai',
        wisdomText: 'Tao is Transmitted by Saints, Cultivation Depends on Oneself; Virtue Comes from Actions, Destiny from Heaven',
        fiveReligionsText: 'Unity of Five Religions: Confucianism, Buddhism, Taoism, Christianity, Islam'
      },
      // Lectures Page
      lectures: {
        title: 'Lectures',
        subtitle: 'Class Offerings',
        studyGroup: {
          title: 'Study Group',
          topic: 'Topic',
          currentTopic: 'Heart Sutra',
          schedule: 'Monthly on Sundays, 10:00 AM - 11:30 AM',
          registerLink: 'Register for Study Group'
        },
        childrenClass: {
          title: "Children's Scripture Class",
          topic: 'Activities',
          currentTopic: 'Good Pupil and Child, Art & Craft...',
          schedule: 'TBD',
          registerLink: "Register for Children's Class"
        }
      },
      // About Page
      about: {
        title: 'About Us',
        templeDescription: 'The Temple of Filial Grace (孝恩佛堂) is dedicated to promoting the teachings of Buddhism, Taoism, and the Confucian ideals of Confucius and Mencius. It aspires to help more people understand the divine wisdom of enlightened beings and to apply these teachings in everyday life to cultivate one\'s moral and spiritual refinement. Through spiritual practice and self-reflection, individuals can attain harmony and balance of body, mind, and spirit, inspiring those around them and fostering social harmony. May this path of cultivation bring peace and stability to our troubled world, and may the ideal of the “Great Unity” envisioned by Confucius soon be realized.',
        purposeTitle: 'The Purpose of Tao',
        fiveReligionsTitle: 'Five Great Religions',
        callToAction: 'Join our lectures to learn more about the wisdom of the Heavenly Way.',
        purposeItems: [
          'To venerate the Heavens and the Earth.',
          'To worship God and revere all Saints of Heavens.',
          'To be patriotic, loyal, and responsible.',
          'To be of virtuous character and uphold the Rules of Propriety.',
          'To carry out the filial duties to one\'s parents.',
          'To honor and respect one\'s teachers and elders.',
          'To be faithful to friends.',
          'To live harmoniously with neighbors.',
          'To rid oneself of misdeed, and to pursue kindness.',
          'To expound upon the Five Bonds of Human Relationships and the Eight Cardinal Virtues.',
          'To preach the main principles of the five major religions.',
          'To obey and respectfully practice the Four Ethical Principles, the Three Cardinals, and the Five Constant Virtues.',
          'To cleanse the mind, purify the soul and eliminate unclean thoughts.',
          'To cultivate one\'s true-self by utilizing one\'s temporary-self.',
          'To restore one\'s original Buddha-nature.',
          'To continually inspire one\'s conscience and intuitive abilities until perfection is achieved.',
          'To establish and reach one\'s own goals, then to help others do so.',
          'To transform the world into a peaceful, and orderly society.',
          'To enlighten the minds of people and enable them to return to a state of benevolence.',
          'To aspire and bring harmony to the world by pursuing this PATH.'
        ]
      },
      // Contact Page
      contact: {
        title: 'Contact Us',
        email: 'Email',
        location: 'Location',
        findUs: 'Find Us',
        mapArea: 'Union Hill area, Redmond, WA 98053',
        mapLocation: 'Map Location',
        openInGoogleMaps: 'Open in Google Maps',
        interestedInLectures: 'Interested in Joining Our Lectures?',
        welcomeMessage: 'We welcome all who are interested in learning about the Heavenly Way. Please feel free to contact us for more information.',
        visitLectures: 'Visit our Lectures page to learn about our current offerings.'
      },
      // Footer
      footer: {
        copyright: '© 2025 Temple of Filial Grace. All rights reserved.',
        privacyPolicy: 'Privacy Policy',
        legalInfo: 'Legal Information'
      },
      // Cookie Consent
      cookies: {
        message: 'We use cookies to enhance your experience and for analytics. By continuing to use this site, you consent to our use of cookies.',
        accept: 'Accept',
        decline: 'Decline',
        learnMore: 'Learn More'
      }
    }
  },
  zh: {
    translation: {
      // Navigation
      nav: {
        links: '網站索引',
        home: '首頁',
        lectures: '課程',
        about: '關於我們',
        contact: '聯絡我們',
        title: '孝恩佛堂 Temple of Filial Grace',
      },
      // Home Page
      home: {
        title: '孝恩佛堂',

        subtitle: '心靈和諧之所',
        divineText: '明明上帝 無量清虛 至尊至聖 三界十方 萬靈真宰',
        wisdomText: '道在聖傳修在己 德由人蹟命由天',
        fiveReligionsText: '五教合一：儒 釋 道 耶 回'
      },
      // Lectures Page
      lectures: {
        title: '課程',
        subtitle: '目前課程',
        studyGroup: {
          title: '讀書會',
          topic: '主題',
          currentTopic: '般若波羅蜜多心經',
          schedule: '每個月一次 週日早上 10:00 - 11:30',
          registerLink: '報名讀書會'
        },
        childrenClass: {
          title: '兒童讀經班',
          topic: '活動',
          currentTopic: '弟子規，美術勞作...',
          schedule: '不定期上課',
          registerLink: '報名兒童讀經班'
        }
      },
      // About Page
      about: {
        title: '關於我們',
        templeDescription: '孝恩佛堂為天道發一組圓通設立於西雅圖的佛堂。佛堂旨在弘揚佛學、道學與孔孟思想，期望藉此讓更多人深入了解仙佛神聖的智慧，並在日常生活中付諸實踐，以提升自我修養。透過修行與反思，達到身心靈的圓融與和諧，進而啟發身邊之人，共創社會祥和。願此修行之道為紛亂的世界帶來一份安定與平靜，並祈願孔子所倡之「大同世界」早日實現。',
        purposeTitle: '道之宗旨',
        fiveReligionsTitle: '五大宗教',
        callToAction: '歡迎加入我們的課程，深入了解天道的智慧。',
        purposeItems: [
          '敬天地，禮神明',
          '愛國忠事',
          '敦品崇禮',
          '孝父母',
          '重師尊',
          '信朋友',
          '和鄉鄰',
          '改惡向善',
          '講明五倫八德',
          '闡發五教聖人之奧旨',
          '恪遵四維綱常之古禮',
          '洗心滌慮',
          '借假修真',
          '恢復本性之自然',
          '啟發良知良能之至善',
          '己立立人，己達達人',
          '挽世界為清平',
          '化人心為良善',
          '冀世界為大同'
        ]
      },
      // Contact Page
      contact: {
        title: '聯絡我們',
        email: '電子郵件',
        location: '地點',
        findUs: '尋找我們',
        mapArea: '雷德蒙德 聯合山區域，華盛頓州 98053',
        mapLocation: '地圖位置',
        openInGoogleMaps: '在 Google 地圖中開啟',
        interestedInLectures: '有興趣參加我們的課程嗎？',
        welcomeMessage: '我們歡迎所有對天道教義感興趣的朋友。請隨時與我們聯繫以獲取更多資訊。',
        visitLectures: '歡迎瀏覽我們的課程頁面，了解目前提供的課程。'
      },
      // Footer
      footer: {
        copyright: '© 2025 孝恩佛堂。保留所有權利。',
        privacyPolicy: '隱私政策',
        legalInfo: '法律資訊'
      },
      // Cookie Consent
      cookies: {
        message: '我們使用 Cookie 來提升您的體驗並進行分析。繼續使用本網站即表示您同意我們使用 Cookie。',
        accept: '接受',
        decline: '拒絕',
        learnMore: '了解更多'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

