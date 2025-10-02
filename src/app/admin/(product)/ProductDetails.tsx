"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Product } from "@/types";
import { Briefcase, Mail, Phone, Shield, User } from "lucide-react";
import Image from "next/image";
import { useMobileDetectClient } from "@/lib/hooks/useMobileDetect";
import { ImageCarousel } from "./ImageCarousel";

interface ProductDetailsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  product: Product | null;
}

export function ProductDetails({
  open,
  setOpen,
  product,
}: ProductDetailsProps) {
  const isMobile = useMobileDetectClient();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Product Details</DialogTitle>
          <DialogDescription>
            Make changes to your product details here.
          </DialogDescription>
        </DialogHeader>
        {product && (
          <div className="lg:mt-6 space-y-4 flex flex-col lg:flex-row gap-4 max-h-[80vh] overflow-y-auto">
            <div className="lg:w-3/5 flex w-full items-center justify-center">
              {/* <Image
                priority
                src={
                  product.mainImageUrl
                    ? product.mainImageUrl
                    : "/default-image.png"
                }
                alt={product.name}
                width={1000}
                height={1000}
                className={`rounded-md object-cover object-bottom h-92 w-full`}
              /> */}
              <ImageCarousel
                images={[
                  product?.mainImageUrl,
                  product?.mainImageUrl,
                  product?.mainImageUrl,
                ]}
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-2/5">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-200 hover:bg-slate-100 transition-colors">
                <User className="w-5 h-5 text-slate-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                    Name
                  </p>
                  <p className="text-sm text-slate-900 font-medium truncate">
                    {product.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-200 hover:bg-slate-100 transition-colors">
                <Mail className="w-5 h-5 text-slate-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-sm text-slate-900 truncate">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-200 hover:bg-slate-100 transition-colors">
                <Phone className="w-5 h-5 text-slate-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                    Phone
                  </p>
                  <p className="text-sm text-slate-900">{product.origin}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-200 hover:bg-slate-100 transition-colors">
                <Shield className="w-5 h-5 text-slate-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                    Status
                  </p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-200 hover:bg-slate-100 transition-colors">
                <Briefcase className="w-5 h-5 text-slate-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                    Role
                  </p>
                  <p className="text-sm text-slate-900 font-medium">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
