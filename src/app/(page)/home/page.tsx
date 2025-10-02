import { baseUrl } from "@/lib/getBaseUrl";
import { Employee } from "@/types";
import Image from "next/image";

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

  return (
    <div>
      <div className="bg-custom-default min-h-screen w-1/2 lg:p-8 p-4 w-screen flex flex-col max-w-7xl ">
        <div className="lg:flex w-full">
          <Image
            src="/products/wallpaper-product-2.jpg"
            alt="Background"
            fill
            className="object-cover opacity-10 relative !h-124 z-0"
          />
          <div className="relative z-10 !w-1/2 text-gray-800 dark:text-gray-200">
            <Image
              src="/products/wallpaper-product.jpg"
              alt="Hero Image"
              width={500}
              height={800}
              className="lg:h-108 hidden lg:block rounded-lg shadow-lg z-10 object-cover object-bottom"
            />
          </div>
          <div className="flex lg:w-1/2 lg:pt-12 flex-col justify-center h-1/2 lg:ml-8 relative z-10 text-gray-800 dark:text-gray-200">
            {/* Additional content can go here */}
            <p>Feature this week</p>
            <div className="font-bold lg:text-4xl text-xl tracking-wide lg:leading-12">
              Easy Weeknight Recipe to Make Dinner a Breeze
            </div>
            <div className="lg:mt-6 text-gray-600 dark:text-gray-300 lg:text-lg text-xs mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id minus
              earum eum sequi, dolores expedita necessitatibus assumenda omnis,
              dicta culpa ipsum maiores atque explicabo soluta sed sint
              exercitationem laborum quidem.
            </div>
            <div className="relative lg:hidden pt-6 z-10 text-gray-800 dark:text-gray-200">
              <Image
                src="/products/wallpaper-product.jpg"
                alt="Hero Image"
                width={500}
                height={800}
                className="h-64 lg:hidden rounded-lg shadow-lg z-10 object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom-default h-screen">123</div>
    </div>
  );
}
