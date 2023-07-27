"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

const MobileSection = () => {
  const [state, setState] = useState<boolean>(false);
  return (
    <>
      <div className={cn("flex justify-between items-center w-full md:hidden")}>
        <Link href={"/"} className="py-1">
          <Icons.logo width={90} height={40} />
        </Link>
        <nav>
          <Sheet open={state} onOpenChange={setState}>
            <SheetTrigger className="p-2">
              <Icons.menu />
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className={" min-w-full md:hidden text-black bg-white md:w-0"}
            >
              <div className="h-full flex justify-center w-full">
                <div className="flex flex-col text-sm w-full justify-center gap-2 font-medium">
                  <Link
                    href={"/features"}
                    onClick={() => setState(false)}
                    className=" w-full flex justify-center border p-2"
                  >
                    Features
                  </Link>
                  <Link
                    href={"/get-quote"}
                    onClick={() => setState(false)}
                    className=" w-full flex justify-center border p-2"
                  >
                    Get quote
                  </Link>
                  <Link
                    href={"/contact-us"}
                    onClick={() => setState(false)}
                    className=" w-full flex justify-center border p-2"
                  >
                    Contact us
                  </Link>
                  <Link
                    href={"/login"}
                    onClick={() => setState(false)}
                    className="font-bold bg-primary-light-violet hover:bg-pink-700 text-white text-sm px-6 py-2 text-center"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
};

export default MobileSection;
