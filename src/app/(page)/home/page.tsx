import Image from "next/image";
import FeatureSection from "./Feature";
// import OurProduct from "./OurProduct";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  })
    .then((res) => res.json())
    .catch(() => null);

  console.log("products (Server Component):", products);

  return (
    <div>
      {/* first section */}
      <FeatureSection />
      <div className="w-full text-center min-h-screen py-10">
        <h2 className="text-2xl font-bold">FROM OUR KITCHEN</h2>
        <p className="text-gray-600 text-sm px-4 mt-2 max-w-lg mx-auto">
          From classic recipes to modern favorites, taste the love and effort in
          every bite prepared in our kitchen.
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 pt-12">
          {products
            ? products.map((product: any) => (
                <div key={product.id} className="relative group cursor-pointer">
                  <Image
                    src={product.mainImageUrl}
                    alt={product.name}
                    height={100}
                    width={500}
                    className="object-cover opacity-40 group-hover:opacity-100 lg:!h-50 h-20 w-full transition duration-300"
                  />

                  {/* Overlay text */}
                  <div className="absolute flex flex-col inset-0 flex items-center justify-center bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-black shadow-2xl p-1 font-bold text-2xl font-semibold px-2 text-center">
                      {product.name}
                    </span>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      {/* <OurProduct /> */}
      {/* <FeatureSection /> */}
    </div>
  );
}
