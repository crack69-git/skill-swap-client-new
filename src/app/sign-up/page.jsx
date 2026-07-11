"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Radio,
  RadioGroup,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValue = Object.fromEntries(formData.entries());
    console.log("Form submitted with data:", formValue);
    const { data, error } = await authClient.signUp.email({
      name: formValue.name, // required
      email: formValue.email, // required
      password: formValue.password, // required
      image: formValue.imageLink,
      callbackURL: "/login",
    });
    if (data) {
      alert("Sign up successful! ");
      router.push("/login");
    }
    if (error) {
      alert("Error signing up");
    }
  };
  return (
    <div>
      <div className="w-11/12 mx-auto flex items-center justify-center my-20">
        <Form
          className="flex w-100 flex-col gap-4 border border-gray-300 p-6 rounded-2xl shadow-lg"
          onSubmit={onSubmit}
        >
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>
          <TextField isRequired className="w-full" name="name">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <Description>Enter your full name</Description>
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
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
          <TextField className="w-full" name="imageLink">
            <Label>Image Link</Label>
            <Input placeholder="eg: https://example.com/image.jpg" />
          </TextField>
          <TextField isRequired minLength={8} name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter your password" />

            <FieldError />
          </TextField>
          <div className="flex flex-col gap-4">
            <Label>Role</Label>
            <RadioGroup
              defaultValue="client"
              name="role"
              orientation="horizontal"
            >
              <Radio
                value="client"
                className="border bg-sky-100 dark:bg-sky-600 rounded-2xl p-2"
              >
                <Radio.Content>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Client
                </Radio.Content>
              </Radio>
              <Radio
                value="freelancer"
                className="border bg-sky-100 dark:bg-sky-600 rounded-2xl p-2"
              >
                <Radio.Content>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Freelancer
                </Radio.Content>
              </Radio>
              <Radio
                value="admin"
                className="border bg-sky-100 dark:bg-sky-600 rounded-2xl p-2"
              >
                <Radio.Content>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Admin
                </Radio.Content>
              </Radio>
            </RadioGroup>
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>

          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default page;
