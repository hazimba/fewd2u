"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Employee } from "@/types";
import { useState } from "react";
import ActionEmployees from "./ActionEmployees";
import EmployeeDetails from "./EmployeeDetails";

interface EmployeesTableProps {
  data: Employee[];
  refetch: () => void;
}

const EmployeesTable = ({ data, refetch }: EmployeesTableProps) => {
  const [open, setOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>(
    {} as Employee
  );

  return (
    <Table>
      <TableCaption>A list of employees.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[20px] text-ellipsis">Email</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="">Phone</TableHead>
          <TableHead className="">Status</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((employee) => (
            <TableRow
              key={employee.id}
              onClick={() => {
                setSelectedEmployee(employee);
                setOpen(true);
              }}
            >
              <TableCell className="font-medium">{employee.email}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell className="">{employee.phone}</TableCell>
              <TableCell className="">{employee.status}</TableCell>
              <TableCell className="flex justify-end">
                <ActionEmployees employee={employee} refetch={refetch} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <EmployeeDetails
        open={open}
        setOpen={setOpen}
        selectedEmployee={selectedEmployee}
      />
    </Table>
  );
};

export default EmployeesTable;
