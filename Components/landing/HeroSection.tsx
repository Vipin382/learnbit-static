import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="relative">
      <section className="flex w-full min-h-[600px] md:mt-12 lg:mt-0 flex-col lg:flex-row">
        <div className="relative flex-1 flex justify-center items-center">
          <Image
            src={"/assets/heroimage.svg"}
            height={267}
            width={439}
            alt={".loading"}
            priority
          />
        </div>
        <div className="flex-1 bg-dark-button  sm:rounded-b-[40px] w-full sm:max-w-xl flex flex-col items-center justify-center  gap-10 px-4  sm:px-10 xl:px-20">
          <h1 className="text-3xl text-white font-bold text-center dark:text-start">
            Unlock your coding potential
          </h1>
          <p className="text-center text-white text-base font-medium">
            CodePlex is an all-in-one online learning platform that helps you
            learn to code faster and more efficiently in a fun and engaging
            environment.
          </p>
          <Button
            className={cn(
              " bg-primary-light-violet hover:bg-pink-700 text-white rounded-full px-10 font-medium py-1"
            )}
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
