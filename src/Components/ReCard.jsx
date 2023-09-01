import React from "react";
import { FaShopware } from "react-icons/fa";

export default function ReCard({
  color1Percentage,
  color2Percentage,
  color3Percentage,
  color4Percentage,
}) {
  return (
    <div className="flex flex-col justify-between px-10 py-5 w-[300px] h-[200px] bg-white rounded-[60px] shadow">
      <div className="flex w-full">
        <h1 className="text-black text-base font-normal">Active retailers</h1>
        <FaShopware className="w-6 h-6 ml-2" />
      </div>
      <h4 className="text-lime-500 text-start text-2xl font-normal">25</h4>
      <div className="w-full">
        <div
          style={{
            background: `linear-gradient(to right, #f72585 ${color1Percentage}%, #f72585 ${color1Percentage}%, #7209b7 ${color1Percentage}% ${color2Percentage}%, #7209b7 ${color2Percentage}%, #3a0ca3 ${color2Percentage}% ${color3Percentage}%, #3a0ca3 ${color3Percentage}%, #4361ee ${color3Percentage}% ${color4Percentage}%, #4361ee ${color4Percentage}%, #4cc9f0 ${color4Percentage}%)`,
          }}
          className="w-full h-[13px] rounded-[20px]"
        />
      </div>
      <a
        href="#"
        className="underline text-right text-black text-xs mt-2 font-normal"
      >
        Retailer details 🔻
      </a>
    </div>
  );
}
