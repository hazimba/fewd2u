import { formSchemaEmployee } from "@/app/api/users/route";
import { formSchemaProduct } from "@/app/api/products/route";
import z from "zod";
import { handleFileSelect } from "@/app/admin/(product)/HandleFileSelect";
import { FormProps, UseFormReturn } from "react-hook-form";
import { deleteFile } from "@/app/api/products/deleteFile";

interface onSubmitProps {
  data: z.infer<typeof formSchemaEmployee | typeof formSchemaProduct>;
  id?: string;
  editMode?: boolean;
  refetch: () => void;
  setOpen: (open: boolean) => void;
  form: UseFormReturn<z.infer<typeof formSchemaProduct>>;
  entity?: "users" | "products";
  file?: File | null;
}

export const onSubmit = async ({
  data,
  id,
  editMode,
  refetch,
  setOpen,
  form,
  entity,
  file,
}: onSubmitProps) => {
  try {
    const getMainImg = form.watch("mainImageUrl");

    if (getMainImg && editMode) {
      console.log("deleting file", getMainImg);
      await deleteFile(getMainImg);
    }

    // If a file is selected, handle the file upload and get the image URL (reference: fileUpload) as form.mainImageUrl accepts a string (reference: fileUpload)
    if (file) {
      const imageUrl = await handleFileSelect(
        file ? ([file] as unknown as FileList) : null,
        form
      );
      if (imageUrl) {
        data = { ...data, mainImageUrl: imageUrl };
      }
    }
    // Determine the endpoint based on the entity
    const response = await fetch(`/api/${entity}`, {
      method: editMode ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // pass the id like this as it not contained in form data (reference: 100)
      body: JSON.stringify(id ? { ...data, id } : data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Success:", result);
      refetch();
      setOpen(false);
      form.reset();
    } else {
      console.error(`Failed to create ${entity}. Status:`, response.status);
    }
  } catch (error) {
    console.error(`Failed to create ${entity}:`, error);
  }
};
