"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import React, { useRef, useState } from "react";

interface FileDropzoneProps {
  form: any;
  onFileSelect?: (file: File | null) => void;
}

export function ImageUploadForm({ form, onFileSelect }: FileDropzoneProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      onFileSelect?.(file);
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-row gap-4">
      <div
        className="border-2 border-dashed border-border rounded-md p-8 flex flex-col items-center justify-center text-center cursor-pointer w-1/3"
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="mb-2 bg-muted rounded-full p-3">
          <Upload className="h-5 w-5 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground">
          Upload a Main image
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          or,{" "}
          <label
            htmlFor="fileUpload"
            className="text-primary hover:text-primary/90 font-medium cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            click to browse
          </label>{" "}
          (4MB max)
        </p>
        <input
          type="file"
          id="fileUpload"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) handleFileChange(e);
          }}
        />
      </div>
      <div className="w-2/3">
        {preview && (
          <div className="flex items-center w-full gap-8 border p-4 rounded-md">
            <div className="flex items-center justify-start gap-4">
              <img
                src={preview}
                alt="Preview"
                className="max-h-30 max-w-15 rounded-lg object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <div>{selectedFile ? selectedFile.name : "No file selected"}</div>
              <Button
                type="button"
                className="text-sm border-none"
                onClick={() => setPreview(null)}
                variant="destructive"
              >
                Remove
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
