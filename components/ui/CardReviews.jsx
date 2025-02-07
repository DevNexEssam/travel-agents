import Image from "@node_modules/next/image";
import { FaStar } from "react-icons/fa6";

const CardReviews = ({comment , name}) => {
  return (
    <div className="bg-white px-6 py-4 rounded-[15px] flex flex-col gap-5 border-b border-transparent hover:border-primary-orange transition-all">
      <p className="text-[13px] text-text-gray line-clamp-3">
        {comment}
      </p>
      <div className="flex items-center gap-4">
        <div>
          <Image src="/man.png" alt="man photo" width={50} height={50} className="rounded-full" quality={100} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="capitalize text-[14px]">{name}</span>
          <span className="flex gap-2 items-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardReviews;
