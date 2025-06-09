"use server";
import axios from "./axios";
import { Category } from "./categories";

export interface Product {
  id: string;
  name: string;
  slug: string;
  images: { url: string }[];
  category: Category;
  regular_price: number;
  selling_price: number;
}
interface ProductResponse {
  data: Product[];
  limit: number;
  page: number;
  total: number;
  total_page: number;
}
export interface PaginationInterface {
  limit?: number;
  page?: number;
}
export const fetchAllProducts = async ({
  limit = 10,
  page = 1,
}: PaginationInterface) => {
  try {
    const response = await axios.get("/products", { params: { limit, page } });
    console.log("response", response.data);
    if (response.status === 200) {
      const products = response.data as ProductResponse;
      return {
        products: products.data,
        limit: products.limit,
        page: products.page,
        total: products.total,
        total_page: products.total_page,
        message: "Products fetched successfully",
      };
    }
    return { products: [], message: "No products found" };
  } catch (error) {
    return { products: [], message: "Something went wrong!" };
  }
};

export const fetchProductById = async (id: string) => {
  try {
    const response = await axios.get("/products/" + id);
    if (response.status === 200) {
      return {
        ...(response.data as Product),
        message: "Products fetched successfully",
      };
    }
    return { products: [], message: "No categories found" };
  } catch (error) {
    return { products: [], message: "Something went wrong!" };
  }
};

export const deleteProductsById = async (id: string) => {
  try {
    const response = await axios.delete("/products/" + id);
    if (response.status === 200) {
      return {
        message: "Products deleted successfully",
      };
    }
    return { products: [], message: "No categories found" };
  } catch (error) {
    return { products: [], message: "Something went wrong!" };
  }
};
