import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import HeroSection from "./components/HeroSection.tsx";
import FeaturesSection from "./components/FeaturesSection.tsx";
import ProductExamplesSection from "./components/PhotoReviewsSection.tsx";
import PricesSection from "./components/PricesSection.tsx";
import GoogleReviewsSection from "./components/GoogleReviewsSection.tsx";
import ContactSection from "./components/ContactSection.tsx";
import {detectLangFromSubdomain} from "./i18n";
import Footer from "./components/Footer.tsx";

function App() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet htmlAttributes={{ lang: detectLangFromSubdomain() }} />
            <Helmet>
                <meta name="robots" content="all"/>
                <link rel="canonical" href={t('meta.canonical')}/>
            </Helmet>

            <HeroSection/>
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
            <Footer />
        </>
    );
}

export default App;
