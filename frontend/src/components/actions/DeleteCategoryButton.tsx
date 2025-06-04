"use client";
import { deleteCategoryById } from "@/lib/categories";
import { useRouter } from "next/navigation";
import React from "react";
import { FiTrash } from "react-icons/fi";

export default function DeleteCategoryButton({ id }: { id: string }) {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteCategoryById(id);
    router.refresh();
  };
  return (
    <button
      className="p-2 bg-red-50 rounded-md hover:bg-red-100 transition-all cursor-pointer text-red-500"
      onClick={handleDelete}
      aria-label="Delete"
    >
      <FiTrash className="text-lg" />
    </button>
  );
}
