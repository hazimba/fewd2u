"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function LoadingButton({
  type = "button",
  text,
  destination,
  variant = "default",
}: {
  type: "button" | "submit";
  text: string;
  destination: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "red";
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      type={type}
      variant={variant}
      className="mt-6 flex items-center"
      onClick={() => startTransition(() => router.push(destination))}
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
