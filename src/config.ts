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
    studyGroupRegistrationUrl: 'https://forms.gle/Ue1nD5Rb4otxcqzP8',
    news: [
        {
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
