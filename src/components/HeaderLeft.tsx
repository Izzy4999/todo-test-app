import Image from "next/image";
import React from "react";

type Props = {username:string};

const HeaderLeft = ({username}: Props) => {
  return (
    <div className="bg-[#3556AB] text-white h-32 flex items-start py-4 px-5 gap-4 font-roboto">
      <div>
        <Image
          src={"/profile.png"}
          alt=""
          width={50}
          height={50}
          className="rounded-full w-[50px] h-[50px]"
        />
      </div>
      <div>
        <h1 className="text-[16px] font-[500]">Hello {username}</h1>
        <p className="italic text-[25px] font-[100]">
          What are your plans for today?
        </p>
      </div>
    </div>
  );
};

export default HeaderLeft;
