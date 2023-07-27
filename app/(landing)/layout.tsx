import { cn } from "@/lib/utils";
import MainNav from "@/Components/landing/mainNav";
import MobileSection from "@/Components/landing/mobileSection";
import FooterSection from "@/Components/landing/FooterSection";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("relative flex min-h-screen flex-col items-center")}>
      <MainNav />
      <MobileSection />
      {children}
      <FooterSection />
    </div>
  );
}
