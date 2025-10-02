"use client";
import { fetchProducts } from "@/app/api/products/route";
import { SpinnerLoading } from "@/components/ui/spinner";
import { Product } from "@/types";
import { use, useEffect, useState } from "react";
import { CreateProduct } from "./CreateEditProduct";
import { ProductCard } from "./ProductCard";
import { NameFilterSearch } from "@/app/shared/NameFilterSearch";

const ProductTab = () => {
  // const { data, loading, error } = useLazyFetch(`/api/products`, true);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  const refetch = async () => {
    setLoading(true);
    setError(null);
    try {
      // as here will get the latest data from the server (reference: 101)
      const data = await fetchProducts(inputValue);
      setProducts(data);
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
    <div className="p-4 overflow-y auto h-screen lg:h-[85vh] px-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col mb-4">
          <h2 className="text-lg font-semibold">Product</h2>
          <span className="text-xs lg:text-sm">List of Products</span>
        </div>
        <div className="flex space-x-2" onClick={(e) => e.stopPropagation()}>
          <NameFilterSearch setInputValue={setInputValue} entity="Product" />
          <CreateProduct refetch={refetch} />
        </div>
      </div>
      <div>
        {loading ? (
          <SpinnerLoading />
        ) : (
          <ProductCard products={products} refetch={refetch} />
        )}
      </div>
      <div className="h-16" />
    </div>
  );
};
export default ProductTab;
