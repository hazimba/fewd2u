import { Button } from "@/components/ui/button";
import { handleDelete } from "@/utils/handleDelete";
import { PopoverContent } from "@/components/ui/popover";
import { use, useTransition } from "react";

interface PopoverDeleteButtonProps {
  data: any;
  refetch: () => void;
  setIsDeleting?: (value: boolean) => void;
  entity: string;
}

const PopoverDeleteButton = ({
  data,
  refetch,
  setIsDeleting,
  entity,
}: PopoverDeleteButtonProps) => {
  const [isPending, startTransition] = useTransition();
  return (
    <PopoverContent className="w-60 p-4 mx-4">
      <p className="mb-4 text-sm">
        Are you sure you want to delete <b>{`${data.name}`}</b>?
      </p>
      <div className="flex justify-end text-sm">
        <Button
          variant="outline"
          className="mr-2 text-sm"
          onClick={() => console.log("Cancel deletion")}
        >
          Cancel
        </Button>
        <Button
          variant="destructive"
          onClick={() =>
            startTransition(() =>
              handleDelete({
                id: data.id,
                img: data.mainImageUrl, // pass the image URL to handleDelete for deletion from Supabase Storage
                refetch,
                setIsDeleting,
                collection: entity,
              })
            )
          }
          disabled={isPending}
        >
          Delete
        </Button>
      </div>
    </PopoverContent>
  );
};
export default PopoverDeleteButton;
