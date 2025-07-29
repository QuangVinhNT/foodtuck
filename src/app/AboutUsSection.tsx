import { greatVibes } from "@/styles/fonts";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <div className="mt-16">
      <div>
        <span className={`${greatVibes.className} text-primary`}>About us</span>
        <h1 className="text-2xl font-black"><span className="text-primary">We</span> Create the best foody product</h1>
        <p className="text-[10px] mt-2 text-justify">
          We are dedicated to delivering high-quality food products that blend traditional flavors with modern creativity. Every dish is made from fresh ingredients to ensure safety and provide an exceptional culinary experience. Your satisfaction is our greatest motivation to grow and improve.
        </p>
        <ul className="ml-2 list-['\2713'] text-[10px] mt-2">
          <li className="pl-1">We carefully select fresh ingredients to ensure both taste and safety.</li>
          <li className="pl-1">Our recipes combine tradition with modern culinary techniques.</li>
          <li className="pl-1">Customer satisfaction is our top priority in everything we create.</li>
        </ul>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <Image src={'/assets/about_us_section_1.jpg'} alt="" width={1280} height={720} priority className="rounded-md"/>
        <div className="flex gap-2">
          <Image src={'/assets/about_us_section_2.jpg'} alt="" width={1280} height={720} className="rounded-md object-cover w-[calc(50%-4px)]"/>
          <Image src={'/assets/about_us_section_3.jpg'} alt="" width={1280} height={720} className="rounded-md object-cover w-[calc(50%-4px)]"/>
        </div>
      </div>
      <button className="text-[10px] bg-primary px-6 py-2.5 rounded-full font-medium block mt-4 mx-auto">Read More</button>
    </div>
  );
};

export default AboutUsSection;
