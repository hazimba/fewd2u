interface HandleDeleteProps {
  id: string;
  img?: string;
  refetch: () => void;
  setIsDeleting?: (open: boolean) => void;
  collection: string;
}

export async function handleDelete({
  id,
  refetch,
  setIsDeleting,
  collection,
  img,
}: HandleDeleteProps) {
  try {
    // Adjust the endpoint as needed, the comment below is better
    // const response = await fetch(`/api/${collection}/${id}`, {
    const response = await fetch(`/api/${collection}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // pass the image URL to the API for deletion from Supabase Storage
      body: JSON.stringify({ id, mainImageUrl: img }),
    });

    if (response.ok) {
      refetch();
      setIsDeleting?.(false);
    } else {
      console.error("Failed to delete user");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}
