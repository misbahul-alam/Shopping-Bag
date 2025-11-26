"use client";

import { useUIStore } from "@/store/useUIStore";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { MdShop } from "react-icons/md";

export default function Drawer() {
  const { isDrawerOpen, closeDrawer } = useUIStore();
  return (
    <>
      <div
        className={
          isDrawerOpen
            ? "top-0 bottom-0 left-0 right-0 fixed bg-black/20 z-50"
            : "top-0 bottom-0 left-0 right-0 fixed bg-black/20 z-50 hidden"
        }
        onClick={closeDrawer}
      ></div>

      <div
        className={
          isDrawerOpen
            ? "top-0 bottom-0 left-0 w-[85vw] max-w-[300px] fixed z-50 bg-white transition-all"
            : "top-0 bottom-0 -left-[85vw] w-[85vw] max-w-[300px] fixed z-50 bg-white transition-all"
        }
      >
        <div className="h-14 shadow-xs flex items-center justify-between px-[5%]">
          <div className="flex items-center gap-1 ">
            <MdShop className="text-3xl mb-1.5 text-green-500" />
            <h1 className="text-2xl font-semibold text-green-500 uppercase">
              Shopping<span className="text-gray-800 font-bold">Bag</span>
            </h1>
          </div>
          <button onClick={closeDrawer}>
            <IoClose className="text-2xl text-gray-800 " />
          </button>
        </div>
        <div>
          <ul>
            <li>
              <Link
                href={"/"}
                onClick={closeDrawer}
                className="text-lg px-4 py-2 block  font-medium text-gray-700 transition-all leading-snug"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/shop"}
                onClick={closeDrawer}
                className="text-lg px-4 py-2 block  font-medium text-gray-700 transition-all leading-snug"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                onClick={closeDrawer}
                className="text-lg px-4 py-2 block  font-medium text-gray-700 transition-all leading-snug"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href={"/login"}
                onClick={closeDrawer}
                className="text-lg px-4 py-2 block  font-medium text-gray-700 transition-all leading-snug"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href={"/register"}
                onClick={closeDrawer}
                className="text-lg px-4 py-2 block  font-medium text-gray-700 transition-all leading-snug"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
