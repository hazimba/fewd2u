import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <>
      <div className="h-screen w-screen justify-center">
        <div className="flex justify-center font-bold w-full h-[50vh]">
          <Tabs
            defaultValue="restaurant"
            className="w-full flex flex-row max-w-5xl w-screen h-screen justify-center items-center"
          >
            <TabsList className="w-2/6 flex flex-col h-96 rounded-l-lg">
              <div className="align-left w-full px-10 pb-2 font-thin text-black text-xs">
                our services
              </div>
              <div className="align-left w-full px-10 pb-2 font-thin text-black text-2xl">
                Expert Care for Your Digital Needs
              </div>
              <div className="align-left w-full px-10 font-thin text-black text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                corporis nisi rerum blanditiis iste voluptatum amet iusto,
                explicabo iure rem veniam recusandae excepturi? Repellat, odit.
              </div>
              <TabsTrigger
                value="restaurant"
                className="flex w-full mt-6 justify-start items-center px-10"
              >
                Restaurant
              </TabsTrigger>
              <TabsTrigger
                value="catering"
                className="flex w-full justify-start items-center px-10"
              >
                Catering
              </TabsTrigger>
              <TabsTrigger
                value="event"
                className="flex w-full justify-start items-center px-10"
              >
                Event
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="restaurant"
              className="!w-3/5 px-4 flex flex-col gap-4"
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
              className="!w-3/5 px-4 flex flex-col gap-4"
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
