"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ImageUploadForm } from "./ImageUploadForm";

interface CreateFormProps {
  form: any;
  editMode?: boolean;
  onFileSelect: (file: File | null) => void;
}

const CreateFormProduct = ({
  form,
  editMode,
  onFileSelect,
}: CreateFormProps) => {
  return (
    <>
      {editMode ? (
        <FormField
          name="id"
          control={form.control}
          render={({ field }) => <input type="hidden" {...field} />}
        />
      ) : null}
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input disabled={editMode} placeholder="Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Input placeholder="Description" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="category"
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Category</FormLabel>
            <FormControl>
              <Input placeholder="Category" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {editMode ? (
        <>
          <FormField
            control={form.control}
            name="origin"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Origin</FormLabel>
                <FormControl>
                  <Input placeholder="Origin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    // customInput={Input}
                    placeholder="Price"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="mainImageUrl"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Main Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="Main Image URL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          {/* <FormField
            control={form.control}
            name="available"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Available</FormLabel>
                <FormControl>
                  <SelectInput
                    label="Available"
                    options={[, false]}
                    field={field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> 
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <SelectInput
                    label="Tags"
                    options={[true, false]}
                    field={field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />*/}
        </>
      ) : null}
      <FormField
        control={form.control}
        name="mainImageUrl"
        render={() => (
          <FormItem className="mb-4">
            <FormLabel>Main Image</FormLabel>
            <FormControl>
              <ImageUploadForm form={form} onFileSelect={onFileSelect} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* soon to add secondary image upload */}
    </>
  );
};
export default CreateFormProduct;
