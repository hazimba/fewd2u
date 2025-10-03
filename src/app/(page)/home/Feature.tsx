import Image from "next/image";
import { Button } from "@/components/ui/button";

// here will fetch data from api and display
// image - text (title, subtitle, desc)
const FeatureSection = () => {
  return (
    <div className="bg-custom-default min-h-screen w-1/2 lg:p-8 lg:pb-0 p-4 w-screen flex flex-col">
      <div className="lg:flex max-w-7xl mx-auto">
        <Image
          src="/products/wallpaper-product-2.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10 lg:!h-162 !h-126 z-0"
        />
        <div className=" z-10 !w-1/2 text-gray-800 dark:text-gray-200">
          <Image
            src="/products/wallpaper-product.jpg"
            alt="Hero Image"
            width={500}
            height={800}
            className="lg:h-154 hidden lg:block shadow-lg !z-30 object-cover object-bottom"
          />
        </div>
        <div className="flex lg:w-1/2 lg:pt-12 pt-8 flex-col justify-center h-1/2 lg:ml-8 z-10 text-gray-800 dark:text-gray-200">
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
          <div className="flex lg:mt-20 lg:items-start text-center items-center mt-6 space-y-6 gap-20">
            <Button className=" w-25 lg:w-40 top-3 z-20">Shop Now</Button>
            <div className="flex lg:hidden gap-4 z-30 lg:justify-start justify-center items-start">
              <Image
                src="/icon/halal-logo.jpg"
                alt="Hero Image"
                width={50}
                height={100}
                className="lg:h-30 lg:w-30 h-10 w-10 lg:block rounded-full object-cover object-bottom"
              />
              <Image
                src="/icon/iso-cert.jpg"
                alt="Hero Image"
                width={50}
                height={100}
                className="lg:h-30 lg:w-30 h-10 w-10 lg:block rounded-full object-cover object-bottom"
              />
              <Image
                src="/icon/best-seller.png"
                alt="Hero Image"
                width={50}
                height={100}
                className="lg:h-30 lg:w-30 h-10 w-10 lg:block !bg-transparent rounded-full object-cover object-bottom"
              />
            </div>
          </div>
          <div className="lg:hidden pt-6 z-10 text-gray-800 dark:text-gray-200">
            <Image
              src="/products/wallpaper-product.jpg"
              alt="Hero Image"
              width={500}
              height={800}
              className="h-72 lg:hidden rounded-lg shadow-lg !z-10 object-cover object-bottom"
            />
          </div>
        </div>
      </div>
      <div className="absolute lg:top-145 top-138 left-0 w-full z-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="top-20"></div>
          {/* icon need to make small do in another file use client useMobileDetect */}
          <div className="flex hidden lg:block lg:flex lg:justify-start justify-center gap-14">
            <Image
              src="/icon/halal-logo.jpg"
              alt="Hero Image"
              width={100}
              height={200}
              className="lg:h-30 lg:w-30 h-20 w-20 lg:block rounded-full object-cover object-bottom"
            />
            <Image
              src="/icon/iso-cert.jpg"
              alt="Hero Image"
              width={100}
              height={200}
              className="lg:h-30 lg:w-30 h-20 w-20 lg:block rounded-full object-cover object-bottom"
            />
            <Image
              src="/icon/best-seller.png"
              alt="Hero Image"
              width={100}
              height={200}
              className="lg:h-30 lg:w-30 h-20 w-20 lg:block !bg-transparent rounded-full object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureSection;
