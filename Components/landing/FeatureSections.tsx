import React from "react";
import FeatureCard from "./feature-card";
import { FEATURE_DATA } from "@/config/content";

const FeatureSections = () => {
  return (
    <section className="min-w-full mt-10 shadow-inner rounded-3xl p-4 flex flex-col gap-y-8 py-8">
      <h1 className="font-medium text-2xl md:text-3xl text-center">
        Everything you will ever need to hone your programming skills
      </h1>
      <p className="md:text-sm text-xs font-medium text-center max-w-[510px] self-center">
        CodePlex offers the ultimate arsenal of features and development tools
        that support both effective teaching and self-learning
      </p>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-8">
        {FEATURE_DATA.map((item, index) => {
          return (
            <FeatureCard
              key={index}
              Icon={item.Icon}
              content={item.content}
              title={item.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FeatureSections;
