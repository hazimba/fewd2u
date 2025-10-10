"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <>
      <div className="h-screen w-screen justify-center mt-10 lg:mt-0">
        <div className="flex justify-center font-bold w-full">
          <Tabs
            defaultValue="restaurant"
            className="w-full flex lg:flex-row max-w-5xl w-screen h-screen justify-center items-center"
          >
            <TabsList className="lg:w-2/6 flex flex-col px-4 lg:px-10 h-96 rounded-l-lg bg-custom-default">
              <div className="align-left w-full pb-2 font-thin text-black text-xs dark:text-gray-200">
                our services
              </div>
              <div className="align-left w-full pb-2 font-thin text-black text-2xl dark:text-gray-200">
                Expert Care for Your Digital Needs
              </div>
              <div className="align-left w-full font-light text-black text-sm dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                corporis nisi rerum blanditiis iste voluptatum amet iusto,
                explicabo iure rem veniam recusandae excepturi? Repellat, odit.
              </div>
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 lg:mt-6 my-4 w-full">
                <TabsTrigger
                  value="restaurant"
                  className="flex w-full lg:justify-start text-start items-center p-0 cursor-pointer hover:underline p-2 border-none"
                >
                  Restaurant
                </TabsTrigger>
                <TabsTrigger
                  value="catering"
                  className="flex w-full lg:justify-start text-start items-center p-0 cursor-pointer hover:underline p-2 border-none"
                >
                  Catering
                </TabsTrigger>
                <TabsTrigger
                  value="event"
                  className="flex w-full lg:justify-start text-start items-center p-0 cursor-pointer hover:underline p-2 border-none"
                >
                  Event
                </TabsTrigger>
              </div>
            </TabsList>
            <TabsContent
              value="restaurant"
              className="lg:!w-3/5 px-4 flex flex-col gap-4"
            >
              <div>
                <Image
                  src="/service/restaurant.jpg"
                  alt="Restaurant"
                  width={800}
                  height={300}
                  className="object-cover rounded-lg w-full h-72"
                />
              </div>
              <div className="text-2xl font-light">
                24 Hour Dining Restaurant
              </div>
              <div className="text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                fugiat nobis voluptas magni vero adipisci praesentium libero
                corporis ducimus accusamus! Eum, fugit. Nesciunt, provident
                consequatur quisquam cupiditate at obcaecati dolorum accusantium
                incidunt tempore iste possimus sunt quo deserunt maiores
                explicabo.
              </div>
            </TabsContent>
            <TabsContent
              value="catering"
              className="lg:!w-3/5 px-4 flex flex-col gap-4"
            >
              <div>
                <Image
                  src="/service/catering.webp"
                  alt="Catering"
                  width={800}
                  height={300}
                  className="object-cover rounded-lg w-full h-72"
                />
              </div>
              <div className="text-2xl font-light">Catering Service</div>
              <div className="text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                fugiat nobis voluptas magni vero adipisci praesentium libero
                corporis ducimus accusamus! Eum, fugit. Nesciunt, provident
                consequatur quisquam cupiditate at obcaecati dolorum accusantium
                incidunt tempore iste possimus sunt quo deserunt maiores
                explicabo.
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};
export default ServiceSection;
