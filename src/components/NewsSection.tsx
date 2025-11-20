import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { config } from '../config';

const NewsSection = () => {
    const { i18n } = useTranslation();
    const isZh = i18n.language === 'zh';
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isScrollable, setIsScrollable] = useState(false);

    // Check scroll position to update arrow visibility
    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // -10 buffer
            setIsScrollable(scrollWidth > clientWidth);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320; // Approx card width + gap
            const newScrollLeft = direction === 'left'
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    // If no news, don't render the section
    if (!config.news || config.news.length === 0) {
        return null;
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4 mt-12 relative z-20 group">
            <div className="relative">
                {/* Left Arrow */}
                {canScrollLeft && (
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white text-primary-600 transition-all hidden md:block"
                        aria-label="Previous news"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>
                )}

                {/* Right Arrow */}
                {canScrollRight && (
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white text-primary-600 transition-all hidden md:block"
                        aria-label="Next news"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                )}

                <div
                    ref={scrollContainerRef}
                    onScroll={checkScroll}
                    className="overflow-x-auto py-4 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar snap-x snap-mandatory"
                >
                    <div className={`flex space-x-4 min-w-max md:min-w-0 md:flex ${isScrollable ? '' : 'md:justify-center'} md:space-x-6`}>
                        {config.news.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                className="w-72 md:w-auto flex-shrink-0 snap-center"
                            >
                                <Link
                                    to={item.link}
                                    className="block h-full bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-white/50 hover:shadow-md transition-all hover:-translate-y-1 hover:bg-white/90"
                                >
                                    <div className="text-xs text-primary-600 font-medium mb-2">
                                        {item.date}
                                    </div>
                                    <h3 className={`text-lg font-bold mb-2 text-gray-800 ${isZh ? 'font-klee' : ''}`}>
                                        {isZh ? item.title.zh : item.title.en}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                        {isZh ? item.description.zh : item.description.en}
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
