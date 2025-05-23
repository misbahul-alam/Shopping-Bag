"use client";
import { useMemo, useState } from "react";
import Button from "@/components/widgets/Button";
import TextArea from "@/components/widgets/TextArea";
import TextField from "@/components/widgets/TextField";
import Link from "next/link";
import React from "react";
import { BiDollar } from "react-icons/bi";
import {
  MdCategory,
  MdDescription,
  MdOutlineAlternateEmail,
  MdSubtitles,
} from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

export default function page() {
  const [images, setImages] = useState<File[]>([]);

  const handleChangeImages = (e: FileList | null) => {
    if (!e) return;
    const imagesList = [];
    for (let i = 0; i < e.length; i++) {
      imagesList.push(e[i]);
    }
    setImages([...images, ...imagesList]);
  };

  const handleRemoveImages = (value: File) => {
    const newImage = images.filter((val) => val !== value);
    setImages(newImage);
  };

  const imagePreviews = useMemo(() => {
    return images.map((image) => ({
      file: image,
      preview: URL.createObjectURL(image),
    }));
  }, [images]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-lg tracking-wide">Add Product</h2>
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href={"/admin"}>Admin</Link>
            </li>
            <li>
              <Link href={"/admin/products"}>Products</Link>
            </li>
            <li>Add</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
        <div className="bg-white rounded-sm shadow-sm px-4 py-2 space-y-2">
          <h2 className="text-lg font-medium text-gray-700">
            Basic Information
          </h2>
          <TextField
            label="Name"
            name="name"
            icon={<MdSubtitles />}
            className="rounded-sm"
          />
          <TextField
            label="Category"
            name="name"
            icon={<MdCategory />}
            className="rounded-sm"
          />
          <TextArea
            label="Description"
            name="name"
            icon={<MdDescription />}
            className="rounded-sm"
          />
        </div>
        <div className="bg-white rounded-sm shadow-sm px-4 py-2 space-y-2">
          <h2 className="text-lg font-medium text-gray-700">Pricing</h2>
          <TextField
            label="Regular Price"
            name="regular_price"
            icon={<BiDollar />}
            className="rounded-sm"
          />
          <TextField
            label="Selling Price"
            name="selling_price"
            icon={<BiDollar />}
            className="rounded-sm"
          />
        </div>
        <div className="bg-white rounded-sm shadow-sm px-4 py-2 space-y-2">
          <h2 className="text-lg font-medium text-gray-700">SEO</h2>
          <TextField
            label="Slug"
            name="slug"
            icon={<MdOutlineAlternateEmail />}
            className="rounded-sm"
          />
        </div>
        <div className="bg-white rounded-sm shadow-sm px-4 py-2 space-y-2">
          <h2 className="text-lg font-medium text-gray-700">Upload Image</h2>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => handleChangeImages(e.target.files)}
            multiple
            hidden
          />
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
            {imagePreviews.map((image, index) => {
              return (
                <div key={index} className="relative">
                  <img
                    key={index}
                    src={image.preview}
                    alt="product"
                    className="w-full h-full aspect-square object-cover rounded-sm shadow-sm"
                  />

                  <button className="p-1 bg-red-50/50 rounded-md  transition-all cursor-pointer text-red-500 absolute top-1 right-1">
                    <FiTrash
                      className="text-lg"
                      onClick={() => handleRemoveImages(image.file)}
                    />
                  </button>
                </div>
              );
            })}
            <label
              className="h-full w-full aspect-square flex items-center justify-center bg-gray-100 rounded-sm shadow-sm flex-col cursor-pointer"
              htmlFor="image"
            >
              <GoPlus className="text-5xl text-gray-500" />
              <p className="text-sm text-gray-500">Add Image</p>
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Link href={"/admin/products"}>
            <Button
              className="bg-slate-200 text-gray-800 rounded-sm "
              label="Cancel"
            />
          </Link>
          <Button className="rounded-sm shadow-sm " label="Add Product" />
        </div>
      </div>
    </div>
  );
}
