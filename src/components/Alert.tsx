"use client";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";

export function AlertError({
  message,
  subMessage,
}: //   timeOut,
{
  message: string;
  subMessage: string;
  //   timeOut: number;
}) {
  // not practical for now
  //   const [show, setShow] = useState(true);
  //   const setTimeOut = setTimeout(() => {
  //     setShow(false);
  //   }, timeOut);

  //   if (!show) return null;

  return (
    <div className="grid w-full items-start gap-4">
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>{message}</AlertTitle>
        <AlertDescription>
          <p className="text-xs lg:text-sm">{subMessage}</p>
        </AlertDescription>
      </Alert>
    </div>
  );
}

export function AlertSuccess({
  message,
  subMessage,
}: {
  message: string;
  subMessage: string;
}) {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
      {/* <Alert>
        <PopcornIcon />
        <AlertTitle>
          This Alert has a title and an icon. No description.
        </AlertTitle>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert> */}
    </div>
  );
}
