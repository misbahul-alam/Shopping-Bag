"use server";
import axios from "./axios";
import { PaginationInterface } from "./products";

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
}
interface UserResponse {
  data: User[];
  meta: { limit: number; page: number; total: number; total_page: number };
}

export const fetchAllUsers = async ({
  limit = 10,
  page = 1,
}: PaginationInterface) => {
  try {
    const response = await axios.get("/users/all", { params: { limit, page } });
    console.log("response", response.data);
    if (response.status === 200) {
      const users = response.data as UserResponse;
      return {
        users: users.data,
        limit: users.meta.limit,
        page: users.meta.page,
        total: users.meta.total,
        total_page: users.meta.total_page,
        message: "Users fetched successfully",
      };
    }
    return { users: [], message: "No users found" };
  } catch (error) {
    return { users: [], message: "Something went wrong!" };
  }
};
