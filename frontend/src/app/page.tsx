import MainLayout from "@/components/layouts/MainLayout";
import ShoppingBag from "@/images/shopping-bags.svg";
import Image from "next/image";
export default function Home() {
  return (
    <MainLayout>
      <section className="layout min-height screen-height flex justify-between gap-3 items-center ">
        <div>
          <h1 className="text-3xl text-gray-900 font-semibold mb-4 leading-snug">
            Everything You Need.
            <br />
            Nothing You Don’t.
          </h1>
          <p className="text-gray-700 mb-6">
            Discover carefully curated products that elevate your everyday —
            quality essentials, thoughtful design, and seamless shopping in one
            clean experience.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
        </div>
        <div>
          <Image
            src={ShoppingBag}
            alt="Hero Image"
            className="h-full max-h-96"
          />
        </div>
      </section>
      <section></section>
    </MainLayout>
  );
}
