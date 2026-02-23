export interface NewsItem {
    date: string;
    title: {
        en: string;
        zh: string;
    };
    description: {
        en: string;
        zh: string;
    };
    link: string;
}

export const config = {
    studyGroupRegistrationUrl: 'https://forms.gle/JvUZngmcXHiMV7FC6',
    news: [
        {
            date: '2026-02-23',
            title: {
                en: 'March 2026 Reading Group',
                zh: '2026年三月讀書會',
            },
            date: '2025-11-20',
            title: {
                en: 'January 2026 Reading Group',
                zh: '2026年一月讀書會',
            },
            description: {
                en: 'January 2026 Reading Group is now open for registration.',
                zh: '2026年一月讀書會開始報名囉，誠摯歡迎大家報名參加。',
            },
            link: '/lectures',
        }
    ] as NewsItem[],
};
