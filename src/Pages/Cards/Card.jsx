import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
  console.log(card);
  const {image,price,estate_title,id}=card
  const handaleClick=()=>{
    console.log('ddddd');
  }
  return (
    <div className=" rounded-md shadow-md  mx-2  mt-10  bg-white">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full  rounded-t-md h-72 "
      />
      <div className="flex flex-col shadow-xl shadow-gray-100 justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl  text-center tracking-wide">{estate_title}</h2>
          <p className="text-center mt-2">
            <span className="text-2xl relative ">
              {price} <hr className="w-12 mx-auto my-1 border-t-2 -ml-12 border-[#987038] absolute left-1/2 transform -translate-x-1/2 top-full" />
             
            </span>
           
          </p>
        </div>
        <hr />
       <Link to={`/card/${id}`}>
       
      <div className="text-center">
      <button onClick={handaleClick}
          type="button"
          className="flex items-center justify-center j  p-3 gap-x-1  border border-[#987038] font-semibold rounded-md text-gray-900" >
          <span className="">View Room Details{" "}</span>
          <span className="mt-1">
            {" "}
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
