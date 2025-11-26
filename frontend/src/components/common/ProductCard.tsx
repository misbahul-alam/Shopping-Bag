import Image from "next/image";

export default function () {
  return (
    <div className="group bg-white rounded-md overflow-hidden border border-neutral-100 shadow-sm transition-all duration-300">
      <div className="aspect-square overflow-hidden cursor-pointer">
        <Image
          src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
          alt="Product"
          className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
          width={500}
          height={500}
        />
      </div>

      <div className="px-3 pt-2 pb-4">
        <p className="text-green-500 text-xs bg-green-100 px-2 py-1 rounded-sm inline-block mb-2">
          Camera
        </p>

        <h3 className="text-lg font-semibold text-gray-700 leading-tight line-clamp-2">
          Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens
        </h3>

        <div className="flex items-end-safe gap-2 mt-3">
          <p className="text-xl font-semibold text-green-600 leading-tight">
            $129
          </p>
          <p className="text-base font-medium line-through text-gray-500">
            $159
          </p>
        </div>
      </div>
    </div>
  );
}
