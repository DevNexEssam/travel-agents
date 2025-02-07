"use client";
// Import Swiper React components
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "@styles/globals.css";

// import required modules
import { Pagination } from "swiper/modules";
import CardReviews from "@components/ui/CardReviews";
import FetchReviews from "@utils/api";

export default function TestimonialSwiper() {
  const [users, setUsers] = useState([]);

  // Fetch users data from API
  useEffect(() => {
    async function getUsers() {
      try {
        const data = await FetchReviews();
        setUsers(data);
      } catch (error) {
        console.log("Error fetching users", err);
      }
    }
    getUsers();
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper container"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {users.slice(0, 9).map((item) => (
          <SwiperSlide key={item.id}>
            <CardReviews comment={item.comment} name={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
