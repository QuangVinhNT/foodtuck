import HeroSection from "@/app/HeroSection";
import AboutUsSection from "./AboutUsSection";
import FoodCategorySection from "./FoodCategorySection";
import ReasonSection from "./ReasonSection";

export default function Home() {
  return (
    <div className={'bg-black text-white px-4'}>
      <HeroSection />
      <AboutUsSection />
      <FoodCategorySection />
      <ReasonSection />
    </div>
  );
}
