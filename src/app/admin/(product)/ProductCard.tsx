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
import { ProductDetails } from "./ProductDetails";
import { ImageOff } from "lucide-react";

interface ProductCardProps {
  products: Product[];
  refetch?: () => void;
  homepage?: boolean;
}

export function ProductCard({ products, refetch, homepage }: ProductCardProps) {
  const isMobile = useMobileDetectClient();
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div
      className={`${
        homepage
          ? "grid lg:grid-cols-2 gap-4 w-full h-[80vh] lg:h-auto overflow-y-scroll grid-cols-1 xl:grid-cols-3"
          : "flex flex-col gap-4 w-full"
      }`}
    >
      {products.map((product) => (
        <div
          key={product.name}
          className="flex justify-center items-center h-full"
          onClick={() => {
            setOpen(true);
            // to specify product or else will render all and makes background black
            setSelectedProduct(product);
          }}
        >
          <Card className="w-full flex lg:flex-row p-4 justify-between">
            <CardDescription className="text-sm text-gray-500 mb-2">
              {product.mainImageUrl ? (
                <Image
                  priority
                  src={product.mainImageUrl}
                  alt={product.name}
                  width={200}
                  height={200}
                  className={`rounded-md object-cover h-32 ${
                    isMobile ? "w-full" : "w-48"
                  }`}
                />
              ) : (
                <div className="w-48 h-32 bg-gray-200 flex items-center justify-center rounded-md">
                  <span className="text-gray-500 text-xs gap-2 flex flex-col items-center">
                    <ImageOff className="w-12 h-12" />
                    <>Image Not Available</>
                  </span>
                </div>
              )}
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
              {homepage && !refetch ? null : (
                <CardAction onClick={(e) => e.stopPropagation()}>
                  <ActionProduct
                    product={product}
                    refetch={refetch ?? (() => {})}
                    openPopoverId={openPopoverId}
                    setOpenPopoverId={setOpenPopoverId}
                  />
                </CardAction>
              )}
            </CardHeader>
          </Card>
        </div>
      ))}
      <ProductDetails open={open} setOpen={setOpen} product={selectedProduct} />
    </div>
  );
}
