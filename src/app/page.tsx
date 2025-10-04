import { LoadingButton } from "@/components/LoadingButton";
import ModeToggle from "@/components/mode-toggle";
import { Navigation } from "@/components/Navigation";
import { baseUrl } from "@/lib/getBaseUrl";
import Image from "next/image";

export default async function Home() {
  const url = `${baseUrl}/api/products`;

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();

  return (
    <main className="flex flex-col lg:flex-row min-h-screen items-center justify-between w-screen max-w-7xl mx-auto">
      <header className="lg:w-2/3 p-1  flex flex-col bg-custom-default lg:h-screen max-w-7xl">
        <div className="lg:h-full h-[90vh] lg:pl-16 flex flex-col items-start pt-2 px-2 lg:pt-0 lg:justify-center text-left gap-4">
          <h1 className="lg:ml-2 mt-20 font-bold lg:text-6xl text-4xl tracking-wider lg:leading-16">
            <div className="text-sm font-light hover:font-bold cursor-pointer">
              fewd2u
            </div>
            The best way to find and <br /> enjoy food.
          </h1>
          <div className="lg:text-2xl lg:mt-2 text-gray-700 lg:leading-7">
            Enjoy your favorite meals from the best restaurants in town,
            delivered to your doorstep.
          </div>
          <div className="lg:mt-4 lg:mb-6 flex gap-4">
            <LoadingButton
              type="button"
              variant="default"
              text="Explore Food"
              destination="/home"
            />
            <LoadingButton
              type="button"
              variant="outline"
              text="Go To Admin"
              destination="/admin"
            />
            <ModeToggle toggle />
          </div>
          <div className="flex mt-4 space-x-4 lg:w-108 lg:h-48 h-32 overflow-x-auto">
            {data
              ? data.map((product: any) => (
                  <Image
                    key={product.id}
                    src={product.mainImageUrl}
                    alt="Hero Image"
                    width={110}
                    height={100}
                    sizes="small"
                    className="rounded-lg shadow-lg object-cover !w-30"
                  />
                ))
              : null}
          </div>
          <div className="mt-0 text-gray-600">
            Over 10,000+ dishes to choose from.
          </div>
        </div>
      </header>

      <div className="relative w-screen lg:w-1/2 h-screen">
        <Image
          src="/products/wallpaper-product-2.jpg"
          alt="Background"
          fill
          sizes="small"
          className="object-cover object-center h-auto"
          priority
        />
        <div className="relative z-10 flex flex-col w-full items-end h-full p-2">
          <Navigation />
          <div className="text-4xl leading-12 w-full font-bold h-full flex justify-center items-center mb-40 drop-shadow-lg !text-white text-center shadow-lg">
            Delicious food, <br />
            brings people together.
          </div>
        </div>
      </div>
    </main>
  );
}
