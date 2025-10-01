"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import ActionAddEditButtons from "@/app/shared/ActionAddEditButtons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useMobileDetectClient } from "@/lib/hooks/useMobileDetect";
import { Employee } from "@/types";
import { useState, useTransition } from "react";
import CreateForm from "./CreateEditForm";
import { formSchemaEmployee } from "@/app/api/users/route";
import { onSubmit } from "@/lib/onSubmit";

interface CreateEmployeeProps {
  refetch: () => void;
  editMode?: boolean;
  employee?: Employee;
}

export function CreateEmployee({
  refetch,
  editMode,
  employee,
}: CreateEmployeeProps) {
  const isMobile = useMobileDetectClient();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchemaEmployee>>({
    resolver: zodResolver(formSchemaEmployee),
    defaultValues: {
      // no need to pass id in defaultValues, it will overwrite (reference: 100)
      email: employee?.email || "",
      name: employee?.name || "",
      phone: employee?.phone || "",
      status: employee?.status || "",
      role: employee?.role || "",
      department: employee?.department || "",
      position: employee?.position || "",
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <ActionAddEditButtons
        editMode={editMode}
        isMobile={isMobile}
        entity={"Employee"}
      />
      <DialogContent className={`sm:max-w-xl`}>
        <DialogHeader>
          <DialogTitle>
            {editMode ? "Edit Employee" : "Create Employee"}
          </DialogTitle>
          <DialogDescription>
            Fill in the details to create a new employee.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            // pass the id here even when create, when create, id will be undefined (reference: 100)
            // onSubmit={form.handleSubmit((data) => onSubmit(data, employee?.id))}
            className="space-y-4"
          >
            <div className="pb-8 p-2 h-[40vh] overflow-y-auto">
              <CreateForm form={form} editMode={editMode} />
            </div>
            <Button
              type="submit"
              // pass the id here even when create, when create, id will be undefined (reference: 100)
              onClick={form.handleSubmit((data) => {
                startTransition(() =>
                  onSubmit({
                    data,
                    id: employee?.id,
                    editMode,
                    refetch,
                    setOpen,
                    form,
                    entity: "users",
                  })
                );
              })}
              disabled={isPending}
            >
              {editMode ? "Save Changes" : "Create"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
