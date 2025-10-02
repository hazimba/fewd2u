"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { VariantProps } from "class-variance-authority";

interface LoadingButtonProps {
  type?: "button" | "submit";
  text: string;
  destination?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
}

export function LoadingButton({
  type = "button",
  text,
  destination,
  variant = "default",
}: LoadingButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      type={type}
      variant={variant}
      className="flex items-center"
      onClick={
        destination
          ? () => {
              startTransition(() => {
                router.push(destination);
              });
            }
          : undefined
      }
      disabled={isPending}
    >
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </>
      ) : (
        text
      )}
    </Button>
  );
}
