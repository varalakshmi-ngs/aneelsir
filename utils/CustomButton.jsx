// components/CustomButton.jsx
"use client";
import Link from "next/link";

const CustomButton = ({
  text,
  href,
  bgColor = "bg-[#281E5C]",
  hoverColor = "hover:bg-[#1f1749]",
  textColor = "text-white",
}) => {
  return (
    <Link href={href}>
      <button
        className={`${bgColor} ${hoverColor} ${textColor} px-6 py-3 rounded-full font-medium transition cursor-pointer`}
      >
        {text}
      </button>
    </Link>
  );
};

export default CustomButton;
