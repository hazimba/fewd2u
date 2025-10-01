import { Spinner } from "./shadcn-io/spinner";

export const SpinnerLoading = () => {
  return (
    <p className="w-full flex justify-center h-96 items-center gap-2">
      <span>Loading.. </span>
      <Spinner />
    </p>
  );
};
