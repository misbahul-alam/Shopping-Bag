"use client";
import { useUIStore } from "@/store/useUIStore";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoCartSharp } from "react-icons/io5";

export default function Header() {
  const { toggleDrawer, toggleCart } = useUIStore();
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="layout h-8 w-full border-b border-gray-100 md:flex items-center justify-between bg-blue-600 hidden">
        <p className="text-gray-200 text-xs font-medium">
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </p>
        <ul className="flex gap-4 items-center">
          <li className="flex items-center">
            <a href="" className="text-gray-200 text-xs ">
              About Us
            </a>
          </li>
          <li className="flex items-center">
            <a href="" className="text-gray-200 text-xs ">
              Contact Us
            </a>
          </li>
          <li className="flex items-center">
            <a href="" className="text-gray-200 text-xs ">
              Order Tracking
            </a>
          </li>
        </ul>
      </div>
      <div className="layout h-14 w-full border-b border-gray-100 flex items-center justify-between">
        <div className="flex gap-6">
          <Link
            href="/"
            scroll={false}
            className="flex items-center gap-2 uppercase font-medium text-4xl"
          >
            <img
              src="https://flowbite.com/images/logo.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
            <h1 className="text-blue-600 text-2xl font-bold">
              Shopping<span className="text-gray-950 font-semibold">Bag</span>
            </h1>
          </Link>
          <ul className="md:flex items-center hidden">
            <li className="flex items-center">
              <Link
                href="/"
                scroll={false}
                className="text-[17px] font-medium text-gray-700 px-2 hover:text-gray-950 transition-all"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="/shop"
                scroll={false}
                className="text-[17px] font-medium text-gray-700 px-2 hover:text-gray-950 transition-all"
              >
                Shop
              </Link>
            </li>
            <li className="flex items-center">
              <a
                href=""
                className="text-[17px] font-medium text-gray-700 px-2 hover:text-gray-950 transition-all"
              >
                Categories
              </a>
            </li>
            <li className="flex items-center">
              <Link
                href="/login"
                scroll={false}
                className="text-[17px] font-medium text-gray-700 px-2 hover:text-gray-950 transition-all"
              >
                Login
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="/register"
                scroll={false}
                className="text-[17px] font-medium text-gray-700 px-2 hover:text-gray-950 transition-all"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 md:min-w-md justify-end">
          <form className="md:flex items-center bg-gray-100 rounded-md h-10 max-w-md w-full hidden">
            <input
              type="text"
              placeholder="Search proudcts.."
              className="border-none outline-none px-4 w-full h-full"
            />
            <button className="pr-3 cursor-pointer">
              <FiSearch className="text-gray-600 text-xl" />
            </button>
          </form>
          <div className="flex items-center gap-4">
            <button className="cursor-pointer" onClick={toggleCart}>
              <IoCartSharp className="text-2xl text-gray-800" />
            </button>
            <button className="cursor-pointer hidden md:flex">
              <HiMiniUserCircle className="text-2xl text-gray-800" />
            </button>

            <button className="cursor-pointer md:hidden" onClick={toggleDrawer}>
              <HiMenu className="text-2xl text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
