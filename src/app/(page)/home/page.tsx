import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import FeatureSection from "./Feature";
import OurProduct from "./OurProduct";
import ServiceSection from "./ServiceSection";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div>
      {/* first section */}
      <FeatureSection />
      <OurProduct />
      <ServiceSection />
      <div className="relative">
        <div className="w-full text-center lg:h-[40vh] h-[60vh] py-10">
          <Image
            src="/products/wallpaper-product-2.jpg"
            alt="Contact Us"
            fill
            className=" opacity-10 pt-48 lg:pt-0 object-cover object-center"
          />
          <div className="relative z-20 lg:top-20 top-50">
            <h2 className="text-2xl z-20 top-0 font-bold">Contact Us!</h2>
            <p className="text-gray-600 text-sm px-4 mt-2 max-w-lg mx-auto">
              From classic recipes to modern favorites, taste the love and
              effort in every bite prepared in our kitchen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
