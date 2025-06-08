import DeleteProductButton from "@/components/actions/DeleteProductButton";
import { fetchAllProducts } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FiEdit3, FiEye, FiTrash } from "react-icons/fi";

export default async function page() {
  const { products } = await fetchAllProducts();
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-lg tracking-wide">Products</h2>
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href={"/admin"}>Admin</Link>
            </li>
            <li>Products</li>
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
                  <Link href={"/admin/products/add"}>
                    <button className="text-sm rounded-sm shadow-sm cursor-pointer bg-blue-500 text-gray-100 px-3 py-1.5 flex gap-2 items-center font-lg">
                      <FaPlus />
                      <span> Add Product</span>
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
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2 text-start text-xs font-medium text-gray-500 uppercase "
                        >
                          Price
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
                      {products.map((product, index) => {
                        return (
                          <tr key={index}>
                            <td className="px-4 py-1 text-sm font-medium text-gray-800 flex items-center gap-2  w-full max-w-[80vw] md:max-w-[40vw] ">
                              <Image
                                src={
                                  product.images.length != 0
                                    ? product?.images[0]?.url
                                    : "https://nexus.daisyui.com/images/apps/ecommerce/products/2.jpg"
                                }
                                width={50}
                                height={50}
                                alt="Image"
                                className="h-10 w-10 object-cover object-center shadow-sm rounded-sm"
                              />
                              <span className="line-clamp-2 ">
                                {product.name}
                              </span>
                            </td>
                            <td className="px-4 py-1 whitespace-nowrap text-sm text-gray-800 ">
                              {product?.category?.name || "Uncategorized"}
                            </td>
                            <td className="px-4 py-1 whitespace-nowrap text-sm text-gray-800 ">
                              $95.68
                            </td>
                            <td className="px-4 py-1 whitespace-nowrap text-end text-sm font-medium flex gap-2 justify-end items-center">
                              <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-all cursor-pointer">
                                <FiEye className="text-lg" />
                              </button>
                              <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-all cursor-pointer">
                                <FiEdit3 className="text-lg" />
                              </button>

                              <DeleteProductButton id={product.id} />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="py-1 px-4">
                  <div className="join ">
                    <button className="join-item btn bg-white">1</button>
                    <button className="join-item btn  btn-active">2</button>
                    <button className="join-item btn bg-white">3</button>
                    <button className="join-item btn bg-white">4</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
