"use client";
import React, { ChangeEvent } from "react";
import Button from "./button";
import { Check } from "lucide-react";

type Props = {
  title: string;
  checked: boolean;
  onChange: (e: boolean) => void;
  onEdit?: () => void;
};

const Task = ({ checked, onChange, title, onEdit }: Props) => {
  const handleChange = () => {
    onChange(!checked);
  };
  return (
    <div className="bg-white flex items-center justify-between py-8 px-5 my-3 mx-4 shadow-lg rounded">
      <div
        className="relative inline-flex items-center flex-1 gap-4"
        onClick={handleChange}
      >
        <input
          type="checkbox"
          className="peer appearance-none w-8 h-8 rounded-full border-2 border-[#071D55] checked:bg-[#53DA69] checked:border-[#49C25D]"
          checked={checked}
          onChange={(e) => e.stopPropagation()}
        />
        <Check className="absolute left-0 w-8 h-4 m-auto text-white opacity-0 peer-checked:opacity-100 peer-checked:text-[#399649]" />
        {/* <svg
          className="absolute inset-0 w-4 h-4 m-auto text-white opacity-0 peer-checked:opacity-100 peer-checked:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg> */}
        <p className="select-none peer-checked:text-[#8D8D8D] peer-checked:line-through text-[#071D55] text-[16px]">
          {title}
        </p>
      </div>
      <div className="w-14">
        <Button
          className="bg-white border border-[#071D55] text-[#071D55] rounded"
          onClick={onEdit}
          diabled={checked}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default Task;
