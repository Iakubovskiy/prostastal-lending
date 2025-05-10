import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: "telegram.svg",
            href: `https://t.me/${t("contact.telegram-nick").replace("@", "")}`,
            label: "Telegram"
        },
        {
            icon: "instagram.svg",
            href: `https://instagram.com/${t("contact.instagram-nick").replace("@", "")}`,
            label: "Instagram"
        },
        {
            icon: "facebook.svg",
            href: `https://fb.me/${t("contact.facebook-page").replace("@", "")}`,
            label: "Facebook"
        }
    ];

    return (
        <footer className="py-8 px-4 text-[#F5F3EB]" style={{ backgroundColor: '#4A5A3C' }}>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center md:items-start text-center">
                        <img src="/logo.png" alt="Prostastal" className="h-12 mb-4" />
                        <p className="text-sm text-center">© 2023 - {currentYear} </p>
                        <p className="text-sm text-center">Prostastal</p>
                        <p className="text-sm text-center">Всі права захищені</p>
                    </div>
                    
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-4">Наш сайт</h3>
                        <a 
                            href={t("hero.main_site_url")} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#F5F3EB] hover:underline mb-2 flex items-center"
                        >
                            <span>Відвідати основний сайт</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                    
                    {/* Соціальні мережі */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-4">Зв'язатися з нами</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((link, index) => (
                                <a 
                                    key={index} 
                                    href={link.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[#F5F3EB] hover:opacity-80 transition"
                                    aria-label={link.label}
                                >
                                    <img
                                        src={`/icons/${link.icon}`}
                                        alt={`${link.label} icon`}
                                        className="w-6 h-6"
                                        style={{ filter: "brightness(0) saturate(100%) invert(98%) sepia(3%) saturate(189%) hue-rotate(329deg) brightness(115%) contrast(88%)" }}
                                    />
                                </a>
                            ))}
                        </div>
                        <a 
                            href={`tel:${t("contact.viber-phone").replace(/\D/g, "")}`} 
                            className="text-[#F5F3EB] hover:underline mt-3"
                        >
                            {t("contact.viber-phone")}
                        </a>
                    </div>
                </div>
                
                <div className="border-t border-[#F5F3EB] opacity-30 mt-6 pt-6 text-center text-sm">
                    <p>Handmade Steel Art — виготовлено в Україні з любов'ю</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;