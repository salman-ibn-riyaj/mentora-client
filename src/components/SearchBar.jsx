"use client";

import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { Button } from "@heroui/react"; // HeroUI v3 syntax

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <form 
      onSubmit={handleSearchSubmit}
      className="w-full max-w-3xl mx-auto bg-white border border-gray-100 rounded-[24px] p-2 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300 focus-within:border-gray-200 focus-within:shadow-[0_8px_30px_rgba(26,115,232,0.05)]"
    >
      <div className="flex items-center gap-3 pl-3 sm:pl-4 grow">
        {/* Search Icon */}
        <HiSearch className="text-[#94A3B8] text-xl shrink-0" />
        
        {/* Input Field */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for courses (e.g. Next.js, Web Design...)"
          className="w-full bg-transparent border-none outline-none text-sm font-mono text-[#0F172A] placeholder-[#94A3B8]"
        />
      </div>

      {/* HeroUI Search Action Button */}
      <Button
        type="submit"
        radius="lg"
        className="bg-[#0070F3] text-white font-mono font-bold text-xs sm:text-sm px-6 sm:px-8 py-2 h-11 shadow-[0_4px_14px_0_rgba(0,112,243,0.3)] hover:bg-[#0061d5] transition-all duration-200"
      >
        Search
      </Button>
    </form>
  );
}

