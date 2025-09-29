export async function handleDelete(
  id: string,
  refetch: () => void,
  setIsDeleting: (open: boolean) => void,
  collection: string
) {
  try {
    const response = await fetch(`/api/${collection}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      refetch();
      setIsDeleting(false);
    } else {
      console.error("Failed to delete user");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}
