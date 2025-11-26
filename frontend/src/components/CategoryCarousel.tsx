"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const data = [...Array(20).keys()].map((n) => n + 1);

export default function CategoryCarousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  return (
    <section className="mt-8 overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {data.map((value, index) => (
          <div
            className="group relative overflow-hidden cursor-pointer shrink-0 rounded-md w-[47%] sm:w-[28%] lg:w-[20%] xl:w-[16%] aspect-4/3 bg-neutral-100 shadow-sm hover:shadow-md transition-all duration-300"
            key={index}
          >
            <Image
              src="https://i.pcmag.com/imagery/roundups/018cwxjHcVMwiaDIpTnZJ8H-60..v1708542714.jpg"
              alt="category"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              width={300}
              height={200}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

            <div className="absolute bottom-0 left-0 right-0 p-4 pb-5">
              <h3 className="text-white font-medium text-base leading-tight tracking-wide drop-shadow-sm">
                Category Name
              </h3>
              <p className="text-white/70 text-xs mt-0.5">50 items</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
