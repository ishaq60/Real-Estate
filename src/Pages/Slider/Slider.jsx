import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Updated CSS import
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Slider = () => {
    return (
        <div className=' h-[700px]'>
            <Swiper
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                 spaceBetween={50}
                 slidesPerView={1}
                 navigation
                 pagination={{ clickable: true }}
                 scrollbar={{ draggable: true }}
            >
                <SwiperSlide className=''>
                    <img className='h-[600px]'  src="images/1.jpg" alt="Image 1" style={{width:"100%"}} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[600px]' src="images/2.jpg" alt="Image 1" style={{width:"100%"}} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[600px]' src="images/3.jpg" alt="Image 1" style={{width:"100%"}} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[600px]' src="images/4.jpg" alt="Image 1" style={{width:"100%"}} />
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Slider;
