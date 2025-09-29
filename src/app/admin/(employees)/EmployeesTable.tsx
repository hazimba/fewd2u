import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface EmployeesTableProps {
  data: any[];
}

const EmployeesTable = ({ data }: EmployeesTableProps) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Email</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Department</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell className="font-medium">{employee.email}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell className="text-right">{employee.status}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default EmployeesTable;
