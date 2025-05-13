import React from 'react';
import { useTranslation } from "react-i18next";

const TelegramPromo: React.FC = () => {
    const { t } = useTranslation();
    const telegramIcon = '/icons/telegram-full.svg';
    const qrImage = '/telegram-qr.png';
    const phoneImage = '/telegram-screen.png';
    const telegramLink = 'https://t.me/prostastal';

    return (
        <section className="relative overflow-hidden">

            <div className="relative z-0 bg-[#F5F3EB] py-12 px-4">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#4A5A3C] z-1" />
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex-1 text-center md:text-left z-2">
                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-10">
                            <img src={telegramIcon} alt="Telegram Icon" className="w-8 h-8 lg:w-10 lg:h-10" />
                            <h2 className="text-[32px] text-olive font-bold">{t('telegram-channel.block-title')}</h2>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-dark">
                            {t('telegram-channel.subtitle')}
                        </h2>
                        <p className="text-dark max-w-md mx-auto md:mx-0">
                            {t('telegram-channel.main-text')}
                        </p>

                        <div className="mt-6">
                            <a
                                href={telegramLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                                aria-label="Telegram link"
                            >
                                <div className="flex justify-center md:justify-start">
                                    <div className="relative w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]">
                                        <img
                                            src={qrImage}
                                            alt="QR Code"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center md:justify-end z-2">
                        <img src={phoneImage} alt="Telegram on phone" className="max-w-xs md:max-w-sm w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TelegramPromo;
