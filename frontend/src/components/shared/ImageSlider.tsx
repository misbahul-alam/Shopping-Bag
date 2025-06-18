"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import { useState } from "react";
import { Thumbs } from "swiper/modules";

export default function ImageSlider({ images }: { images: { url: string }[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="space-y-2 w-full">
      {/* Main Image Swiper */}
      <Swiper
        className="border border-gray-200 rounded-md aspect-square w-full"
        grabCursor={true}
        slidesPerView={1}
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full">
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full  object-cover rounded-md shadow-sm"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        modules={[Thumbs]}
        className="h-16 w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="cursor-pointer h-16 w-16 rounded-md overflow-hidden shadow-sm"
          >
            <img
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className="h-full w-full object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
