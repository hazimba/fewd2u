import PopoverDeleteButton from "@/app/shared/PopoverDeleteButton";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Trash2Icon } from "lucide-react";
import { CreateProduct } from "./CreateEditProduct";

interface ActionProductProps {
  product: any;
  refetch: () => void;
  openPopoverId: string | null;
  setOpenPopoverId: (id: string | null) => void;
}

const ActionProduct = ({
  product,
  refetch,
  openPopoverId,
  setOpenPopoverId,
}: ActionProductProps) => {
  return (
    <span className="flex items-center gap-2">
      <CreateProduct editMode product={product} refetch={refetch} />
      <Popover
        open={openPopoverId === product.id}
        onOpenChange={(open) => {
          setOpenPopoverId(open ? product.id : null);
        }}
      >
        <PopoverTrigger asChild>
          <Trash2Icon
            className="cursor-pointer size-4"
            // onClick={() => setIsDeleting(true)}
          />
        </PopoverTrigger>
        <PopoverDeleteButton
          data={product}
          refetch={refetch}
          entity="products"
        />
      </Popover>
    </span>
  );
};

export default ActionProduct;
