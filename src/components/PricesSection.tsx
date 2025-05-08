import {useTranslation} from "react-i18next";

const PricesSection = () => {
    const {t} = useTranslation();

    return (
        <section id="prices" className="py-16 px-4" style={{ background: 'rgba(194, 178, 128, 0.2)' }} >
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
                <div className="flex-1 flex flex-col justify-start">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-10">
                        <img src="/icons/pricetag.svg" alt="Pricetag Icon" className="w-8 h-8 lg:w-10 lg:h-10"/>
                        <h2 className="text-[32px] font-bold">{t('pricing.title')}</h2>
                    </div>
                    <div className="p-6 flex-1">
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 whitespace-pre-line">{t('pricing.main-text')}</p>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="w-full h-full">
                        <iframe
                            src="https://www.youtube.com/embed/61-tWDeMgvY"
                            className="w-full h-full rounded shadow"
                            title="Pricing Video"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricesSection;