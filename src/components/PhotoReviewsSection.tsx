import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {useEffect, useState} from "react";

const SimplePhotoRotator = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const imageModules = import.meta.glob('/src/assets/swiper/*.(jpg|jpeg|png|gif)', { eager: true });

        const imageUrls = Object.values(imageModules).map((module: any) => module.default);
        setImages(imageUrls);
    }, []);


    return (
        <div className="bg-[#4A5A3C] w-full flex flex-col items-center py-6 pb-16">
            <div className="flex items-center justify-center mb-6">
                <img src="/icons/photoReview.svg" alt="Google maps Icon" className="w-8 h-8 lg:w-10 lg:h-10 mr-6"/>
                <h2 className="text-[32px] font-bold text-light">Clients reviews</h2>
            </div>
            <div className="max-w-[500px] w-full rounded-xl overflow-hidden shadow-lg">
            <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    pagination={true}
                    loop={true}
                    modules={[EffectFlip, Pagination]}
                    className="mySwiper"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className="aspect-square">
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src={src}
                                    alt={`Slide ${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SimplePhotoRotator;