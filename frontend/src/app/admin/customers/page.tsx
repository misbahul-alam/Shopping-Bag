import { fetchAllUsers } from "@/lib/users";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiTrash } from "react-icons/fi";

export default async function () {
  const { users, page, limit, total, total_page } = await fetchAllUsers({});
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-lg tracking-wide">Customers</h2>
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href={"/admin"}>Admin</Link>
            </li>
            <li>Customers</li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-sm shadow-sm">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="rounded-lg">
                <div className="py-3 px-4 flex justify-between items-center">
                  <div className="relative max-w-xs">
                    <label className="sr-only">Search</label>
                    <input
                      type="text"
                      name="hs-table-with-pagination-search"
                      id="hs-table-with-pagination-search"
                      className="py-1.5 sm:py-2 px-3 ps-9 block w-full border-gray-200 border outline-none shadow-2xs rounded-lg sm:text-sm "
                      placeholder="Search for items"
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                      <CiSearch className="size-4 text-gray-400 " />
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden border-b border-gray-100">
                  <table className="min-w-full divide-y divide-gray-100 ">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-2 text-start text-xs font-medium text-gray-500 uppercase "
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2 text-start text-xs font-medium text-gray-500 uppercase "
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2 text-start text-xs font-medium text-gray-500 uppercase "
                        >
                          Orders
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2 text-start text-xs font-medium text-gray-500 uppercase "
                        >
                          Register
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2 text-end text-xs font-medium text-gray-500 uppercase "
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 ">
                      {users.map((user) => (
                        <tr>
                          <td
                            className="px-4 py-1 text-sm font-medium text-gray-800 flex items-center gap-2 "
                            key={user.id}
                          >
                            <img
                              src="https://nexus.daisyui.com/images/apps/ecommerce/products/2.jpg"
                              alt="Image"
                              className="h-10 w-10 object-cover object-center shadow-sm rounded-sm"
                            />
                            <span className="line-clamp-2 ">
                              {user.first_name + " " + user.last_name}
                            </span>
                          </td>
                          <td className="px-4 py-1 whitespace-nowrap text-sm text-gray-800 ">
                            {user.email}
                          </td>
                          <td className="px-4 py-1 whitespace-nowrap text-sm text-gray-800 ">
                            15
                          </td>
                          <td className="px-4 py-1 whitespace-nowrap text-sm text-gray-800 ">
                            {user.created_at} days
                          </td>
                          <td className="px-4 py-1 whitespace-nowrap text-end text-sm font-medium flex gap-2 justify-end items-center">
                            <button className="p-2 bg-red-50 rounded-md hover:bg-red-100 transition-all cursor-pointer text-red-500">
                              <FiTrash className="text-lg" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
