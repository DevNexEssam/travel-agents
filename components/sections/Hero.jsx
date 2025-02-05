import Btn from "@components/ui/Btn";
import Image from "@node_modules/next/image";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "@node_modules/next/link";
import TravelSearch from "@components/ui/TravelSearch";

const icons = [
  { icon: <CiTwitter />, href: "/" },
  { icon: <AiOutlineInstagram />, href: "/" },
  { icon: <AiOutlineYoutube />, href: "/" },
];

const Hero = () => {
  return (
    <section className="bg-[url(/Element-2.png)] bg-no-repeat bg-[100%_20%] py-[20px] mt-[50px]">
      <div className="container">
        {/* TOP */}
        <div className="flex flex-wrap gap-[50px] items-center justify-between">
          {/* LEFT */}
          <div className="bg-[url(/Element-1.png)] bg-[100%_30px] bg-no-repeat w-[600px]">
            <h1 className="text-[72px] font-bold text-text-primary leading-[80px]">
              It’s a Big World Out There,
              <span className="text-primary-orange">
                Go <br /> Explore
              </span>
            </h1>
          </div>
          {/* RIGHT */}
          <div className="w-[400px]">
            <p className="line-clamp-3 text-text-secondary ">
              Time tracking software used by millions. A simple time tracker and
              timesheet app that lets you track work hours <br /> across
              projects...
            </p>
            <Btn label="DISCOVER NOW" />
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-10 flex flex-col lg:flex-row items-start">
          {/* LEFT */}
          <div className="relative flex flex-col items-center">
            <Image
              src="/Image-with-Play-Button.png"
              alt="img hero"
              width={1000}
              height={1000}
              quality={100}
              className="mx-auto"
            />
            <div className="mt-5 lg:absolute bottom-[-30px]">
            <TravelSearch />
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex lg:flex-col gap-3 lg:gap-20 items-center mt-5 lg:mt-16">
            <span className=" text-primary-orange flex items-center lg:rotate-90">FOLLOW US 
            <span className="w-[60px] h-[1px] bg-background-orange"></span>
            </span>
            <div className="flex lg:flex-col gap-4 items-center">
              {icons.map((icon, index) => (
                <Link key={index} href={icon.href} className="text-primary-orange text-[12px]">
                  {icon.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
