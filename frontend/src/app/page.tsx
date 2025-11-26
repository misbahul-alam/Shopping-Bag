import CategoryCarousel from "@/components/CategoryCarousel";
import ProductCard from "@/components/common/ProductCard";
import MainLayout from "@/components/layout/MainLayout";
import HeroImage from "@/images/hero.svg";
import Image from "next/image";

export default function page() {
  return (
    <MainLayout>
      <section className="w-full bg-green-200 h-full px-12 py-12 rounded-md mt-3">
        <div className="flex lg:flex-row flex-col-reverse gap-12 lg:gap-0 items-center lg:mt-3">
          <div>
            <h1 className="text-3xl text-gray-900 font-semibold mb-4 leading-snug">
              Everything You Need.
              <br />
              Nothing You Don’t.
            </h1>
            <p className="text-gray-700 mb-6">
              Discover carefully curated products that elevate your everyday —
              quality essentials, thoughtful design, and seamless shopping in
              one clean experience.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">
              Shop Now
            </button>
          </div>
          <Image alt="image" className="w-full max-h-96" src={HeroImage} />
        </div>
      </section>
      <CategoryCarousel />
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {[...Array(10)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">New Arrivals</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {[...Array(10)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Best Sellers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {[...Array(10)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Customer Favorites</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {[...Array(10)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
