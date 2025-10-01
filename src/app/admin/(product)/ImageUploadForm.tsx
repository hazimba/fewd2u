"use client";
import { Upload } from "lucide-react";
import React, { RefObject, useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";
import imageCompression from "browser-image-compression";

interface FileDropzoneProps {
  form: any;
  onFileSelect?: (file: File | null) => void;
}

export function ImageUploadForm({ form, onFileSelect }: FileDropzoneProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      onFileSelect?.(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-6">
      <div
        className="border-2 border-dashed border-border rounded-md p-8 flex flex-col items-center justify-center text-center cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="mb-2 bg-muted rounded-full p-3">
          <Upload className="h-5 w-5 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground">
          Upload a project image
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
      <div>
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 max-h-20 rounded-lg object-contain"
          />
        )}
      </div>
    </div>
  );
}
