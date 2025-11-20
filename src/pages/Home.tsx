import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import NewsSection from '../components/NewsSection';

const Home = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  return (
    <div className="relative leading-none">
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex flex-col justify-end pb-12 overflow-hidden block">
        {/* Background Image - Mobile (portrait) version */}
        <div className="absolute inset-0 bg-section-1-mobile md:landscape:bg-section-1-desktop bg-cover bg-top bg-no-repeat" style={{ backgroundColor: '#f0f9ff' }}>
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60" />
          {/* Warm overlay for temple feel */}
          <div className="absolute inset-0 bg-yellow-50/40" />
        </div>


        {/* News Section */}
        <NewsSection />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 right-8"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>



      {/* Section 2: Divine Text */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label={t('home.divineText')}
      >
        {/* Background Image - Mobile (portrait) version */}
        <div className="absolute inset-0 bg-section-2-mobile bg-section-2-desktop bg-cover bg-center bg-no-repeat" style={{ backgroundColor: '#92400e' }} role="img" aria-label="Temple interior background">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/40 via-amber-500/30 to-orange-400/30" />
        </div>

        <div className="relative z-10 text-white px-4 w-full h-full flex items-center justify-center">
          {/* Vertical Three-Column Layout */}
          <motion.div
            className="flex items-center justify-center gap-8 md:gap-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            {/* Left Column: 三界十方 - aligned with 無量清虛 */}
            <div className="flex flex-col items-center gap-2 text-3xl md:text-5xl font-klee self-center" aria-hidden="true">
              <span>三</span>
              <span>界</span>
              <span>十</span>
              <span>方</span>
            </div>

            {/* Center Column: 明明上帝 無量清虛 萬靈真宰 */}
            <h2 className="sr-only">{t('home.divineText')}</h2>
            <div className="flex flex-col items-center gap-2 text-4xl md:text-6xl font-klee" aria-hidden="true">
              <span>明</span>
              <span>明</span>
              <span>上</span>
              <span>帝</span>
              <span className="my-2"></span>
              <span>無</span>
              <span>量</span>
              <span>清</span>
              <span>虛</span>
              <span className="my-2"></span>
              <span>萬</span>
              <span>靈</span>
              <span>真</span>
              <span>宰</span>
            </div>

            {/* Right Column: 至尊至聖 - aligned with 無量清虛 */}
            <div className="flex flex-col items-center gap-2 text-3xl md:text-5xl font-klee self-center" aria-hidden="true">
              <span>至</span>
              <span>尊</span>
              <span>至</span>
              <span>聖</span>
            </div>
          </motion.div>
        </div>
        {/* Bottom fade for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-amber-100/50 z-20"></div>
      </section>

      {/* Section 3: Five Religions Unity */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden">
        {/* Top fade for smooth transition */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-amber-100/50 to-transparent z-20"></div>
        {/* Background Image - Mobile (portrait) version */}
        <div className="absolute inset-0 bg-section-3-mobile bg-section-3-desktop bg-cover bg-top bg-no-repeat" style={{ backgroundColor: '#fef3c7' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200/40 via-yellow-100/30 to-white/35" />
        </div>

        <div className="relative z-10 text-white px-8 md:px-16 lg:px-24 py-16">
          {/* Vertical Text - Left Aligned: 彌勒佛 */}
          <motion.div
            className="flex flex-col items-start gap-3 text-5xl md:text-7xl font-klee min-h-[500px] pt-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <span>彌</span>
            <span>勒</span>
            <span>佛</span>
          </motion.div>
        </div>
        {/* Bottom fade for smooth transition */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-cyan-100/50 z-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: false }}
        ></motion.div>
      </section>

      {/* Section 4: Wisdom Text - Part 1 */}
      <section className="relative h-screen flex items-center justify-end overflow-hidden">
        {/* Top fade for smooth transition */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-100/50 to-transparent z-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: false }}
        ></motion.div>
        {/* Background Image - Mobile (portrait) version */}
        <div className="absolute inset-0 bg-section-4-mobile bg-section-4-desktop bg-cover bg-top bg-no-repeat" style={{ backgroundColor: '#ecfeff' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-sky-200/40 via-cyan-100/30 to-white/35" />
        </div>

        <div className="relative z-10 text-white px-8 md:px-16 lg:px-24 py-16">
          {/* Vertical Text - Right Aligned: 道在聖傳修在己 */}
          <motion.div
            className="flex flex-col items-center gap-3 text-5xl md:text-7xl font-klee min-h-[500px] justify-center pt-16"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <span>南</span>
            <span>海</span>
            <span>古</span>
            <span>佛</span>
          </motion.div>
        </div>
        {/* Bottom fade for smooth transition */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-pink-100/50 z-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: false }}
        ></motion.div>
      </section>

      {/* Section 5: Wisdom Text - Part 2 */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Top fade for smooth transition */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pink-100/50 to-transparent z-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: false }}
        ></motion.div>
        {/* Background Image - Mobile (portrait) version */}
        <div className="absolute inset-0 bg-section-5-mobile bg-section-5-desktop bg-cover bg-top bg-no-repeat" style={{ backgroundColor: '#fef2f2' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-rose-200/40 via-pink-100/30 to-white/35" />
        </div>

        <div className="relative z-10 text-white px-8 md:px-16 lg:px-24 py-16">
          {/* Vertical Text - Left Aligned: 德由人蹟命由天 */}
          <motion.div
            className="flex flex-col items-center gap-3 text-5xl md:text-7xl font-klee min-h-[500px] justify-center pt-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <span>濟</span>
            <span>公</span>
            <span>活</span>
            <span>佛</span>
          </motion.div>
        </div>
        {/* Bottom fade for smooth transition */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-900/50 z-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: false }}
        ></motion.div>
      </section>

      {/* Section 6: Full Wisdom Text with CTA */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Top fade for smooth transition */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900/50 to-transparent z-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: false }}
        ></motion.div>
        {/* Background Image - Mobile (portrait) version */}
        <div className="absolute inset-0 bg-section-6-mobile bg-section-6-desktop bg-cover bg-top bg-no-repeat" style={{ backgroundColor: '#0f172a' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-800/70 to-zinc-900/80" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-klee mb-6 leading-relaxed">
              {t('home.wisdomText')}
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/about"
              className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-medium transition-colors duration-300 shadow-lg shadow-amber-900/20"
            >
              {t('nav.about')}
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-full font-medium transition-colors duration-300 backdrop-blur-sm"
            >
              {t('nav.contact')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
