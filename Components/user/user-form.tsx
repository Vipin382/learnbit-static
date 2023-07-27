"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { PasswordInput } from "./password-input";
import React from "react";
import { Icons } from "../landing/icons";

type Props = {};

const UserForm = (props: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();

  function onSubmit() {
    // perform your logic of submission here
  }

  return (
    <form className="grid w-full gap-4 mt-10 sm:p-16 md:p-24 sm:rounded-2xl sm:shadow-2xl">
      <Input
        className="h-8 focus:outline-primary-light-violet"
        placeholder="rodneymullen180@gmail.com"
        required
        minLength={12}
        maxLength={60}
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
      />
      <PasswordInput
        className="h-8 focus:outline-primary-light-violet"
        placeholder="**********"
        required
        minLength={8}
        maxLength={32}
        pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/"
      />
      <Button disabled={isPending} className="h-8 bg-dark-button">
        {isPending && (
          <Icons.spinner
            className="mr-2 h-4 w-4 animate-spin"
            aria-hidden="true"
          />
        )}
        Sign in
        <span className="sr-only">Sign in</span>
      </Button>
    </form>
  );
};

export default UserForm;
