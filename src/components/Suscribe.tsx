import Image from "next/image";
import React from "react";

type Props = {
  price?: number;
};

const Suscribe = ({ price = 0 }: Props) => {
  return (
    <div className="bg-[#CDE53D] text-[#071D55] flex items-center relative gap-8 py-8 px-8">
      <div className="">
        <Image src={"/cup.png"} alt="" width={50} height={40} />
      </div>
      <div>
        <p className="font-bold text-lg">Go Pro Upgrade Now</p>
      </div>
      <div className="absolute top-0 right-4 w-12 h-14 bg-[#071D55] flex items-center justify-center">
        <p className="text-[#F2C94C]">${price}</p>
      </div>
    </div>
  );
};

export default Suscribe;
