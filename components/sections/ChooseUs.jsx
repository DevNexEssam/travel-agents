import BtnTransparent from "@components/ui/BtnTransparent";
import Image from "@node_modules/next/image";
import React from "react";

const Features = [
  {
    title: "Best Travel Agency",
    desc: "Travel agencies that provide round trip, one way, and multi trip services.",
    image: "/Icon-1.png",
  },
  {
    title: "Competitive Price",
    desc: "The price offered are affordable starting from the ordinary to the exclusive.",
    image: "/Icon-2.png",
  },
  {
    title: "Global Coverage",
    desc: "There are many tourist attractions, hotels and interesting entertainment.",
    image: "/Icon-3.png",
  },
];

const ChooseUs = () => {
  return (
    <section className="mt-[120px] py-[20px]">
      <div className="container">
        {/* FLEX */}
        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex flex-col gap-7">
            <h2 className="text-[40px] font-bold text-text-primary">
              Why <span className="text-primary-orange">Choose</span> Us
            </h2>
            <p className="text-[14px]">
              We ensure that you’ll embark on a perfectly planned, safe vacation
              at a price you can afford.
            </p>
            <BtnTransparent label="load more" />
          </div>
          {/* Features */}
          <div className="flex flex-col md:flex-row gap-4">
            {Features.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col gap-4 px-2 ${
                  index < 2 ? "border-r" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                />
                <h3 className="text-[16px] font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-[12px] text-icon-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
