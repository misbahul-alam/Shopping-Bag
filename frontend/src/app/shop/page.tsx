import MainLayout from "@/components/layouts/MainLayout";
import ProductCard from "@/components/shared/ProductCard";
import { fetchAllProducts } from "@/lib/products";
import React from "react";

export default async function Shop() {
  const { products } = await fetchAllProducts({
    limit: 20,
    page: 1,
  });
  return (
    <MainLayout>
      <div className="layout">
        <h2 className="text-xl mb-3 mt-2 font-medium text-gray-800">
          All Product
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
