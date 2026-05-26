"use client";

import SearchBar from "@/components/SearchBar";
import React from "react";
// Make sure the path matches your structure

export default function Courses({ onSearchHandling }) {
  return (
    <section className="w-full bg-[#F8FAFC] px-4 sm:px-8 py-16 sm:py-20 text-center select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
        
        {/* Typography Content Wrapper */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-[#0F172A] tracking-tight leading-[1.15]">
            Explore Our{" "}
            <span className="text-[#0052FF] relative inline-block transition-transform duration-300 hover:scale-105">
              Premium Courses
            </span>
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] font-mono max-w-xl sm:max-w-2xl mx-auto leading-relaxed mt-1">
            Find the perfect course to advance your career. Learn from the best experts in the field.
          </p>
        </div>

        {/* Separated Search Bar Container Block */}
        <div className="w-full pt-2">
          <SearchBar onSearch={onSearchHandling} />
        </div>

      </div>
    </section>
  );
}