import HeroSection from "@/app/HeroSection";
import AboutUsSection from "./AboutUsSection";

export default function Home() {
  return (
    <div className={'bg-black text-white px-4'}>
      <HeroSection />
      <AboutUsSection />
    </div>
  );
}
