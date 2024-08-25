import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Updated CSS import
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

const Slider = () => {
    return (
        <div className='mb-2 ] h-[700px]'>
            <Swiper className='absolate'
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                 spaceBetween={50}
                 slidesPerView={1}
                 navigation
                 pagination={{ clickable: true }}
                 scrollbar={{ draggable: true }}
            >
                <SwiperSlide className='mb-2'>
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
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </div>
    );
};

export default Slider;