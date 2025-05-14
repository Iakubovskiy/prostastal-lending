import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ua from './locales/ua.json';

export function detectLangFromSubdomain(): 'en' | 'ua' {
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === 'ua') return 'ua';
    return 'en';
}

export function changeLanguage(language: 'en' | 'ua'): void {
    i18n.changeLanguage(language);
    document.documentElement.setAttribute('lang', language);
}

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ua: { translation: ua },
        },
        lng: detectLangFromSubdomain(),
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;