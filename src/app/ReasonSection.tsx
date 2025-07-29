import { greatVibes } from "@/styles/fonts";
import Image from "next/image";
import { FaBowlFood, FaCookieBite, FaMartiniGlass } from "react-icons/fa6";

const ReasonSection = () => {
  return (
    <div className="mt-16 flex flex-col-reverse gap-4">
      <div>
        <div className="grid grid-cols-2 gap-2 items-end">
          <Image src={'/assets/reason_section_1.jpg'} alt="" width={1280} height={720} className="rounded-md" />
          <Image src={'/assets/reason_section_2.jpg'} alt="" width={1280} height={720} className="rounded-md h-2/3 object-cover" />
        </div>
        <div className="grid grid-cols-3 mt-2 gap-2">
          <div className="col-span-2 grid grid-cols-2 gap-2">
            <Image src={'/assets/reason_section_4.jpg'} alt="" width={1280} height={720} className="rounded-md" />
            <Image src={'/assets/reason_section_3.jpg'} alt="" width={1280} height={720} className="rounded-md" />
          </div>
          <div className="flex flex-col gap-2">
            <Image src={'/assets/reason_section_5.jpg'} alt="" width={1280} height={720} className="rounded-md" />
            <Image src={'/assets/reason_section_6.jpg'} alt="" width={1280} height={720} className="rounded-md" />
          </div>
        </div>
      </div>
      <div>
        <span className={`text-primary ${greatVibes.className}`}>Why Choose us</span>
        <h1 className="font-black text-2xl"><span className="text-primary">Ex</span>tra ordinary taste And Experienced</h1>
        <p className="mt-2 text-[10px] text-justify">
          With over 30 years of experience, we bring extraordinary taste to every meal. From quick fast food to hearty lunches and elegant dinners, we craft each dish with care, flavor, and passion to satisfy every craving.
        </p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <div className="flex flex-col items-center">
            <FaBowlFood className="bg-primary p-2 rounded-md" size={48} />
            <span className="text-[10px] mt-1">Fast Food</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCookieBite className="bg-primary p-2 rounded-md" size={48} />
            <span className="text-[10px] mt-1">Lunch</span>
          </div>
          <div className="flex flex-col items-center">
            <FaMartiniGlass className="bg-primary p-2 rounded-md" size={48} />
            <span className="text-[10px] mt-1">Dinner</span>
          </div>
        </div>
        <div className="bg-white text-black w-fit flex items-center gap-6 py-3 px-6 mt-4 mx-auto rounded-lg relative overflow-hidden before:absolute before:content-[''] before:w-2 before:h-full before:bg-primary before:left-0">
          <span className="text-primary text-2xl font-bold">30+</span>
          <span className="text-xs">Years of <br /><span className="font-bold text-base">Experienced</span></span>
        </div>
      </div>
    </div>
  );
};

export default ReasonSection;
