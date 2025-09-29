"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Employee } from "@/types";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import { CreateEmployee } from "./CreateEditEmployee";
import { handleDelete } from "@/utils/handleDelete";

interface ActionProps {
  employee: Employee;
  refetch: () => void;
}

const ActionEmployees = ({ employee, refetch }: ActionProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <span onClick={(e) => e.stopPropagation()} className="flex">
      <CreateEmployee refetch={refetch} editMode employee={employee} />
      <Popover open={isDeleting} onOpenChange={setIsDeleting}>
        <PopoverTrigger>
          <Trash2Icon className="cursor-pointer size-4" />
        </PopoverTrigger>
        <PopoverContent className="w-60 p-4 mx-4">
          <p className="mb-4 text-sm">
            Are you sure you want to delete <b>{`${employee.name}`}</b>?
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
                handleDelete(employee.id, refetch, setIsDeleting, "users")
              }
            >
              Delete
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </span>
  );
};
export default ActionEmployees;
