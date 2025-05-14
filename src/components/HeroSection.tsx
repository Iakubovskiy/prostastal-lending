import {useTranslation} from "react-i18next";

const HeroSection = () => {
    const { t } = useTranslation();
    const url = t('hero.main_site_url');
    return (
        <section
            id="hero"
            className="relative w-full bg-cover bg-center text-white pb-6"
            style={{ backgroundImage: 'url("/hero.jpeg")', height: '80vh' }}
        >
            <div className="absolute inset-0 bg-black opacity-20 z-0" />

            <img
                src="/logo.png"
                alt="Logo"
                className="absolute top-4 right-4 w-12 sm:w-12 md:w-18 lg:w-25 z-10"
            />

            <div className="absolute inset-0 flex flex-col justify-center w-full items-center text-center px-4 z-10 pt-30">
                <h1 className="text-[12vw] lg:text-[150px] font-bold leading-none mb-4">
                    {t('hero.title')}
                </h1>
                <p className="text-[6vw] lg:text-[36px] mb-6">
                    {t('hero.hero-text')}
                </p>
                <a href={url} target="_blank" className="mt-17 sm:mt-0">
                    <button className="text-[5vw] lg:text-[32px] px-6 py-3 rounded-md transition-colors duration-200">
                        {t('hero.order-button')}
                    </button>
                </a>
            </div>
        </section>
    );
};


export default HeroSection;