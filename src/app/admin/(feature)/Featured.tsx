import Image from "next/image";
// import { CreateProduct } from "./CreateEditProduct";
// import { ProductCard } from "./ProductCard";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageOff } from "lucide-react";
import { FeaturePage } from "@/types";
import { SpinnerLoading } from "@/components/ui/spinner";

interface FeaturedProps {
  renderDisplay: FeaturePage | undefined;
}

const Featured = ({ renderDisplay }: FeaturedProps) => {
  if (!renderDisplay) {
    return <SpinnerLoading />;
  }

  return (
    <>
      <div className=" flex w-1/2 flex-row gap-4 w-full">
        <div
          key={renderDisplay.id}
          className="flex justify-center w-full items-center h-full"
        >
          <Card className="w-full flex lg:flex-col p-4 justify-between">
            <CardDescription className="text-sm text-gray-500 mb-2 justify-around items-center h-32 flex gap-4">
              {renderDisplay.displayImageUrl ? (
                <Image
                  priority
                  src={renderDisplay.displayImageUrl}
                  alt={renderDisplay.mainTitle}
                  width={200}
                  height={200}
                  className={`rounded-md object-cover h-32 lg:w-48 w-full`}
                />
              ) : (
                <div className="flex items-center justify-center rounded-md">
                  <span className="text-xs gap-2 p-6 flex flex-col items-center">
                    <ImageOff className="w-12 h-12" />
                    <>Image Not Available</>
                  </span>
                </div>
              )}
              {renderDisplay.bgImageUrl ? (
                <Image
                  priority
                  src={renderDisplay.bgImageUrl}
                  alt={renderDisplay.mainTitle}
                  width={200}
                  height={200}
                  className={`rounded-md object-cover h-32 lg:w-48 w-full`}
                />
              ) : (
                <div className="flex items-center justify-center rounded-md">
                  <span className="text-gray-500 text-xs gap-2 p-6 flex flex-col items-center">
                    <ImageOff className="w-12 h-12" />
                    <>Image Not Available</>
                  </span>
                </div>
              )}
            </CardDescription>
            <CardHeader className="flex-1 p-0">
              <div className="flex flex-col justify-between gap-4">
                <CardTitle>
                  <div>
                    <div className="text-sm font-light">Main Title</div>
                    <span className="font-bold">{renderDisplay.mainTitle}</span>
                  </div>
                </CardTitle>
                <div className="flex flex-col gap-2">
                  <CardDescription>
                    <div>Title</div>
                    <span className="font-bold">{renderDisplay.title}</span>
                  </CardDescription>
                  <CardDescription>
                    <div>Subtitle</div>
                    <span className="font-bold">{renderDisplay.subtitle}</span>
                  </CardDescription>
                  <CardDescription>
                    <div>Featured</div>
                    <Badge className="font-bold">
                      {renderDisplay.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Featured;
