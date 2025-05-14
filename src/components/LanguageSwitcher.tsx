import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../i18n';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    
    const switchToLanguage = (lang: 'en' | 'ua') => {
        if (lang !== currentLang) {
            changeLanguage(lang);
        }
    };
    
    return (
        <div className="text-olive text-sm hover:opacity-100 transition-opacity text-xl">
            <span 
                onClick={() => switchToLanguage('en')} 
                className={`cursor-pointer ${currentLang === 'en' ? 'font-semibold opacity-100' : ''}`}
            >
                EN
            </span>
            <span className="mx-1">|</span>
            <span 
                onClick={() => switchToLanguage('ua')} 
                className={`cursor-pointer ${currentLang === 'ua' ? 'font-semibold opacity-100' : ''}`}
            >
                UA
            </span>
        </div>
    );
};

export default LanguageSwitcher;