"use client";
import { fetchUsers } from "@/app/api/users/route";
import { SpinnerLoading } from "@/components/ui/spinner";
import { useEffect, useState } from "react";
import { CreateEmployee } from "./CreateEditEmployee";
import EmployeesTable from "./EmployeesTable";
import { Employee } from "@/types";
import { NameFilterSearch } from "@/app/shared/NameFilterSearch";

const EmployeesTab = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  // somehow refetch need to do in parents as it will be passed to children
  // if refetch in children, it will not update the parents state (reference: 101)
  const refetch = async () => {
    setLoading(true);
    setError(null);
    try {
      // as here will get the latest data from the server (reference: 101)
      const data = await fetchUsers(inputValue);
      setEmployees(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, [inputValue]);

  useEffect(() => {
    refetch();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!employees) return null;

  return (
    <div className="p-4 overflow-y auto lg:h-[80vh]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col mb-4">
          <h2 className="text-lg font-semibold">Employees</h2>
          <span className="text-xs lg:text-sm">List of Employee</span>
        </div>
        {/* thats why we pass here so that in the component can be called (reference: 101) */}
        <div className="flex space-x-2">
          <NameFilterSearch setInputValue={setInputValue} entity="Employee" />
          <CreateEmployee refetch={refetch} />
        </div>
      </div>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <EmployeesTable data={employees} refetch={refetch} />
      )}
    </div>
  );
};

export default EmployeesTab;
