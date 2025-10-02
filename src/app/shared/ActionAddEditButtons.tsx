import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { Edit2Icon, PlusIcon } from "lucide-react";

interface ActionButtonsProps {
  editMode?: boolean;
  isMobile: boolean;
  entity?: string;
}

const ActionAddEditButtons = ({
  editMode,
  isMobile,
  entity,
}: ActionButtonsProps) => {
  return (
    <DialogTrigger asChild>
      {editMode ? (
        <Edit2Icon className="icon-action-hover-blue" />
      ) : (
        <Button className="button-action-hover-blue w-1/4">
          {isMobile ? <PlusIcon /> : `Add ${entity}`}
        </Button>
      )}
    </DialogTrigger>
  );
};

export default ActionAddEditButtons;
