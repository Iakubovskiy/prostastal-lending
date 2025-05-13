import { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useTranslation} from "react-i18next";

type Review = {
  user: string;
  text: string;
  originalUrl: string;
  rating: number;
};

const GOOGLE_REVIEWS_LINK = "https://maps.app.goo.gl/Wu4NYtD3qnrxqkpM8";

const GoogleReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const translatedReviews: Review[] = Array.from({ length: 5 }, (_, i) => ({
      user: t(`reviews.preset.${i}.user`),
      text: t(`reviews.preset.${i}.text`),
      originalUrl: t(`reviews.preset.${i}.originalUrl`),
      rating: Number(t(`reviews.preset.${i}.rating`)),
    }));

    setReviews(translatedReviews);
  }, [t]);
  const renderStars = (rating: number) => (
      <div className="flex gap-1 text-yellow-500 text-lg">
        {'★'.repeat(rating)}
        <span className="text-gray-300">{'★'.repeat(5 - rating)}</span>
      </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
      <div className="max-w-xl mx-auto py-10" >
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-10 text-dark">
          <img src="/icons/google-maps.svg" alt="Google maps Icon" className="w-8 h-8 lg:w-10 lg:h-10"/>
          <h2 className="text-[32px] font-bold">{t('reviews.title')}</h2>
        </div>
        <div style={{background: '#F5F3EB', borderRadius: 20}}>
          <Slider {...settings} className="justify-center items-center">
            {reviews.map((review, index) => (
                <div key={index} className="flex flex-col items-center p-6 rounded-2xl shadow-lg text-dark w-full h-full justify-center" style={{background: '#F5F3EB'}}>
                  <h3 className="text-xl font-semibold mb-1">{review.user}</h3>
                  {renderStars(review.rating)}
                  <p className="mt-3 text-dark whitespace-pre-line">{review.text}</p>
                  <a
                      href={review.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-4 text-sm text-gray-500 hover:text-green-800"
                  >
                    {t('reviews.on_google_maps')}
                  </a>
                </div>
            ))}

            <div className="p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center text-center" style={{background: '#F5F3EB'}}>
              <h3 className="text-2xl font-semibold mb-3" style={{color: "#1C1C1C"}}>{t('reviews.more_reviews')}</h3>
              <p className="mb-5" color={"#1C1C1C"}>{t('reviews.read_more_on_maps')}</p>
              <a
                  href={GOOGLE_REVIEWS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <button className="px-6 py-3 rounded-md transition-colors duration-200" style={{borderRadius: 40}}>
                  {t('reviews.read_more')}
                </button>
              </a>
            </div>
          </Slider>
        </div>
      </div>
  );
};

export default GoogleReviewsSection;
