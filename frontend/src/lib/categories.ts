"use server";
import axios from "./axios";

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}
export const fetchAllCategories = async () => {
  try {
    const response = await axios.get("/categories");
    if (response.status === 200) {
      return {
        categories: response.data as Category[],
        message: "Categories fetched successfully",
      };
    }
    return { categories: [], message: "No categories found" };
  } catch (error) {
    return { categories: [], message: "Something went wrong!" };
  }
};

export const fetchCategoryById = async (id: string) => {
  try {
    const response = await axios.get("/categories/" + id);
    if (response.status === 200) {
      return {
        ...(response.data as Category),
        message: "Categories fetched successfully",
      };
    }
    return { categories: [], message: "No categories found" };
  } catch (error) {
    return { categories: [], message: "Something went wrong!" };
  }
};

export const createCategory = async (data: FormData) => {
  try {
    const response = await axios.post("/categories", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    });
    console.log("response", response);
    console.log(response);
    if (response.status === 201) {
      return {
        ...(response.data as Category),
        message: "Category created successfully",
      };
    }
    return { message: response.data };
  } catch (error) {
    return { message: "Something went wrong!", error };
  }
};
export const deleteCategoryById = async (id: string) => {
  try {
    const response = await axios.delete("/categories/" + id);
    if (response.status === 200) {
      return {
        message: "Categories deleted successfully",
      };
    }
    return { categories: [], message: "No categories found" };
  } catch (error) {
    return { categories: [], message: "Something went wrong!" };
  }
};
