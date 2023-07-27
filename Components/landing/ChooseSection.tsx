import React from "react";
import ChooseCard from "./Choose-card";
import { CHOOSE_DATA } from "@/config/content";

type Props = {};

const ChooseSection = (props: Props) => {
  return (
    <section className="flex relative flex-col w-full text-black gap-y-6 mt-14">
      <h1 className="text-center mt-6 text-2xl sm:text-3xl">
        Why choose Learn in Bit?
      </h1>
      <p className="text-center text-sm sm:text-base">
        Not only do you get some of the best features, but you get them all in
        one place.
      </p>
      <div className="w-full py-10 mt-32 grid lg:grid-cols-2">
        <ChooseCard
          classname=""
          content={CHOOSE_DATA[0].content}
          icon={CHOOSE_DATA[0].icon}
          title={CHOOSE_DATA[0].title}
          side={CHOOSE_DATA[0].side}
          index={0}
        />
        <ChooseCard
          classname="right-0 top-[100px]"
          content={CHOOSE_DATA[1].content}
          icon={CHOOSE_DATA[1].icon}
          title={CHOOSE_DATA[1].title}
          side={CHOOSE_DATA[1].side}
          index={1}
        />
        <ChooseCard
          classname="top-[220px]"
          content={CHOOSE_DATA[2].content}
          icon={CHOOSE_DATA[2].icon}
          title={CHOOSE_DATA[2].title}
          side={CHOOSE_DATA[2].side}
          index={2}
        />
        <ChooseCard
          classname="right-0 top-[260px]"
          content={CHOOSE_DATA[3].content}
          icon={CHOOSE_DATA[3].icon}
          title={CHOOSE_DATA[3].title}
          side={CHOOSE_DATA[3].side}
          index={3}
        />
        <ChooseCard
          classname="top-[380px]"
          content={CHOOSE_DATA[4].content}
          icon={CHOOSE_DATA[4].icon}
          title={CHOOSE_DATA[4].title}
          side={CHOOSE_DATA[4].side}
          index={4}
        />
        <ChooseCard
          classname="right-0 top-[420px]"
          content={CHOOSE_DATA[5].content}
          icon={CHOOSE_DATA[5].icon}
          title={CHOOSE_DATA[5].title}
          side={CHOOSE_DATA[5].side}
          index={5}
        />
      </div>
    </section>
  );
};

export default ChooseSection;
