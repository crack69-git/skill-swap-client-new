"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
const Page = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValue = Object.fromEntries(formData.entries());
    console.log("Form submitted with data:", formValue);
    const { data, error } = await authClient.signIn.email({
      email: formValue.email, // required
      password: formValue.password, // required
      rememberMe: true,
    });
    if (data) {
      alert("Login successful! ");
      redirect("/");
    }
    if (error) {
      alert("Error logging in");
    }
  };
  const handleGoogle = () => {
    // Implement Google sign-in logic here
    console.log("Google sign-in clicked");
  };
  return (
    <div className="w-11/12 mx-auto flex items-center justify-center my-20">
      <Form
        className="flex w-96 flex-col gap-4 border border-gray-300 p-6 rounded-2xl shadow-lg"
        onSubmit={onSubmit}
      >
        <h2 className="text-3xl font-bold text-center">Login</h2>
        <TextField
          isRequired
          name="email"
          type="email"
          defaultValue="admin@taskhive.com"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          defaultValue="12345678"
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />

          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
        <div className="flex items-center gap-2 ">
          <p className="bg-gray-500 h-0.5 w-full"></p>
          <p>or</p>
          <p className="bg-gray-500 h-0.5 w-full"></p>
        </div>

        <Button onClick={handleGoogle} variant="outline" className="w-full">
          <FcGoogle />
          Sign-in with GOOGLE
        </Button>
        <p>
          Don't have an account?{" "}
          <a href="/sign-up" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </Form>
    </div>
  );
};

export default Page;
