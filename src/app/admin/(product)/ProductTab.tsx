import { SpinnerLoading } from "@/components/ui/spinner";
import { useLazyFetch } from "@/app/api/lazyload";
import EmployeesTable from "../(employees)/EmployeesTable";
import { CreateEmployee } from "../(employees)/CreateEditEmployee";
import { ProductCard } from "./ProductCard";
import { CreateProduct } from "./CreateProduct";

const ProductTab = () => {
  //   const { data, loading, error } = useLazyFetch(`/api/users`, true);

  //   if (loading) return <SpinnerLoading />;
  //   if (error) return <p>Error: {error}</p>;
  //   if (!data) return null;

  //   console.log("data", data);

  const refetch = () => {
    // Implement refetch logic if needed
  };

  return (
    <div className="p-4 overflow-y auto h-screen lg:h-172 px-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col mb-4">
          <h2 className="text-lg font-semibold">Product</h2>
          <span className="text-xs lg:text-sm">List of Products</span>
        </div>
        <CreateProduct refetch={refetch} />
      </div>
      <div>
        <ProductCard />
      </div>
    </div>
  );
};
export default ProductTab;
