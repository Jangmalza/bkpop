// src/components/BannerSlider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './BannerSlider.css';

import banner1 from '../assets/test1.png';

const bannerData = [
  {
    id: 1,
    image: banner1,  
    alt: '배너1',
  },
  {
    id: 2,
    image: banner1,
    alt: '배너2',
  },
  {
    id: 3,
    image: banner1,
    alt: '배너3',
  },
];

function BannerSlider() {
  return (
    <div className="banner-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerSlider;
