import React, { ReactNode } from "react";
import Link from "next/link";
import AdminMenu from "./AdminMenu";
import { FiMenu } from "react-icons/fi";
import { Toaster } from "react-hot-toast";

type LayoutProps = {
  children: ReactNode;
};

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Toaster />
      <div className="h-14 bg-white border-b border-gray-200 w-full z-50 top-0 sticky flex items-center justify-between px-4">
        <Link
          href="/admin"
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
        <label htmlFor="admin-drawer" className="md:hidden">
          <FiMenu className="text-2xl" />
        </label>
      </div>
      <div className="drawer md:drawer-open bg-gray-50">
        <input id="admin-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <main className="px-3 py-2 ">{children}</main>
        </div>
        <div className="drawer-side top-14 border-r border-gray-200">
          <label
            htmlFor="admin-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className=" bg-white text-base-content h-full w-80 ">
            <AdminMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
