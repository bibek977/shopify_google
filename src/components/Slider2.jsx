import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CardItem from './CardItem'
import '../components/SliderContainer.css'
// import { Button } from 'react-bootstrap';

const Slider2 = () => {
  return (
    <div className='swiper-custom'>
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation = {{clickable:true,nextEl:".swiper-next-2", prevEl:".swiper-prev-2"}}
      pagination={{ clickable: true, el:".swiper-pagination-2" }}
      //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {/* <Button>prev</Button> */}
        <SwiperSlide>
            <CardItem></CardItem>
        </SwiperSlide>
        <SwiperSlide>
            <CardItem></CardItem>
        </SwiperSlide>
        <SwiperSlide>
            <CardItem></CardItem>
        </SwiperSlide>
        <SwiperSlide>
            <CardItem></CardItem>
        </SwiperSlide>
        <SwiperSlide>
            <CardItem></CardItem>
        </SwiperSlide>
        <SwiperSlide>
            <CardItem></CardItem>
        </SwiperSlide>
        <SwiperSlide>
            <CardItem></CardItem>
        </SwiperSlide>
    </Swiper>
        <div className='swiper-button-next swiper-next-2'>

        </div>
        <div className='swiper-button-prev swiper-prev-2'>

        </div>

        <div className="swiper-pagination swiper-pagination-2">
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
        </div>
        </div>
  )
}

export default Slider2