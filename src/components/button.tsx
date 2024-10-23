"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  diabled?: boolean;
};

const Button = ({
  className = "bg-sky-500 border-2 border-[#720D0D] rounded-md shadow-sm capitalize",
  children,
  onClick,
  diabled = false,
}: Props) => {
  return (
    <button
      className={`flex item-center justify-center w-full py-2 ${className}`}
      onClick={onClick}
      disabled={diabled}
    >
      {children}
    </button>
  );
};

export default Button;
