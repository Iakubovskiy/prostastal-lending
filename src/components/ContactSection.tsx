import {useTranslation} from "react-i18next";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const { t, i18n} = useTranslation();
    //@ts-ignore
    const form = useRef();
    const [showPopup, setShowPopup] = useState(false);
    const [isError, setIsError] = useState(false);

    const sendEmail = (e:any) => {
        e.preventDefault();


        emailjs
            // @ts-ignore
            .sendForm('service_eh7a81n', 'template_arucxe5', form.current, {
                publicKey: '90UyOHzWNjLpkDn-g',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsError(false);
                    setShowPopup(true);
                    setTimeout(() => {
                        setShowPopup(false);
                    }, 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsError(true);
                    setShowPopup(true);
                    setTimeout(() => {
                        setShowPopup(false);
                    }, 3000);

                },
            );
    };

    const contacts = [
        {
            icon: "telegram.svg",
            label: t("contact.telegram"),
            nick: t("contact.telegram-nick"),
            href: `https://t.me/${t("contact.telegram-nick").replace("@", "")}`
        },
        {
            icon: "viber.svg",
            label: t("contact.viber"),
            nick: t("contact.viber-phone"),
            href: `viber://chat?number=${t("contact.viber-phone").replace(/\D/g, "")}`
        },
        {
            icon: "facebook.svg",
            label: t("contact.facebook"),
            nick: t("contact.facebook-page"),
            href: `https://fb.me/${t("contact.facebook-page").replace("@", "")}`
        },
        {
            icon: "whatsapp.svg",
            label: t("contact.whatsapp"),
            nick: t("contact.whatsapp-phone"),
            href: `https://wa.me/${t("contact.whatsapp-phone").replace(/\D/g, "")}`
        },
        {
            icon: "instagram.svg",
            label: t("contact.instagram"),
            nick: t("contact.instagram-nick"),
            href: `https://instagram.com/${t("contact.instagram-nick").replace("@", "")}`
        },
        {
            icon: "signal.svg",
            label: t("contact.signal"),
            nick: t("contact.signal-phone"),
            href: `https://signal.me/#p/${t("contact.signal-phone").replace(/\D/g, "")}`
        }
    ];

    return (
        <section id="contact" className="py-12 px-4" style={{ backgroundColor: '#4A5A3C' }}>
            {showPopup && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div
                        className={`relative mx-4 p-6 rounded-lg shadow-xl ${
                            isError ? 'bg-[#A75A3C]' : 'bg-[#4A5A3C]'
                        } border-2 border-[#F5F3EB] max-w-md w-full`}
                    >
                        <div className="flex flex-col items-center">
                            <div className="mb-4">
                                {isError ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#F5F3EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#F5F3EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>
                            <p className="text-[#F5F3EB] text-center text-xl font-medium mb-4">
                                {isError
                                    ? t("contact.form.error") || "Помилка при відправленні повідомлення"
                                    : t("contact.form.success") || "Повідомлення успішно надіслано!"}
                            </p>
                            <button
                                onClick={() => setShowPopup(false)}
                                className="bg-[#F5F3EB] text-[#4A5A3C] px-6 py-2 rounded-md font-medium hover:bg-white transition"
                            >
                                {t("contact.form.close") || "Закрити"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start text-[#F5F3EB]">
                <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-10 justify-center lg:justify-start">
                        <img src="/icons/contact-us.svg" alt="Contact Icon" className="w-8 h-8 lg:w-10 lg:h-10" />
                        <h2 className="text-[24px] lg:text-[32px] font-bold">{t("contact.title")}</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {contacts.map((c, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <img
                                    src={`/icons/${c.icon}`}
                                    alt={`${c.label} icon`}
                                    className="w-6 h-6"
                                    style={{ filter: "brightness(0) saturate(100%) invert(98%) sepia(3%) saturate(189%) hue-rotate(329deg) brightness(115%) contrast(88%)" }}
                                />
                                <div>
                                    <p className="text-[18px] font-light">{c.label}</p>
                                    <a
                                        href={c.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[20px] lg:text-[24px] font-semibold"
                                    >
                                        {c.nick}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-lg w-full max-w-full box-border pb-20" style={{ background: '#F5F3EB' }}>
                    {/** @ts-ignore */}
                    <form className="flex flex-col space-y-4 w-full" ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            placeholder={t("contact.form.fullName")}
                            className="p-3 rounded text-dark w-full"
                            name="user_name"
                        />
                        <input
                            placeholder={t("contact.form.phone")}
                            className="p-3 rounded text-dark w-full"
                            name="contact_data"
                        />
                        <select className="p-3 rounded text-dark w-full" name="messenger" required>
                            <option value="">{t("contact.form.select-messenger")}</option>
                            <option value="Telegram">Telegram</option>
                            <option value="Viber">Viber</option>
                            <option value="WhatsApp">WhatsApp</option>
                            <option value="Signal">Signal</option>
                            <option value="Email">Email</option>
                        </select>
                        <input value={i18n.language} type="hidden" name="language" />
                        <button
                            type="submit"
                            className="bg-[#F5F3EB] text-[#4A5A3C] font-semibold py-2 rounded hover:bg-white transition w-full"
                        >
                            {t("contact.form.submit")}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
