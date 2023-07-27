"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Separator } from "../ui/separator";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

const FooterSection = () => {
  const [email, setemail] = useState<string>("");
  // 2. Define a submit handler.
  function onSubmit(values: { email: string }) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <footer className="w-full min-h-[20rem] md:rounded-t-[40px] border px-4 md:px-10 lg:px-20 flex flex-col justify-center">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-bold text-xl text-primary-light-violet">
            Learn in Bit
          </h1>
          <p className="text-sm font-medium">Unlock your coding potential</p>
          <div className="flex gap-3">
            <Link href={"#"} className="sm:text-sm text-xs">
              Features
            </Link>
            <Link href={"#"} className="sm:text-sm text-xs">
              Get quote
            </Link>
            <Link href={"#"} className="sm:text-sm text-xs">
              Contact us
            </Link>
          </div>
        </div>
        <Separator className="bg-neutral-300" />
        <div className="flex items-center gap-y-4 md:gap-y-0 md:justify-between flex-col-reverse md:flex-row">
          <p className="font-medium text-xs mt-3 sm:mt-0 sm:text-sm">
            © Copyright 2023. All rights reserved.
          </p>
          <div className="h-16">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit({ email });
              }}
              className=" flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row gap-x-3 justify-center w-auto"
            >
              <Input
                placeholder="email"
                className="rounded-full focus:outline-primary-light-violet "
                required
                minLength={12}
                maxLength={60}
                onChange={(e) => setemail(e.target.value)}
                value={email}
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              />
              <Button
                type="submit"
                className="rounded-full h-8 sm:h-10 bg-primary-light-violet text-sm hover:bg-pink-700 "
              >
                Join our Newsletter
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
