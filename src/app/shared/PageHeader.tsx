import { CreateEmployee } from "../admin/(employees)/CreateEditEmployee";
import { CreateProduct } from "../admin/(product)/CreateEditProduct";
import { NameFilterSearch } from "./NameFilterSearch";

interface PageHeaderProps {
  title: string;
  setInputValue: (value: string) => void;
  refetch: () => void;
}

const PageHeader = ({ title, setInputValue, refetch }: PageHeaderProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between  items-center mb-4">
      <div className="flex w-full flex-col mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-xs lg:text-sm">List of {title}</span>
      </div>
      <div
        className="flex w-full space-x-2 justify-end"
        onClick={(e) => e.stopPropagation()}
      >
        <NameFilterSearch setInputValue={setInputValue} entity={title} />
        {title === "Product" ? (
          <CreateProduct refetch={refetch} />
        ) : (
          <CreateEmployee refetch={refetch} />
        )}
      </div>
    </div>
  );
};
export default PageHeader;
