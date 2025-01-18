"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Correct Swiper CSS import for newer versions
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { FaLocationDot } from "react-icons/fa6";

export default function SwiperItem({
  data,
}: {
  data: any;
}) {
  // Check if `data` is loaded and if `data.results` is an array
  if (!data || !Array.isArray(data.results)) {
    return <div>Loading...</div>; // Show loading while data is not available
  }

  // Use `data.results` if it's an object containing `results`
  const dataToUse = Array.isArray(data) ? data : data.results;

  console.log(dataToUse); // You can inspect the data here

  return (
    <Swiper
      spaceBetween={30} // Space between slides
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      loop={true}
      breakpoints={{
        1200: { slidesPerView: 4 },
        992: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        500: { slidesPerView: 1 },
      }}
      className="flex"
    >
      {dataToUse.map((data: any, index: number) => (
        <SwiperSlide key={index}>
          <div className="shadow-lg p-6 rounded-lg my-4  h-[100%]">
            <p className="italic text-blue-500">
              - {data.name.first} {data.name.last}
            </p>
            <div className="italic text-gray-400 pt-3 ">
              <p className="flex space-x-1">
                <FaLocationDot />
                <span className="text-sm">{data.location.country} - {data.location.city} - {data.location.state}</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
