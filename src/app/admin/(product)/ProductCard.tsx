import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit, Edit2Icon } from "lucide-react";
import Image from "next/image";
import { PRODUCTS } from "@/lib/const";
import { useMobileDetectClient } from "@/lib/hooks/useMobileDetect";

export function ProductCard() {
  const isMobile = useMobileDetectClient();
  return (
    <div className="flex flex-col gap-4">
      {PRODUCTS.map((product) => (
        <div
          key={product.name}
          className="flex justify-center items-center h-full"
        >
          <Card className="w-full flex lg:flex-row p-4 justify-between">
            <CardDescription className="text-sm text-gray-500 mb-2">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className={`rounded-md object-cover h-32 ${
                  isMobile ? "w-full" : "w-48"
                }`}
              />
            </CardDescription>
            <CardHeader className="flex-1 p-0">
              <div className="flex flex-col justify-between gap-4">
                <CardTitle>{product.name}</CardTitle>
                <div>
                  <CardDescription>{product.description}</CardDescription>
                  <CardDescription>
                    Course: <span className="font-bold">{product.course}</span>
                  </CardDescription>
                  <CardDescription>
                    Place of origin :{" "}
                    <span className="font-bold">{product.origin}</span>
                  </CardDescription>
                  <CardDescription>
                    Price: <span className="font-bold">{product.price}</span>
                  </CardDescription>
                </div>
              </div>
              <CardAction>
                <Edit2Icon className="h-4 w-4" />
              </CardAction>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
