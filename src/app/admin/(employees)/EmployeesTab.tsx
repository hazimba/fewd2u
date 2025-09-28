import { useLazyFetch } from "@/app/api/lazyload";
import { Button } from "@/components/ui/button";
import { SpinnerLoading } from "@/components/ui/spinner";
import { baseUrl } from "@/lib/getBaseUrl";
import EmployeesTable from "./EmployeesTable";
import { CreateEmployee } from "./CreateEmployee";

const EmployeesTab = () => {
  const { data, loading, error } = useLazyFetch(`${baseUrl}/api/users`, true);

  if (loading) return <SpinnerLoading />;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;

  console.log("data", data);

  return (
    <div className="p-4 overflow-y auto h-172">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold mb-4">Employees</h2>
        <CreateEmployee />
      </div>
      <EmployeesTable data={data} />
    </div>
  );
};

export default EmployeesTab;
