import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const CardDetails = () => {
    const datas = useLoaderData();
    const { id } = useParams();

    // Find the card by id
    const card = datas.find(card => card.id === id);

    // Return a message if the card is not found
    if (!card) {
        return <div>Card not found</div>;
    }

    const { estate_title, description, price, area, location, facilities, image } = card;

    return (
        <section className="mb-14 mt-9 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
            <div className="container mx-auto flex flex-col  lg:flex-row">
                <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
                    <div className="flex items-center justify-center  p-4 md:p-8 lg:p-12">
                        <div className="h-[700px] w-full"  data-aos="fade-left" >
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                data-aos="fade-left"
                            >
                                {Array.isArray(image) ? image.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            className="h-[600px] w-full object-cover"
                                            src={img}
                                            alt={`Room Image ${index + 1}`}
                                        />
                                    </SwiperSlide>
                                )) : (
                                    <SwiperSlide>
                                        <img
                                            className="h-[600px] w-full object-cover rounded-xl"
                                            src={image}
                                            alt="Room Image"
                                        />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col px-6 py-8 space-y-6 shadow-xl sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 justify-center
                 rounded-lg mt-[100px] bg-violet-400 h-[500px] dark:bg-violet-600 text-gray-900 dark:text-gray-50"data-aos="fade-up" 
                 data-aos-easing="ease-out-cubic"
                 data-aos-duration="2000">
                    <h2 className="text-2xl font-bold">{estate_title}</h2>
                    <p className="text-lg">{description}</p>
                    <p className="text-lg font-medium">{price}</p>
                    <p className="text-sm">Area: {area}</p>
                    <p className="text-sm">Location: {location}</p>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Facilities:</h3>
                        <ul className="list-disc list-inside space-y-2">
                            {facilities.map((facility, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                    <span>{facility}</span>
                                </li>
                            ))}
                        </ul>
                      
                    </div>
                </div>
                
            </div>
            <div className='text-center mb-10'>
            <Link to="/"> <button className='btn-primary btn justify-center mt-2 '>Go to Home</button></Link>
            </div>
        </section>
    );
};

export default CardDetails;
