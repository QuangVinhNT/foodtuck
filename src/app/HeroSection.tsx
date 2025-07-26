import {Great_Vibes} from "next/font/google";
import React from "react";
import {FaFacebookF, FaPinterestP, FaTwitter} from "react-icons/fa6";
import Image from "next/image";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});

const HeroSection = () => {
  return (
    <div className={'flex items-center py-10'}>
      <div className={'flex items-center w-1/2 gap-4'}>
        <div className={'flex flex-col gap-1.5 relative before:absolute before:content-[""] before:w-[1px] before:h-24 before:bg-white before:-top-full before:left-1/2 before:-translate-x-1/2 before:-translate-y-3/4 after:absolute after:content-[""] after:w-[1px] after:h-24 after:bg-white after:-bottom-full after:left-1/2 after:-translate-x-1/2 after:translate-y-3/4'}>
          <FaFacebookF size={10}/>
          <FaTwitter size={10} className={'text-primary'}/>
          <FaPinterestP size={10}/>
        </div>
        <div>
          <span className={`text-primary ${greatVibes.className}`}>Its Quick & Amusing</span>
          <h1 className={'text-2xl font-black'}><span className={'text-primary'}>Th</span>e Art of speed food Quality</h1>
          <p className={'text-[10px] mt-2'}>Experience the perfect balance of speed and quality. Fresh ingredients, bold flavors, ready in minutes.</p>
          <button className={'text-xs bg-primary px-6 py-2.5 rounded-full mt-4 font-medium'}>See Menu</button>
        </div>
      </div>
      <div className={'flex-1'}>
        <Image src={'/assets/hero_section.png'} alt={'Hero Image'} width={300} height={300}/>
      </div>
    </div>
  );
};

export default HeroSection;