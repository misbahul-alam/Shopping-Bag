import DeleteCategoryButton from "@/components/actions/DeleteCategoryButton";
import { fetchAllCategories } from "@/lib/categories";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FiEdit3, FiEye } from "react-icons/fi";

export default async function page() {
  const { categories } = await fetchAllCategories();
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-lg tracking-wide">Categories</h2>
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href={"/admin"}>Admin</Link>
            </li>
            <li>Categories</li>
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
                  <Link href={"/admin/categories/add"}>
                    <button className="text-sm rounded-sm shadow-sm cursor-pointer bg-blue-600 text-white px-3 py-1.5 flex gap-2 items-center font-lg">
                      <FaPlus />
                      <span> Add Category</span>
                    </button>
                  </Link>
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
                          Slug
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2 text-start text-xs font-medium text-gray-500 uppercase "
                        >
                          Product
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
                      {categories.map((category, index) => {
                        return (
                          <tr key={index}>
                            <td className="px-4 py-1 text-sm font-medium text-gray-800 flex items-center gap-2 ">
                              <Image
                                src={category.image}
                                alt="Image"
                                width={100}
                                height={100}
                                className="h-10 w-10 object-cover object-center shadow-sm rounded-sm"
                              />
                              <span className="line-clamp-2 ">
                                {category.name}
                              </span>
                            </td>
                            <td className="px-4 py-1 whitespace-nowrap text-sm text-gray-800 ">
                              {category.slug}
                            </td>
                            <td className="px-4 py-1 whitespace-nowrap text-sm text-gray-800 ">
                              268
                            </td>
                            <td className="px-4 py-1 whitespace-nowrap text-end text-sm font-medium flex gap-2 justify-end items-center">
                              <button
                                className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-all cursor-pointer"
                                aria-label="View"
                              >
                                <FiEye className="text-lg" />
                              </button>
                              <button
                                className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-all cursor-pointer"
                                aria-label="Edit"
                              >
                                <FiEdit3 className="text-lg" />
                              </button>

                              <DeleteCategoryButton id={category.id} />
                            </td>
                          </tr>
                        );
                      })}
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
