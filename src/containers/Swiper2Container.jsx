import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../components/SliderContainer.css'
import CustomCard from '../components/CustomCard'
import { useEffect, useRef } from 'react';

const Swiper2Container = (props) => {
  const {data,settings,setSettings} = props
  let cardbody 
  let text

  if (settings?.theme === 'dark') {
    cardbody = {backgroundColor:'#303030'};
    text = {color : 'white'};
  }
  else if(settings?.theme==='light') {
    cardbody = {backgroundColor:'#efefef'};
    text = {color : '#000'};
  }
  else if(settings?.theme==='transparent'){
    cardbody={background:'white'}
    text={color:'#000'}

 }
 else if(settings?.theme==='custom'){
    cardbody={backgroundColor:settings?.cardbody}
    text={color:settings?.text}
 }

  const autoplays = useRef(null)
  useEffect(()=>{

    document.querySelectorAll('.swiper-pagination-bullet').forEach(bullet=>{
      bullet.style.background=text.color
    })
  
    if(autoplays.current && settings.AutoPlay){
      autoplays.current.swiper.autoplay.start();
    }else{
      autoplays.current.swiper.autoplay.stop();
    }
  },[autoplays,settings])
  

  return (
    <div className='swiper-custom mx-5'>
<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      navigation = {{clickable:true,nextEl:".swiper-next-2", prevEl:".swiper-prev-2"}}
      pagination={{ clickable: true, el:".swiper-pagination-2" }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay:1000,
        disableOnInteraction: false,
        
      }}
      ref={autoplays}
      breakpoints={{
        1200:{
          slidesPerView : 3
        },
        900:{
          slidesPerView:2
        },
        700:{
          slidesPerView:2
        },
        0:{
          slidesPerView:1
        }
      }}
      >
        {
          data?.map((e,i)=>{
            return(
              <SwiperSlide>
                <CustomCard data={e} key={i} settings={settings} setSettings={setSettings}></CustomCard>
            </SwiperSlide>
            )
          })
        }
        


    </Swiper>
        <div className='swiper-button-next swiper-next-2' style={text}>

        </div>
        <div className='swiper-button-prev swiper-prev-2' style={text}>

        </div>

        <div className="swiper-pagination swiper-pagination-2">
        </div>
        </div>
  )
}

export default Swiper2Container