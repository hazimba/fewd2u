import { ProductCard } from "@/app/admin/(product)/ProductCard";
import { baseUrl } from "@/lib/getBaseUrl";
import { Employee } from "@/types";
import FeatureSection from "./Feature";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const url = `${baseUrl}/api/users`;
  console.log("Fetching:", url);
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  const users: Employee[] = await res.json();

  console.log("Users (Server Component):", users);

  const product = await fetch(`${baseUrl}/api/products`, { cache: "no-store" })
    .then((res) => res.json())
    .catch(() => null);

  console.log("Product (Server Component):", product);

  return (
    <div>
      {/* first section */}
      <FeatureSection />
      <div className="h-screen w-full flex flex-col items-center">
        <div className="flex flex-col items-center space-y-2 mb-8 px-6 text-center">
          <h2 className="text-2xl font-bold">FROM OUR KITCHEN</h2>
          <p className="text-gray-600 text-sm">
            From classic recipes to modern favorites, taste the love and effort
            in every bite prepared in our kitchen.
          </p>
        </div>
        <div className="w-full flex justify-center items-center p-4">
          {product && <ProductCard products={product} homepage />}
        </div>
      </div>
      <FeatureSection />
    </div>
  );
}
