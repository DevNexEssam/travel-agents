import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";


import { IoLocationSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";


const List = [
  { label: "Special Deals", href: "" },
  { label: "Populer", href: "" },
  { label: "Recommendation", href: "" },
  { label: "Best Price", href: "" },
];
const Cards = [
  {
    label: "Special Deals",
    href: "",
    image: "/card-1.png",
    location: "maldives",
    time: "7 Days Tour on 2 person",
    price: 620,
  },
  {
    label: "Populer",
    href: "",
    image: "/card-2.png",
    location: "maldives",
    time: "4 days 2 person",
    price: 620,
  },
  {
    label: "Recommendation",
    href: "",
    image: "/card-1.png",
    location: "maldives",
    time: "7 Days Tour on 2 person",
    price: 620,
  },
  {
    label: "Best Price",
    href: "",
    image: "/card-2.png",
    location: "maldives",
    time: "4 days 2 person",
    price: 620,
  },
];
const Destination = () => {
  return (
    <section className="mt-[120px] py-[20px]">
      <div className="container">
        <h2 className="text-text-primary text-[40px] text-center font-bold">
          The <span className="text-primary-orange">best place</span> for
          vacation
        </h2>
        {/* LISTS */}
        <div className="flex flex-wrap gap-10 items-center justify-center mt-5">
          {List.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-text-secondary hover:text-primary-orange"
            >
              {" "}
              {item.label}
            </Link>
          ))}
        </div>
        {/* CARDS */}
        <div className="grid gap-10 grid-cols-4 items-center mt-10">
          {Cards.map((item, index) => (
            <div key={index} className="bg-white shadow-sm rounded-[10px] hover:shadow-2xl transition-all">
                <Image
                  src={item.image}
                  alt={item.label}
                  width={500}
                  height={500}
                />
              <div className="p-4 flex flex-col gap-3">
                {" "}
                <div className="flex justify-between items-center">
                  <span className="flex gap-1 items-center text-[13px] capitalize text-primary-orange/80">
                    <IoLocationSharp className="text-primary-orange text-[18px]" /> 
                    {item.location}
                  </span>
                  <span className="flex gap-1 items-center text-[13px] capitalize text-primary-black font-bold">
                    <FaStar className="text-primary-orange text-[18px]"  />
                    4.7 
                  </span>
                </div>
                <h3 className="text-[17px] capitalize text-primary-black font-bold">{item.label}</h3>
                <p className="text-text-gray text-[11px]">{item.time}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-orange font-bold text-[25px]">
                    ${item.price}
                  </span>
                  <Link href="/" className="text-text-gray capitalize text-[13px] flex items-end gap-1 hover:gap-4 hover:text-primary-orange transition-all">view more <LuArrowRight /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
