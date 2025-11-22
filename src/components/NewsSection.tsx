import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { config } from '../config';

const NewsSection = () => {
    const { i18n } = useTranslation();
    const isZh = i18n.language.startsWith('zh');
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [isCentered, setIsCentered] = useState(true);
    const [lastVisit, setLastVisit] = useState<number | null>(null);

    useEffect(() => {
        const checkScroll = () => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
                setShowLeftArrow(scrollLeft > 0);
                setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
                setIsCentered(scrollWidth <= clientWidth);
            }
        };

        const container = scrollContainerRef.current;
        if (container) {
            checkScroll();
            container.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScroll);
            }
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    useEffect(() => {
        // Get last visit time
        const storedLastVisit = localStorage.getItem('lastVisit');
        if (storedLastVisit) {
            setLastVisit(parseInt(storedLastVisit, 10));
        } else {
            // First visit: show all as new
            setLastVisit(0);
        }

        // Update last visit time to now after a delay
        // This prevents Strict Mode from overwriting the value immediately on the first simulated mount
        const timer = setTimeout(() => {
            localStorage.setItem('lastVisit', Date.now().toString());
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 340; // card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const isNew = (dateString: string) => {
        if (lastVisit === null) return false;
        const newsDate = new Date(dateString).getTime();
        // Compare news date (00:00:00) with last visit
        return newsDate > lastVisit;
    };

    // If no news, don't render the section
    if (!config.news || config.news.length === 0) {
        return null;
    }

    return (
        <section className="py-8 bg-transparent overflow-hidden">
            <div className="container-custom">
                <div className="relative group">
                    {/* Left Arrow */}
                    {showLeftArrow && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-primary-600 hover:bg-white transition-all duration-300 -ml-4 md:-ml-6"
                            aria-label="Scroll left"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                        </button>
                    )}

                    {/* Right Arrow */}
                    {showRightArrow && !isCentered && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-primary-600 hover:bg-white transition-all duration-300 -mr-4 md:-mr-6"
                            aria-label="Scroll right"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    )}

                    <div
                        ref={scrollContainerRef}
                        className={`overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar snap-x snap-mandatory ${isCentered ? 'flex justify-center' : ''}`}
                    >
                        <div className={`flex space-x-6 min-w-max ${isCentered ? '' : 'md:min-w-0'}`}>
                            {config.news.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className="snap-center shrink-0 w-[300px] group/card"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="h-full bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-300 to-primary-500 transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300" />

                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-sm font-medium text-primary-600 bg-primary-50 rounded-full">
                                                {item.date}
                                            </span>
                                            {isNew(item.date) && (
                                                <span className="flex items-center gap-1 text-xs font-bold text-white bg-amber-600 px-3 py-1 rounded-full animate-pulse shadow-md">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                                                    </svg>
                                                    NEW
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover/card:text-primary-600 transition-colors line-clamp-2">
                                            {isZh ? item.title.zh : item.title.en}
                                        </h3>

                                        <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                                            {isZh ? item.description.zh : item.description.en}
                                        </p>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
