import { greatVibes } from "@/styles/fonts";
import Image from "next/image";

const FoodCategorySection = () => {
  return (
    <div className="mt-16">
      <span className={`block text-center text-primary ${greatVibes.className}`}>Food Category</span>
      <h1 className="text-2xl font-black text-center"><span className="text-primary">Ch</span>oose Food Item</h1>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <Image src={'/assets/food_category_section_1.jpg'} alt="" width={1280} height={720} className="object-cover rounded-md"/>
        <Image src={'/assets/food_category_section_2.jpg'} alt="" width={1280} height={720} className="object-cover rounded-md"/>
        <Image src={'/assets/food_category_section_3.jpg'} alt="" width={1280} height={720} className="object-cover rounded-md"/>
        <Image src={'/assets/food_category_section_4.jpg'} alt="" width={1280} height={720} className="object-cover rounded-md"/>
      </div>
    </div>
  );
};

export default FoodCategorySection;
