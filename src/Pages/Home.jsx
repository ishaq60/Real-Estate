import React from 'react';
import Slider from './Slider/Slider';
import Body from './Body';



const Home = () => {
    return (
        <div className='mt-3 max-h-full'>
           <div className='h-[700px]'>
           <Slider></Slider>
           </div>
            <Body></Body>
        </div>
    );
};

export default Home;