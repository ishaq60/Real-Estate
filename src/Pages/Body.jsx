import React, { useEffect, useState } from "react";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa6";
import Card from "./Cards/Card";

const Body = () => {
  const [datas, setdata] = useState([]);
  const [datalength, setdatalength] = useState(6);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  return (
    <div className="container mx-auto  mt-15">
      <div className="flex flex-col md:flex-row items-center md:justify-around">
        {/* Video Section */}
        <div className="w-[600px] h-[400px] mt-5 p-4  mb-10 md:mb-0">
          <video className="w-full h-full rounded-lg " controls>
            <source className="h-3" src="images/vi.mp4" type="video/mp4" />
            <source src="path/to/your/video.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-6">Welcome to Deluxe Hotel</h1>
          <p className="text-lg leading-relaxed text-justify from-base-content">
            Welcome to Hotel Deluxe, where luxury meets unparalleled comfort in
            the heart of California. Our five-star hotel is an epitome of
            elegance, offering a perfect blend of modern amenities and timeless
            sophistication. Each of our meticulously designed rooms and suites
            provides a sanctuary of tranquility, featuring plush bedding,
            exquisite furnishings, and state-of-the-art technology. Indulge in
            gourmet dining at our world-class restaurants, where culinary
            excellence is celebrated through a diverse array of international
            and local cuisines. Unwind at our opulent spa, offering a range of
            rejuvenating treatments tailored to your personal needs. Our
            dedicated concierge team is at your service, ensuring that every
            aspect of your stay is flawless, from arranging exclusive
            experiences to meeting your every request. Experience the ultimate
            in luxury, where every detail is designed to exceed your
            expectations. Welcome to a world of refined elegance and timeless
            charm at Hotel Deluxe.
          </p>
          <div className="mt-2 flex gap-2">
            <RiTwitterFill />
            <FaGooglePlusG />
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 h-[1900px]  mt-10 ">
        <h1 className="text-5xl  text-center text-[#987038]">Our Rooms</h1>

        <div className="grid grid-cols-3 gap-4">
          {datas.slice(0, datalength).map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>

        <div className={`${datalength === datas.length ? "hidden" : ""} mt-4`}>
          <div className="text-center">
            <button
              onClick={() => setdatalength(datas.length)}
              className="btn btn-primary"
            >
              Show All Rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
