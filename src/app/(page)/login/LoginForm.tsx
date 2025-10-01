"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginWithEmail } from "@/lib/firebaseAuth";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AlertError } from "@/components/Alert";
import { useRouter } from "next/navigation";
import { LoadingButton } from "@/components/LoadingButton";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Enter your password.",
  }),
});

const LoginForm = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // setLoginError(true);
      router.push("../admin");
      // const user = await loginWithEmail(values.email, values.password);
      // console.log("User logged in:", user);
    } catch (error) {
      setLoginError(true);
      console.log("not working");
      console.error("Login failed:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col gap-4 h-50">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                {/* <FormDescription>
                This is your public display email.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {loginError && (
            <AlertError
              message="Invalid email or password"
              subMessage="Please enter valid credentials."
              // timeOut={3000}
            />
          )}
        </div>
        <LoadingButton
          type="submit"
          variant="default"
          text="Login"
          destination="/admin"
        />
        <div className="pt-2 flex items-center justify-center text-sm gap-1">
          Don&apos;t have an account?
          <a href="/register" className="hover:underline text-blue-600">
            {" "}
            Register here
          </a>
        </div>
      </form>
    </Form>
  );
};
export default LoginForm;
