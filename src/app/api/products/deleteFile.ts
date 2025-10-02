import { supabase } from "@/lib/supabaseClient";

export async function deleteFile(img: string) {
  if (img) {
    const url = new URL(img);

    const bucketName = "fewd2u";
    const prefix = `/storage/v1/object/public/${bucketName}/`;

    // Extract the file path inside the bucket
    let filePath = url.pathname.startsWith(prefix)
      ? url.pathname.slice(prefix.length)
      : url.pathname.replace(/^\/+/, "");

    console.log("url", url);
    console.log("bucketName", bucketName);
    console.log("prefix", prefix);
    console.log("filePath", filePath);

    const { data, error } = await supabase.storage
      // bucket
      .from(bucketName)
      // folder/fileName.ext
      .remove([filePath]);

    if (error) {
      console.error("Supabase Storage deletion error:", {
        message: error.message,
        filePath,
        fullError: error,
      });
    } else {
      console.log("✓ Image deleted successfully:", data);
    }
  }
}
