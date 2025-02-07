import BtnTransparent from "@components/ui/BtnTransparent";
import Image from "@node_modules/next/image";

const Blogs = [
  {
    date: "21 june 2021",
    image : "/blog-1.png",
    tilte: "The Amazing Difference a Year of Travelling .",
    desc: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
    color : "bg-[#71C3FD]",
  },
  {
    date: "28 june 2021",
    image : "/blog-2.png",
    tilte: "Reflections on 5 Months of Travel: Time to Hang",
    desc: "Doting pet parents have a relentless need to constantly photograph every adorable pet moment...",
    color : "bg-[#FA7436]",
  },
  {
    date: "10 june 2021",
    image : "/blog-3.png",
    tilte: "How to Save Money While Visiting Africa .",
    desc: "It is easy to forget that animals are living creatures with a beating heart.",
    color : "bg-[#FC747B]",
  },
];
const Blog = () => {
  return (
    <section className="mt-[120px] py-[20px]">
      <div className="container">
        {/* FLEX */}
        <div className="flex flex-col justify-center md:flex-row md:justify-between items-center">
          <h2 className="text-[40px] capitalize text-text-primary font-bold">
            our blog
          </h2>
          <div className="flex flex-col justify-center items-center md:justify-between gap-5 md:items-start">
            <p className="text-text-gray">
              Stay up to date with the latest tech trands <br /> and news in the
              pets.
            </p>
            <BtnTransparent label="view all" />
          </div>
        </div>
        {/* Blog Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10 mt-10">
            {Blogs.map((item , index)=> (
                <div key={index} className="flex flex-col gap-5">
                    <div className={`${item.color}  p-5 pr-0 pb-0 rounded-[10px] `}>
                        <span className="block text-white text-[12px]">{item.date}</span>
                        <div className="flex flex-col items-end mt-4">
                        <Image src={item.image} alt="photo-blog" width={300} height={300} />
                        </div>
                    </div>
                    {/* info */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-text-primary text-[16px] font-bold">{item.tilte}</h4>
                        <p className="line-clamp-2 text-text-secondary text-[13px]">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
