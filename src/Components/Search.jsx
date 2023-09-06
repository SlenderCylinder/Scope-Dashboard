import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Search({ searchQuery, onSearchQueryChange }) {
  return (
    <div className="relative w-[300px]">
      <input
        type="text"
        placeholder="Search beneficiary"
        className="w-full h-9 p-2 bg-neutral-200 bg-opacity-95 rounded-[10px] text-zinc-700 text-opacity-100 text-[17px] font-normal leading-snug focus:outline-none focus:ring-2 focus:ring-grey-500"
        value={searchQuery}
        onChange={onSearchQueryChange}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <FaSearch className="w-4 h-4 text-zinc-700 text-opacity-60" />
      </div>
    </div>
  );
}
