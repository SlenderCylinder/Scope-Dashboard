import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BenCard({ mp, fp }) {
  return (
    <div className="flex mr-20 flex-col justify-between px-10 py-5 w-[300px] h-[200px] bg-white rounded-[60px] shadow">
      <div className="flex w-full">
        <h1 className="text-black text-base font-normal">
          Active beneficiaries️
        </h1>
        <FaUser className="w-6 h-6 ml-2" />
      </div>
      <h4 className="text-lime-500 text-start text-2xl font-normal">20567</h4>
      <div className="w-full">
        <div className="w-full h-[13px] bg-purple-800 rounded-[20px]">
          <div
            style={{ width: `${mp}%` }}
            className="w-[160px] h-[13px] bg-yellow-500 rounded-tl-[20px] rounded-bl-[20px]"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col">
          <div className="flex items-center w-full h-1/2">
            <div className="w-[7px] h-[7px] bg-yellow-500 rounded-full mr-2" />
            <div className="text-black text-xs font-normal">Male</div>
          </div>
          <div className="flex items-center w-full h-1/2">
            <div className="w-[7px] h-[7px] bg-purple-800 rounded-full mr-2" />
            <div className="text-black text-xs font-normal">Female</div>
          </div>
        </div>
        <Link
          to="/createBeneficiary"
          className=" hover:underline text-right text-black text-xs mt-2 font-normal"
        >
          Create beneficiary ➕
        </Link>
      </div>
    </div>
  );
}
