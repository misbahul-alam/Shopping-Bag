"use client";
import { useUIStore } from "@/store/useUIStore";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuCircleUserRound, LuMenu } from "react-icons/lu";
import { MdSearch, MdShop } from "react-icons/md";

export default function Header() {
  const { toggleDrawer } = useUIStore();
  return (
    <div className="h-22 top-0 sticky z-40">
      <div className="bg-green-500 h-8 flex justify-center items-center text-white">
        <p>Get 25% off your first order!</p>
      </div>
      <div className="h-14 shadow-xs border-b border-gray-50 flex items-center justify-between px-[5%] backdrop-blur-sm bg-[#FFFFFFCC]">
        <div className="flex  items-center gap-6">
          <Link href="/" className="flex items-center gap-1">
            <MdShop className="text-3xl mb-1.5 text-green-500" />
            <h1 className="text-2xl font-semibold text-green-500 uppercase">
              Shopping<span className="text-gray-800 font-bold">Bag</span>
            </h1>
          </Link>
          <div className="hidden md:block">
            <ul className="flex gap-2">
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-600 hover:text-green-500 transition-all leading-snug"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href=""
                  className="text-base text-gray-600 hover:text-green-500 transition-all leading-snug"
                >
                  Offers
                </a>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-base text-gray-600 hover:text-green-500 transition-all leading-snug"
                >
                  Shop
                </Link>
              </li>
              <li>
                <a
                  href=""
                  className="text-base text-gray-600 hover:text-green-500 transition-all leading-snug"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-base text-gray-600 hover:text-green-500 transition-all leading-snug"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-6 ">
          <div className="bg-gray-100 rounded-md px-2 py-1 h-10 hidden md:block">
            <MdSearch className="text-2xl text-gray-600 inline-block mr-2 cursor-pointer" />
            <input
              type="text"
              placeholder="Search here.."
              className="outline-none h-full bg-transparent"
            />
          </div>
          <div className="flex gap-3">
            <HiOutlineShoppingBag className="text-2xl text-gray-800 cursor-pointer" />
            <LuCircleUserRound className="text-2xl text-gray-800 hidden md:block" />
            <LuMenu
              className="text-2xl text-gray-800 md:hidden"
              onClick={toggleDrawer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
