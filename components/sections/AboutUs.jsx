import Btn from "@components/ui/Btn";
import Image from "@node_modules/next/image";

const Facts = [
  {total : 200 , label : "Customer & partners"},
  {total : 500, label : "Place In The World"},
  {total : "1k", label : "Success Journey"},
]
const AboutUs = () => {
  return (
    <section id="about us" className="mt-[120px] bg-background-blueLight py-[20px]">
      <div className="container">
        <div className="flex flex-col justify-between gap-28 items-center md:flex-row ">
          {/* LEFT */}
          <div>
            <Image src="/about.png" alt="about us" width={580} height={633} quality={100} className="mx-auto" />
          </div>
          {/* RIGHT */}
          <div>
            <h6 className="uppercase text-primary-orange">about us</h6>
            <h3 className="text-[50px] font-bold leading-[40px]">
              The Best And Most <br /> trusted
              <span className="text-primary-orange"> service</span>
            </h3>
            <p className="text-[14px] mt-10 line-clamp-3">
              We are the largest holiday service provider in the world with
              partners and places spread all over the world by prioriti-zing
              service and customer satisfaction.
            </p>
            <Btn label="learn more" />
            {/* FACTS */}
            <div className="flex flex-wrap gap-5 mt-14">
        {Facts.map((item , index)=>(
          <div key={index} className="flex flex-col items-center gap-[10px] w-[100px] text-center">
            <span className="text-primary-orange/45 text-[30px] font-bold">{item.total}+</span>
            <span className="text-text-gray">{item.label}</span>
          </div>
        ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
