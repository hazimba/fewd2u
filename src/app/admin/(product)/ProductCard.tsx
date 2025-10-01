"use client";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMobileDetectClient } from "@/lib/hooks/useMobileDetect";
import { Product } from "@/types";
import Image from "next/image";
import { useState } from "react";
import ActionProduct from "./ActionProduct";

interface ProductCardProps {
  products: Product[];
  refetch: () => void;
}

export function ProductCard({ products, refetch }: ProductCardProps) {
  const isMobile = useMobileDetectClient();
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <div
          key={product.name}
          className="flex justify-center items-center h-full"
        >
          <Card className="w-full flex lg:flex-row p-4 justify-between">
            <CardDescription className="text-sm text-gray-500 mb-2">
              <Image
                priority
                src={
                  product.mainImageUrl
                    ? product.mainImageUrl
                    : "/default-image.png"
                }
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
                    Course:{" "}
                    <span className="font-bold">{product.category}</span>
                  </CardDescription>
                  <CardDescription>
                    Place of origin :{" "}
                    <span className="font-bold">{product.origin}</span>
                  </CardDescription>
                  <CardDescription>
                    Price (RM):{" "}
                    <span className="font-bold">{product.price}</span>
                  </CardDescription>
                </div>
              </div>
              <CardAction>
                <ActionProduct
                  product={product}
                  refetch={refetch}
                  openPopoverId={openPopoverId}
                  setOpenPopoverId={setOpenPopoverId}
                />
              </CardAction>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
