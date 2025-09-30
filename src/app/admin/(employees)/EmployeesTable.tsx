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
import { useMobileDetectClient } from "@/lib/hooks/useMobileDetect";

interface EmployeesTableProps {
  data: Employee[];
  refetch: () => void;
}

const EmployeesTable = ({ data, refetch }: EmployeesTableProps) => {
  const isMobile = useMobileDetectClient();
  const [open, setOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>(
    {} as Employee
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="">Phone</TableHead>
          {isMobile ? null : (
            <>
              <TableHead className="w-[20px] text-ellipsis">Email</TableHead>
              <TableHead className="">Status</TableHead>
            </>
          )}
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
