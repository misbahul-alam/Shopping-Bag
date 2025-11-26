"use client";
import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import { useState, useCallback, useMemo } from "react";
import { MdVerified } from "react-icons/md";
import HeroImage from "@/images/hero.svg";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/common/ProductCard";
import { useParams } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

// Mock data - replace with actual API call
const getProductData = (slug: string) => ({
  id: 1,
  name: "Premium Wireless Headphones",
  slug,
  price: 299.99,
  originalPrice: 399.99,
  discount: 25,
  rating: 4.5,
  reviewCount: 248,
  inStock: true,
  stockCount: 23,
  description:
    "Experience premium sound quality with our flagship wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.",
  images: [HeroImage, HeroImage, HeroImage, HeroImage],
  colors: ["Black", "Silver", "Blue", "Rose Gold"],
  sizes: ["One Size"],
  features: [
    "Active Noise Cancellation",
    "30-hour battery life",
    "Quick charge: 5 min = 2 hours",
    "Premium comfort padding",
    "Bluetooth 5.2",
    "Multi-device connectivity",
  ],
  specifications: {
    Brand: "ShoppingBag Premium",
    Model: "SB-WH1000",
    Weight: "250g",
    Battery: "30 hours",
    Connectivity: "Bluetooth 5.2",
    Warranty: "2 years",
  },
});

const relatedProducts = [1, 2, 3, 4];

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const product = getProductData(params.slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );

  const handleQuantityChange = useCallback(
    (type: "increase" | "decrease") => {
      if (type === "increase" && quantity < product.stockCount) {
        setQuantity((prev) => prev + 1);
      } else if (type === "decrease" && quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    },
    [quantity, product.stockCount]
  );

  return (
    <MainLayout>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl py-6 md:py-10">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-neutral-600 mb-4 md:mb-6">
          <a href="/" className="hover:text-neutral-900">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/shop" className="hover:text-neutral-900">
            Shop
          </a>
          <span className="mx-2">/</span>
          <span className="text-neutral-900 font-medium">{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Image Gallery */}
          <div className="space-y-3">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden bg-neutral-50">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                quality={85}
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden transition ${
                    selectedImage === index
                      ? "opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 20vw, 10vw"
                    quality={75}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-5 md:space-y-6">
            {/* Title & Rating */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-normal text-neutral-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 text-sm text-neutral-500">
                <span>{product.rating} ★</span>
                <span>·</span>
                <span>{product.reviewCount} reviews</span>
                {product.inStock && (
                  <>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-green-600">
                      <MdVerified />
                      In Stock
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-normal text-neutral-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-neutral-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div>
              <p className="text-sm text-neutral-500 mb-2">{selectedColor}</p>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-sm transition ${
                      selectedColor === color
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-sm text-neutral-500 mb-2">Quantity</p>
              <div className="flex items-center gap-0 bg-neutral-100 w-fit">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="px-4 py-2 hover:bg-neutral-200 transition"
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="px-6 py-2 text-sm">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="px-4 py-2 hover:bg-neutral-200 transition"
                  disabled={quantity >= product.stockCount}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="pt-4">
              <Button label="Add to Card" />
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-12 md:mb-16">
          {/* Tab Headers */}
          <div className="border-b border-neutral-200 mb-8">
            <div className="flex gap-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab("description")}
                className={`pb-3 text-sm whitespace-nowrap transition ${
                  activeTab === "description"
                    ? "text-neutral-900 border-b border-neutral-900"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`pb-3 text-sm whitespace-nowrap transition ${
                  activeTab === "reviews"
                    ? "text-neutral-900 border-b border-neutral-900"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                Reviews
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl">
            {activeTab === "description" ? (
              <div
                className="prose prose-sm prose-neutral max-w-none"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            ) : (
              <div className="space-y-8">
                <div className="pb-6 border-b border-neutral-200">
                  <div className="text-2xl text-neutral-900 mb-1">
                    {product.rating} ★
                  </div>
                  <p className="text-sm text-neutral-500">
                    {product.reviewCount} reviews
                  </p>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-8">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-neutral-900">
                          John Doe
                        </span>
                        <span className="text-xs text-neutral-400">
                          2 days ago
                        </span>
                      </div>
                      <div className="text-sm text-neutral-400">★★★★★</div>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        Amazing product! The sound quality is exceptional and
                        the noise cancellation works perfectly. Battery life is
                        exactly as advertised. Highly recommended!
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-xl font-normal text-neutral-900 mb-6">
            You may also like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <ProductCard key={item} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
