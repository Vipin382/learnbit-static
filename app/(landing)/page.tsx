import ChooseSection from "@/Components/landing/ChooseSection";
import FeatureSections from "@/Components/landing//FeatureSections";
import HeroSection from "@/Components/landing//HeroSection";
import FormSection from "@/Components/landing//formSection";
import * as React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <HeroSection />
      <FeatureSections />
      <ChooseSection />
      <FormSection />
    </main>
  );
}
