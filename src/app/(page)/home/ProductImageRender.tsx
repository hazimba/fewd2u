"use client";
import Image from "next/image";
import { useState } from "react";
import { useMobileDetectClient } from "@/lib/hooks/useMobileDetect";

interface ProductImageRenderProps {
  products: any[];
}

const ProductImageRender = ({ products }: ProductImageRenderProps) => {
  const isMobile = useMobileDetectClient();
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 pt-12">
      {products?.map((product: any, index: number) => {
        // check if this product should show overlay
        const isActive = isMobile ? isHovered === index : false;

        return (
          <div
            key={product.id}
            className="relative group cursor-pointer"
            onClick={() => {
              if (isMobile) {
                setIsHovered(isHovered === index ? null : index);
              }
            }}
          >
            <Image
              src={product.mainImageUrl}
              alt={product.name}
              height={100}
              width={500}
              className={`object-cover lg:!h-50 h-20 w-full transition duration-300
                ${
                  isMobile
                    ? isActive
                      ? "opacity-100"
                      : "opacity-40"
                    : "opacity-40 group-hover:opacity-100"
                }
              `}
            />

            {/* Overlay text */}
            <div
              className={`absolute flex flex-col inset-0 items-center justify-center bg-opacity-40 transition duration-300
                ${
                  isMobile
                    ? isActive
                      ? "opacity-100"
                      : "opacity-0"
                    : "opacity-0 group-hover:opacity-100"
                }
              `}
            >
              <span className="text-black shadow-2xl p-1 font-bold text-2xl font-semibold px-2 text-center">
                {product.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductImageRender;
