import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { IFeatureCard } from "@/config/content";
import { FC } from "react";

const FeatureCard: FC<IFeatureCard> = ({ title, content, Icon }) => {
  return (
    <div className="w-full max-w-[24rem] border-primary-light-violet min-h-[14rem] rounded-xl">
      <div className="flex flex-col items-center relative">
        <div className="h-12 w-12 -top-5 rounded-full bg-dark-button absolute flex justify-center items-center">
          <Icon className="text-white text-2xl border-none" />
        </div>
      </div>
      <div className="bg-dark-button rounded-xl overflow-hidden p-[1.5px] h-full">
        <Card className="bg-primary-blue-light bg-white h-full text-slate-100  border-none">
          <CardHeader>
            <CardTitle className="mt-2 text-xl text-black text-center">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="md:text-sm text-xs text-center text-black">
              {content}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeatureCard;
