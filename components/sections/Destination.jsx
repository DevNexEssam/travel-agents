import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";

import { IoLocationSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";
import BtnTransparent from "@components/ui/BtnTransparent";

const List = [
  { label: "Special Deals", href: "" },
  { label: "Populer", href: "" },
  { label: "Recommendation", href: "" },
  { label: "Best Price", href: "" },
];
const Cards = [
  {
    label: "Hurawalhi Island",
    href: "",
    image: "/1.png",
    location: "maldives",
    time: "7 Days Tour on 2 person",
    price: 620,
  },
  {
    label: "Bali Province",
    href: "",
    image: "/2.png",
    location: "Indonesia",
    time: "4 days 2 person",
    price: 780,
  },
  {
    label: "Barcelona city beach",
    href: "",
    image: "/3.png",
    location: "Spain",
    time: "4 days 4 person",
    price: 850,
  },
  {
    label: "Hurawalhi Island",
    href: "",
    image: "/4.png",
    location: "Maldives",
    time: "7 Days Tour on 2 person",
    price: 620,
  },
  {
    label: "Machu Picchu",
    href: "",
    image: "/5.png",
    location: "Canada",
    time: "7 Days Tour on 2 person",
    price: 620,
  },
  {
    label: "Machu Picchu",
    href: "",
    image: "/6.png",
    location: "Maldives",
    time: "7 Days Tour on 2 person",
    price: 820,
  },
  {
    label: "Bora Bora Island",
    href: "",
    image: "/7.png",
    location: "French",
    time: "7 Days Tour on 2 person",
    price: 550,
  },
  {
    label: "Sydney Opera House",
    href: "",
    image: "/8.png",
    location: "Australia",
    time: "7 Days Tour on 2 person",
    price: 310,
  },
];
const Destination = () => {
  return (
    <section className="mt-[120px] py-[20px] bg-[url(/Element-2.png)] bg-no-repeat bg-[50%_0%] ">
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
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center mt-10">
          {Cards.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-[10px] hover:shadow-2xl transition-all"
            >
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
                    <FaStar className="text-primary-orange text-[18px]" />
                    4.7
                  </span>
                </div>
                <h3 className="text-[17px] capitalize text-primary-black font-bold">
                  {item.label}
                </h3>
                <p className="text-text-gray text-[11px]">{item.time}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-orange font-bold text-[25px]">
                    ${item.price}
                  </span>
                  <Link
                    href="/"
                    className="text-text-gray capitalize text-[13px] flex items-end gap-1 hover:gap-4 hover:text-primary-orange transition-all"
                  >
                    view more <LuArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* MORE */}
        <div className="mx-auto w-max mt-10">
        <BtnTransparent label="load more" />
        </div>
      </div>
    </section>
  );
};

export default Destination;
