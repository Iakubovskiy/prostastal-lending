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
            <div className="relative z-0 bg-[#F5F3EB] py-8 px-3">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start lg:pl-20">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                            <img src={telegramIcon} alt="Telegram Icon" className="w-7 h-7 lg:w-9 lg:h-9" />
                            <h2 className="text-[28px] text-olive font-bold">
                                {t('telegram-channel.block-title')}
                            </h2>
                        </div>

                        <div>
                            <h4 className="font-bold mb-1 text-dark">
                                {t('telegram-channel.subtitle')}
                            </h4>
                            <p className="text-dark max-w-md">
                                {t('telegram-channel.main-text')}
                            </p>
                        </div>

                        <a
                            href={telegramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                            aria-label="Telegram link"
                        >
                            <div className="relative w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px]">
                                <img
                                    src={qrImage}
                                    alt="QR Code"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </a>
                    </div>


                    <div className="md:w-[55%] flex justify-center md:justify-end mt-2 md:mt-0 lg:justify-center lg:pl-40">
                        <img src={phoneImage} alt="Telegram on phone" className="max-w-xs md:max-w-sm w-50 h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TelegramPromo;