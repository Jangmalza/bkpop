// src/components/BannerSlider.js
import { Box } from '@chakra-ui/react';
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
    <Box w="100%" maxW="1000px" mx="auto" mt={5} overflow="hidden" borderRadius="md">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="mySwiper"
        style={{
          '--swiper-pagination-color': '#3182ce',
          '--swiper-pagination-bullet-inactive-color': '#cbd5e0',
        }}
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.alt} style={{ width: '100%', height: 'auto' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default BannerSlider;
