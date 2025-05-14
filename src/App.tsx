import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import HeroSection from "./components/HeroSection.tsx";
import FeaturesSection from "./components/FeaturesSection.tsx";
import ProductExamplesSection from "./components/PhotoReviewsSection.tsx";
import PricesSection from "./components/PricesSection.tsx";
import GoogleReviewsSection from "./components/GoogleReviewsSection.tsx";
import ContactSection from "./components/ContactSection.tsx";
import Footer from "./components/Footer.tsx";
import TelegramPromo from "./components/TelegramPromo.tsx";

function App() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    return (
        <>
            <Helmet htmlAttributes={{ lang: currentLang }} />
            <Helmet>
                <meta name="robots" content="all"/>
                <link rel="canonical" href={t('meta.canonical')}/>
            </Helmet>

            <HeroSection/>
            <PricesSection />
            <ContactSection />
            <TelegramPromo />
            <ProductExamplesSection />
            <div className="relative bg-[#F5F3EB] p-4">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
                    style={{ backgroundImage: 'url("/bg-pattern.png")' }}
                />
                <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                        <FeaturesSection />
                    </div>
                    <div className="w-full md:w-1/2">
                        <GoogleReviewsSection />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;