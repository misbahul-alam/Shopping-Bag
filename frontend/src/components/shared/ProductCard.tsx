import { Product } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={"/product/" + product.slug}
      className="bg-white shadow-sm rounded-md overflow-hidden flex flex-col group"
    >
      <div className="w-full aspect-square overflow-hidden">
        <Image
          src={
            product.images.length != 0
              ? product?.images[0]?.url
              : "https://nexus.daisyui.com/images/apps/ecommerce/products/2.jpg"
          }
          alt="Product Image"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center group-hover:scale-110 transition-all"
        />
      </div>
      <div className="px-2 py-2">
        <span className="bg-blue-500 px-1  py-0.5 text-xs uppercase text-white">
          {product.category?.name || "Uncategorized"}
        </span>
        <h2 className="line-clamp-2 text-base font-medium text-gray-800">
          {product.name}
        </h2>
        <div className="mt-2 space-x-2">
          <span className="text-gray-500 text-sm line-through">
            ${product.regular_price}
          </span>
          <span className="text-gray-800 font-semibold text-lg">
            ${product.selling_price}
          </span>
        </div>
      </div>
    </Link>
  );
}
