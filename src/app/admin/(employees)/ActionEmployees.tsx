"use client";
import PopoverDeleteButton from "@/app/shared/PopoverDeleteButton";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Employee } from "@/types";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import { CreateEmployee } from "./CreateEditEmployee";

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
        <PopoverDeleteButton
          data={employee}
          refetch={refetch}
          setIsDeleting={setIsDeleting}
          entity="users"
        />
      </Popover>
    </span>
  );
};
export default ActionEmployees;
