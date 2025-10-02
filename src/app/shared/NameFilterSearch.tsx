import { Command, CommandInput } from "@/components/ui/command";

interface NameFilterSearchProps {
  setInputValue: (value: string) => void;
  entity: string;
}

export function NameFilterSearch({
  setInputValue,
  entity,
}: NameFilterSearchProps) {
  const handleValueChange = (value: string) => {
    setInputValue(value);
    console.log("Search value:", value);
    // Implement your search logic here
  };

  return (
    <Command className="rounded-lg border shadow-md w-60 md:w-80">
      <CommandInput
        onValueChange={(e) => handleValueChange(e)}
        placeholder={`Search ${entity} by name...`}
      />
    </Command>
  );
}
