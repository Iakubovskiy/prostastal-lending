import { useTranslation } from "react-i18next";

interface Feature {
    icon: string;
    text: string;
}

const FeaturesSection = () => {
    const { t } = useTranslation();
    const features = t('features', { returnObjects: true }) as Feature[];

    return (
        <div className="p-6 rounded-lg">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-10 text-dark">
                <img src="/icons/features.svg" alt="Google maps Icon" className="w-8 h-8 lg:w-10 lg:h-10"/>
                <h2 className="text-[32px] font-bold">{t('features-title')}</h2>
            </div>

            <div className="space-y-4">
                {Array.isArray(features) && features.map((feature: Feature, index: number) => (
                    <div key={index} className="flex items-center">
                        <img
                            src={`/icons/${feature.icon}.svg`}
                            alt={feature.text}
                            className="w-8 h-8 mr-3"
                        />
                        <span className="text-xl text-dark">{feature.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;