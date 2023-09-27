import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../components/SliderContainer.css'
import CustomCard from '../components/CustomCard'

const Swiper2Container = (props) => {
  const {data} = props
  // console.log(props.data)
  return (
    <div className='swiper-custom mx-5'>
<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation = {{clickable:true,nextEl:".swiper-next-2", prevEl:".swiper-prev-2"}}
      pagination={{ clickable: true, el:".swiper-pagination-2" }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {
          data?.map((e,i)=>{
            return(
              <SwiperSlide>
                <CustomCard data={e} key={i}></CustomCard>
            </SwiperSlide>
            )
          })
        }
        


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

export default Swiper2Container