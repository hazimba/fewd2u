import { SpinnerLoading } from "@/components/ui/spinner";
import { useLazyFetch } from "@/app/api/lazyload";
import EmployeesTable from "../(employees)/EmployeesTable";
import { CreateEmployee } from "../(employees)/CreateEditEmployee";
import { ProductCard } from "./ProductCard";

const ProductTab = () => {
  //   const { data, loading, error } = useLazyFetch(`/api/users`, true);

  //   if (loading) return <SpinnerLoading />;
  //   if (error) return <p>Error: {error}</p>;
  //   if (!data) return null;

  //   console.log("data", data);

  return (
    <div className="p-4 overflow-y auto h-screen lg:h-172 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold mb-4">Products</h2>
        {/* <CreateEmployee /> */}
      </div>
      {/* <EmployeesTable data={data} /> */}
      <div>
        <ProductCard />
      </div>
    </div>
  );
};
export default ProductTab;
