import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import HeroSection from "./components/HeroSection.tsx";
import FeaturesSection from "./components/FeaturesSection.tsx";
import ProductExamplesSection from "./components/ProductExamplesSection.tsx";
import PricesSection from "./components/PricesSection.tsx";
import GoogleReviewsSection from "./components/GoogleReviewsSection.tsx";
import ContactSection from "./components/ContactSection.tsx";
import {detectLangFromSubdomain} from "./i18n";

function App() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet htmlAttributes={{ lang: detectLangFromSubdomain() }} />
            <Helmet>
                <title>{t('title-meta')}</title>
                <meta name="description" content={t('description')} />
                <meta property="og:title" content={t('title-meta')} />
                <meta property="og:description" content={t('description')} />
                <meta property="og:url" content={window.location.href} />
            </Helmet>

            <HeroSection />
            <PricesSection />
            <ContactSection />
            <ProductExamplesSection />
            <div className="bg-[#4A5A3C] p-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                        <FeaturesSection />
                    </div>
                    <div className="w-full md:w-1/2">
                        <GoogleReviewsSection />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
