"use client";
import React, {useState} from "react";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import {FaBagShopping, FaBars, FaMagnifyingGlass, FaXmark} from "react-icons/fa6";

const menuItems = [
  {
    label: "Home",
    link: "/"
  },
  {
    label: "Menu",
    link: "/"
  },
  {
    label: "Blog",
    link: "/"
  },
  {
    label: "About",
    link: "/"
  },
  {
    label: "Shop",
    link: "/"
  },
  {
    label: "Contact",
    link: "/"
  },
];

const Header = () => {
  const [isShowNavBar, setIsShowNavbar] = useState(false);
  return (
    <div className={"bg-black text-white py-2 relative z-10"}>
      <Logo/>
      <div className={"py-2 px-4 flex justify-between items-center gap-4"}>
        <ul className={`fixed left-0 top-0 bg-black h-dvh w-2/3 pl-8 pt-8 flex flex-col gap-4 transition-all ${isShowNavBar ? 'translate-x-0' : '-translate-x-full'}`}>
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
          <li className={'absolute right-4 top-4'}>
            <FaXmark size={24} onClick={() => setIsShowNavbar(false)}/>
          </li>
        </ul>
        <FaBars size={20} onClick={() => setIsShowNavbar(true)}/>
        <div className={"flex items-center gap-4 w-full"}>
          <div className={"flex border border-white rounded-full px-4 py-2 w-full"}>
            <input type="text"
                   placeholder={"Search..."}
                   className={"text-xs outline-none w-full"}/>
            <FaMagnifyingGlass/>
          </div>
          <FaBagShopping size={20}/>
        </div>
      </div>
    </div>
  );
};

export default Header;