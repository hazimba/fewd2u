"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useMobileDetectClient } from "@/lib/hooks/useMobileDetect";
import { Employee } from "@/types";
import { Edit2Icon, PlusIcon } from "lucide-react";
import { useState, useTransition } from "react";
import CreateForm from "./CreateEditForm";

interface CreateEmployeeProps {
  refetch: () => void;
  editMode?: boolean;
  employee?: Employee;
}

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Enter a valid email address.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(1, {
    message: "Enter a valid phone number.",
  }),
  status: z.string().optional(),
  role: z.string().optional(),
  department: z.string().optional(),
  position: z.string().optional(),
});

export function CreateEmployee({
  refetch,
  editMode,
  employee,
}: CreateEmployeeProps) {
  const isMobile = useMobileDetectClient();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

  const onSubmit = async (data: z.infer<typeof formSchema>, id?: string) => {
    console.log("Submitting data:", data);
    try {
      const response = await fetch("/api/users", {
        method: editMode ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // pass the id like this as it not contained in form data (reference: 100)
        body: JSON.stringify(id ? { ...data, id } : data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        refetch();
        setOpen(false);
        form.reset();
      } else {
        console.error("Failed to create employee. Status:", response.status);
      }
    } catch (error) {
      console.error("Failed to create employee:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {editMode ? (
          <Edit2Icon className="cursor-pointer size-4 mr-2" />
        ) : (
          <Button variant="outline">
            {isMobile ? <PlusIcon /> : "Create Employee"}
          </Button>
        )}
      </DialogTrigger>
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
              onClick={form.handleSubmit((data) =>
                startTransition(() => onSubmit(data, employee?.id))
              )}
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
