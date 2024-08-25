import React, { useEffect, useState } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa6";
import Card from "./Cards/Card";
import "animate.css";

import { fadeIn } from "../Variant";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Body = () => {
  const [datas, setdata] = useState([]);
  const [datalength, setdatalength] = useState(6);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((error) => console.error("Error fetching data:", error));
    
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="container mx-auto animate-appear mt-15">
      <div
        className="flex flex-col md:flex-row items-center md:justify-around" 
        // data-aos="fade-up"
      >
        {/* Video Section */}
        <div className=" md:w-[600px] sm:w-[300px] h-[400px] mt-5 p-4 mb-10 md:mb-0" data-aos="fade-right"> 
          <video className="w-full h-full rounded-lg" controls>
            <source src="images/vi.mp4" type="video/mp4" />
            <source src="path/to/your/video.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4" >
          <h1 className="text-4xl font-bold mb-6 animate__animated animate__backInUp"data-aos="fade-up" 
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
            Welcome to Deluxe Hotel
          </h1>
          <p className="text-lg leading-relaxed text-justify from-base-content"data-aos="fade-up">
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

      <div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="bg-gray-100  h-auto  mt-10"
      >
        <h1 className="text-5xl text-center text-[#987038]">Our Rooms</h1>
        <div className="sm:grid-cols-1 w-fit md:grid-cols-3 lg:grid grid-cols-3 gap-4" data-aos="fade-up"
     data-aos-duration="4000">
          {datas.slice(0, datalength).map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>

        <div className={`${datalength === datas.length ? "hidden" : ""} mt-4`}>
          <div className="text-center">
            <button
              onClick={() => setdatalength(datas.length)}
              className="btn btn-primary" data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
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
