import React, { useEffect, useState } from "react";
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
import { Particles } from "../../components/magicui/particles";
import { useTheme } from "../../contexts/ThemeProvider";
import AnimatedBackground from "../../components/ui/AnimatedBackground"; 
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Full name must be at least 2 characters.",
    })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Full name can only contain letters and spaces.",
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
  const { theme } = useTheme();
  const [particleColor, setParticleColor] = useState("#000000");

  useEffect(() => {
    setParticleColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

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
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: theme === "dark" ? "#09090b" : "#ffffff",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <AnimatedBackground />
      </div>
      <Particles
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
        }}
        quantity={100}
        staticity={50}
        color={particleColor}
        ease={80}
        refresh
      />

      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          minHeight: "100vh",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1rem",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "450px",
            borderRadius: "0.5rem",
            backgroundColor:
              theme === "dark"
                ? "rgba(24, 24, 27, 0.7)"
                : "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(8px)",
            boxShadow:
              theme === "dark"
                ? "0 4px 6px rgba(0, 0, 0, 0.3)"
                : "0 4px 6px rgba(0, 0, 0, 0.1)",
            color: theme === "dark" ? "#ffffff" : "#09090b",
          }}
        >
          <CardHeader style={{ marginBottom: "1rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <UserPlus
                  style={{
                    height: "2rem",
                    width: "2rem",
                    color: "var(--primary)",
                  }}
                />
              </motion.div>
              <CardTitle
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: theme === "dark" ? "#ffffff" : "#09090b",
                }}
              >
                Create Account
              </CardTitle>
            </div>
            <CardDescription
              style={{
                textAlign: "center",
                color: theme === "dark" ? "#a1a1aa" : "#71717a",
              }}
            >
              Enter your details below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <div style={{ position: "relative" }}>
                          <User
                            style={{
                              position: "absolute",
                              left: "0.5rem",
                              top: "0.625rem",
                              height: "1rem",
                              width: "1rem",
                              color: "var(--muted-foreground)",
                            }}
                          />
                          <Input
                            style={{ paddingLeft: "2rem" }}
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
                        <div style={{ position: "relative" }}>
                          <Mail
                            style={{
                              position: "absolute",
                              left: "0.5rem",
                              top: "0.625rem",
                              height: "1rem",
                              width: "1rem",
                              color: "var(--muted-foreground)",
                            }}
                          />
                          <Input
                            style={{
                              paddingLeft: "2rem",
                              borderColor:
                                email && !isValidEmail ? "#ef4444" : undefined,
                              outline:
                                email && !isValidEmail
                                  ? "2px solid #ef4444"
                                  : undefined,
                            }}
                            placeholder="name@example.com"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      {email && !isValidEmail && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            color: "#ef4444",
                            marginTop: "0.5rem",
                          }}
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
                        <div style={{ position: "relative" }}>
                          <KeyRound
                            style={{
                              position: "absolute",
                              left: "0.5rem",
                              top: "0.625rem",
                              height: "1rem",
                              width: "1rem",
                              color: "var(--muted-foreground)",
                            }}
                          />
                          <Input
                            style={{ paddingLeft: "2rem" }}
                            type="password"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr",
                          gap: "0.5rem",
                          paddingTop: "0.5rem",
                        }}
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
                <Button
                  type="submit"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  Create Account{" "}
                  <ArrowRight style={{ height: "1rem", width: "1rem" }} />
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <Toaster position="top-right" theme={theme} />
    </motion.div>
  );
};

const RequirementItem = ({ text, isMet }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      color: isMet ? "#22c55e" : "#ef4444",
    }}
  >
    {isMet ? (
      <Check style={{ height: "1rem", width: "1rem" }} />
    ) : (
      <X style={{ height: "1rem", width: "1rem" }} />
    )}
    <span style={{ fontSize: "0.875rem" }}>{text}</span>
  </motion.div>
);

export default SignUp;
