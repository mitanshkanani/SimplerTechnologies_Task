import React from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import {
  Mail,
  User,
  KeyRound,
  ArrowRight,
  UserPlus,
  Check,
  X,
} from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Toaster } from "../../components/ui/sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, {
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
      message: "Password must contain uppercase, lowercase and number",
    }),
});

const SignUp = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const password = form.watch("password");
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasMinLength = password?.length >= 8;

  // Add email validation check
  const email = form.watch("email");
  const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );

  function onSubmit(values) {
    toast.success("Account created successfully!", {
      description: "Welcome to SimplerTech!",
      position: "top-right",
    });
    console.log(values);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container flex min-h-screen items-center justify-center px-4 py-8"
    >
      <Card className="w-full max-w-[450px] shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center space-x-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <UserPlus className="h-8 w-8 text-primary" />
            </motion.div>
            <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
          </div>
          <CardDescription className="text-center">
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          className="pl-8"
                          placeholder="John Doe"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          className={`pl-8 ${
                            email && !isValidEmail
                              ? "border-red-500 focus-visible:ring-red-500"
                              : ""
                          }`}
                          placeholder="name@example.com"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    {email && !isValidEmail && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-medium text-red-500 mt-2"
                      >
                        Please enter a valid email address
                      </motion.p>
                    )}
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
                      <div className="relative">
                        <KeyRound className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-8" type="password" {...field} />
                      </div>
                    </FormControl>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-2 text-sm"
                    >
                      <div className="grid grid-cols-1 gap-2 pt-2">
                        <RequirementItem
                          text="At least 8 characters"
                          isMet={hasMinLength}
                        />
                        <RequirementItem
                          text="Contains uppercase letter"
                          isMet={hasUpperCase}
                        />
                        <RequirementItem
                          text="Contains lowercase letter"
                          isMet={hasLowerCase}
                        />
                        <RequirementItem
                          text="Contains number"
                          isMet={hasNumber}
                        />
                      </div>
                    </motion.div>
                    <FormMessage className="text-red-500 font-medium" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Create Account <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>

        </CardContent>
      </Card>
      <Toaster position="top-right" />
    </motion.div>
  );
};

const RequirementItem = ({ text, isMet }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className={`flex items-center space-x-2 ${
      isMet ? "text-green-500" : "text-red-500"
    }`}
  >
    {isMet ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
    <span className="text-sm">{text}</span>
  </motion.div>
);

export default SignUp;
