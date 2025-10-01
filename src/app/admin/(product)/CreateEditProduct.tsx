"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { onSubmit } from "@/lib/onSubmit";

import { formSchemaProduct } from "@/app/api/products/route";
import ActionAddEditButtons from "@/app/shared/ActionAddEditButtons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useMobileDetectClient } from "@/lib/hooks/useMobileDetect";
import { Product } from "@/types";
import { useState, useTransition } from "react";
import CreateEditFormProduct from "./CreateEditFormProduct";

interface CreateProductProps {
  refetch: () => void;
  editMode?: boolean;
  product?: Product;
}

export function CreateProduct({
  refetch,
  editMode,
  product,
}: CreateProductProps) {
  const [isPending, startTransition] = useTransition();
  // State to hold the selected file, to pass to onSubmit (reference: fileUpload)
  const [file, setFile] = useState<File | null>(null);

  const isMobile = useMobileDetectClient();
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchemaProduct>>({
    resolver: zodResolver(formSchemaProduct),
    defaultValues: {
      // no need to pass id in defaultValues, it will overwrite (reference: 100)
      name: product?.name || "",
      description: product?.description || "",
      category: product?.category || "",
      origin: product?.origin || "",
      price: product?.price || "",
      mainImageUrl: product?.mainImageUrl || "",
      available: product?.available || true,
      tags: product?.tags || [],
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <ActionAddEditButtons
        editMode={editMode}
        isMobile={isMobile}
        entity={"Product"}
      />
      <DialogContent className={`sm:max-w-xl`}>
        <DialogHeader>
          <DialogTitle>
            {editMode ? "Edit Product" : "Create Product"}
          </DialogTitle>
          <DialogDescription>
            Fill in the details to create a new product.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            // pass the id here even when create, when create, id will be undefined (reference: 100)
            // onSubmit={form.handleSubmit(
            //   (data) => {
            //     console.log("✅ Validated data", data);
            //     startTransition(() => onSubmit(data, product?.id));
            //   },
            //   (errors) => {
            //     console.log("❌ Validation errors", errors);
            //   }
            // )}
            className="space-y-4"
          >
            <div className="pb-8 p-2 h-[40vh] overflow-y-auto">
              <CreateEditFormProduct
                form={form}
                editMode={editMode}
                onFileSelect={setFile}
              />
            </div>
            <Button
              type="submit"
              onClick={form.handleSubmit(
                (data) => {
                  startTransition(() =>
                    onSubmit({
                      data,
                      id: product?.id,
                      editMode,
                      refetch,
                      setOpen,
                      form,
                      entity: "products",
                      // pass the selected file to onSubmit (reference: fileUpload) so that upload will trigger only when form is submitted (reference: fileUpload)
                      file: file,
                    })
                  );
                },
                (errors) => {
                  console.log("❌ Validation errors", errors);
                }
              )}
              disabled={isPending}
            >
              {editMode ? "Save Changes" : "Create"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
