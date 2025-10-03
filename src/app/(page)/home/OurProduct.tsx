import Image from "next/image";
import { baseUrl } from "@/lib/getBaseUrl";
import ProductImageRender from "./ProductImageRender";

const OurProduct = async () => {
  const products = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
  })
    .then((res) => res.json())
    .catch(() => null);

  console.log("products (Server Component):", products);
  return (
    <>
      <div className="w-full text-center min-h-screen py-10">
        <h2 className="text-2xl font-bold">FROM OUR KITCHEN</h2>
        <p className="text-gray-600 text-sm px-4 mt-2 max-w-lg mx-auto">
          From classic recipes to modern favorites, taste the love and effort in
          every bite prepared in our kitchen.
        </p>
        <ProductImageRender products={products} />
      </div>
    </>
  );
};
export default OurProduct;
