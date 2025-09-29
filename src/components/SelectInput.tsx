import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectInputProps {
  options: string[];
  field: {
    value: string;
    onChange: (value: string) => void;
    name: string;
    onBlur: () => void;
    ref: (instance: HTMLButtonElement | null) => void;
  };
  label: string;
}

export function SelectInput({ options, field, label }: SelectInputProps) {
  return (
    <Select value={field.value} onValueChange={field.onChange}>
      <SelectTrigger ref={field.ref} className="w-[180px]">
        <SelectValue placeholder={`Select ${label}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
