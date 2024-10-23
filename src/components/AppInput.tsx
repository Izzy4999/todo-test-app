"use client";
import React, { ChangeEvent } from "react";
interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
  className?: string;
}

const AppInput = ({
  className = " py-2 px-2 text-xl",
  onChange,
  placeholder,
  value,
}: Props) => {
  return (
    <div className="bg-[#FDFDFD] border-[#CBCBCB] border rounded-lg overflow-hidden font-roboto">
      <input
        className={`w-full outline-none ${className} `}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default AppInput;
