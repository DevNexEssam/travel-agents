"use client";
import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";
import { usePathname } from "@node_modules/next/navigation";
import { useState } from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";

const NAV_LINKS = [
  { title: "home", href: "/" },
  { title: "about", href: "#about us" },
  { title: "tour packages", href: "#packages" },
  { title: "our services", href: "#services" },
  { title: "gallery", href: "#gallery" },
  { title: "contact", href: "#contact" },
];

const NavBar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <nav className="h-[70px] flex flex-col items-center justify-center z-40">
      <div className="container">
        {/* FLEX */}
        <div className="flex justify-between items-center relative">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="logo"
              width={80}
              height={80}
              quality={100}
            />
          </Link>
          {/* NAV LINKS */}
          <div className=" hidden md:flex items-center gap-[20px] uppercase">
            {NAV_LINKS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`relative text-text-primary flex flex-col items-center justify-center text-[13px] hover:text-primary-orange before:absolute before:bottom-[-5px] before:w-[20px] before:h-[2px] transition-all ${
                  pathName == item.href
                    ? "text-primary-orange before:bg-primary-orange"
                    : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          {/* MOBILE SCREEN */}
          {open && (
            <div className="absolute -bottom-[320px] right-3 flex flex-col uppercase md:hidden bg-background-blueLight rounded-md">
              <div className="flex flex-col">
                {NAV_LINKS.map((item, index) => (
                  <Link
                  onClick={!handleToggle}
                    key={index}
                    href={item.href}
                    className={`relative text-text-primary flex flex-col text-[13px] px-4 py-3 hover:bg-background-orange hover:text-white transition-all ${
                      pathName == item.href
                        ? "bg-background-orange text-white"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              {/* PHONE NUMBER */}
              <div className="flex gap-2 items-center text-primary-orange text-[13px] px-4 py-2 border-t">
                <FaPhoneAlt />
                <span>+111 - 0258211</span>
              </div>
            </div>
          )}
          {/* MENU TOGGER */}
          <button
            className="flex items-center gap-2 text-primary-orange text-[25px] md:hidden"
            onClick={handleToggle}
          >
            {open ? <HiMenuAlt3 /> : <HiMenu />}
          </button>
          {/* PHONE NUMBER */}
          <div className="hidden md:flex gap-2 items-center text-primary-orange">
            <FaPhoneAlt />
            <span>+111 - 0258211</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
