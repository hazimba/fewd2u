"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useMobileDetectClient } from "@/lib/hooks/useMobileDetect";

interface ImageCarouselProps {
  images?: string[] | undefined;
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const isMobile = useMobileDetectClient();

  return (
    <Carousel className="max-w-xs">
      <CarouselContent>
        {images?.map((image, index) => (
          <CarouselItem key={index}>
            <div className="w-full flex justify-center items-center">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={500}
                height={500}
                className={`rounded-md object-cover object-bottom ${
                  isMobile ? "h-48" : "h-92"
                } w-full`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {isMobile ? null : (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}
