"use client";
import { fetchUsers } from "@/app/api/users/route";
import { SpinnerLoading } from "@/components/ui/spinner";
import { useEffect, useState } from "react";
import { CreateEmployee } from "./CreateEditEmployee";
import EmployeesTable from "./EmployeesTable";
import { Employee } from "@/types";
import { NameFilterSearch } from "@/app/shared/NameFilterSearch";
import PageHeader from "@/app/shared/PageHeader";

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

  return (
    <div className="p-4 overflow-y auto lg:h-[80vh]">
      <PageHeader
        title="Employee"
        setInputValue={setInputValue}
        refetch={refetch}
      />
      {!employees ? (
        <div className="text-center h-[40vh] flex justify-center items-center mt-20">
          <p className="text-lg">No employees found.</p>
          {/* <CreateEmployee refetch={refetch} /> */}
        </div>
      ) : null}
      {loading ? (
        <SpinnerLoading />
      ) : (
        <EmployeesTable data={employees} refetch={refetch} />
      )}
    </div>
  );
};

export default EmployeesTab;
