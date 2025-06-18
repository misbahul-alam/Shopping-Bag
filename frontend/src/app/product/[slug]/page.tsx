import MainLayout from "@/components/layouts/MainLayout";
import ImageSlider from "@/components/shared/ImageSlider";
import Button from "@/components/widgets/Button";
import { fetchProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log("params", slug);
  const { products, status } = await fetchProductBySlug(slug);

  if (status !== 200 || products.images.length < 0) {
    return notFound();
  }

  return (
    <MainLayout>
      <div className="layout py-2 md:py-3 ">
        <div className="grid grid-cols-1 md:grid-cols-[450px_1fr] gap-3 md:gap-4">
          <div>
            <ImageSlider images={products.images} />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 ">
              {products.name}
            </h1>

            <div className="my-1">
              <span className="text-2xl font-semibold text-gray-800">
                ${products.selling_price}
              </span>
              <span className="text-gray-500 line-through ml-2">
                ${products.regular_price}
              </span>
            </div>
            <div>
              <p className="text-gray-600 font-medium">
                Category:{" "}
                <span className="text-blue-600">{products.category.name}</span>
              </p>
            </div>
            <div className="hidden md:block text-gray-600 font-lg">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur, incidunt sapiente. In voluptatum velit animi odio
                delectus, autem quos id, reprehenderit eligendi mollitia quo,
                sit quis sint! Mollitia, repudiandae illum?
              </p>
            </div>
            <div className="flex gap-2">
              {/* <div className="flex items-center gap-2 mb-3 border-primary border h-12 rounded-md w-20">
                <button>-</button>
                <input
                  type="number"
                  value={0}
                  className="w-full h-full bg-center text-center text-xl font-medium text-gray-800"
                />
                <button>+</button>
              </div> */}
              <Button label="Add to Cart" />
            </div>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime
          voluptates iure et cum fugiat hic impedit temporibus dolores est, ea
          culpa. Rem, explicabo? Labore aliquam quisquam voluptatum error eius
          velit expedita deleniti incidunt excepturi praesentium, ut modi dolore
          perspiciatis aut accusamus totam laborum natus nesciunt tempora ipsum
          nulla id?
        </div>
      </div>
    </MainLayout>
  );
}
