import React from "react";

const BtnTransparent = ({label}) => {
  return (
    <button className="px-[35px] w-max py-3 rounded-[8px] text-[12px] text-primary-orange capitalize block border border-primary-orange hover:bg-primary-orange hover:text-white transition-all">
      {label}
    </button>
  );
};

export default BtnTransparent;
