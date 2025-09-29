"use client";
import { SelectInput } from "@/components/SelectInput";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DEPARTMENTS, USER_ROLES, USER_STATUS } from "@/lib/const";

interface CreateFormProps {
  form: any;
  editMode?: boolean;
}

const CreateForm = ({ form, editMode }: CreateFormProps) => {
  return (
    <>
      {editMode ? (
        <FormField
          name="id"
          control={form.control}
          render={({ field }) => <input type="hidden" {...field} />}
        />
      ) : null}

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input disabled={editMode} placeholder="Email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Phone" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {editMode ? (
        <>
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <Input placeholder="Position" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <SelectInput
                    label="Status"
                    options={USER_STATUS}
                    field={field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <SelectInput
                    label="Role"
                    options={USER_ROLES}
                    field={field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Department</FormLabel>
                <FormControl>
                  <SelectInput
                    label="Department"
                    options={DEPARTMENTS}
                    field={field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
        </>
      ) : null}
    </>
  );
};
export default CreateForm;
