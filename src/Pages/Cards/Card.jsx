import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
// variant
import { fadeIn } from "../../Variant";

const Card = ({ card }) => {
  const { image, price, estate_title, id } = card;

  const handleClick = () => {
    console.log('View Room Details clicked');
  };

  return (
    <div 
      variants={fadeIn("up", 0.3)} // Corrected the prop name to "variants"
      initial="hidden"
      animate="show"
      className="rounded-md shadow-md mx-2 mt-10 bg-white"
    >
      <img
        src={image}
        alt={estate_title}
        className="object-cover object-center w-full rounded-t-md h-72"
         data-aos="zoom-in"
        data-aos-duration="3000"
      />
      <div className="flex flex-col shadow-xl shadow-gray-100 justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl text-center tracking-wide">{estate_title}</h2>
          <p className="text-center mt-2">
            <span className="text-2xl relative">
              {price} 
              <hr className="w-12 mx-auto my-1 border-t-2 -ml-12 border-[#987038] absolute left-1/2 transform -translate-x-1/2 top-full" />
            </span>
          </p>
        </div>
        <hr />
        <Link to={`/card/${id}`}>
          <div className="text-center" >
            <button 
              onClick={handleClick}
              type="button"
              className="flex items-center justify-center p-3 gap-x-1 border border-[#987038] font-semibold rounded-md text-gray-900" 
               data-aos="fade-up"
     
            >
              <span>View Room Details{" "}</span>
              <span className="mt-1">
                <BsArrowRight />
              </span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
