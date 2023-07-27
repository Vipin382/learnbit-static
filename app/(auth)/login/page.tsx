import React from "react";
import { Metadata } from "next";
import UserForm from "@/Components/user/user-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="sm:max-w-xl max-w-full w-full">
        <h1 className="text-center text-3xl">Codeplex</h1>
        <h2 className="text-center text-2xl mt-12">Sign in to account</h2>
        <UserForm />
      </div>
    </div>
  );
}
