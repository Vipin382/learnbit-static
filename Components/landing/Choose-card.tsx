import { ChooseSide, IChooseCard } from "@/config/content";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

interface IChooseCardNew extends IChooseCard {
  index: number;
  classname?: string;
}

const ChooseCard: FC<IChooseCardNew> = ({
  title,
  content,
  icon,
  side,
  index,
  classname,
}) => {
  return (
    <div
      className={cn(
        side == ChooseSide.LEFT
          ? "lg:rounded-r-full left-0 flex-col-reverse sm:flex-row "
          : "lg:rounded-l-full right-0 flex-col-reverse sm:flex-row-reverse lg:mt-20",
        "p-4 px-6 min-w-[200px] border-secondary-dark-violet lg:border lg:shadow-xl h-full bg-white justify-end flex w-full gap-6 items-center sm:max-h-[170px]",
        classname
      )}
    >
      <div className="text-black max-w-[400px] flex flex-col gap-y-4">
        <h1 className="font-bold text-center sm:text-start">{title}</h1>
        <p className="text-sm text-center sm:text-start">{content}</p>
      </div>
      <div className="rounded-full border-secondary-dark-violet border sm:min-h-[100px] min-w-[100px] overflow-hidden max-h-fit max-w-fit">
        <Image src={icon} height={100} width={100} alt="loading..." priority />
      </div>
    </div>
  );
};

export default ChooseCard;
