"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react"; // HeroUI v3

export default function NotFound() {
  return (
    <div className="w-full flex-grow bg-[#F8FAFC] flex flex-col items-center justify-center px-4 sm:px-6 py-16 font-mono text-center">
      <div className="max-w-md w-full flex flex-col items-center gap-6">
        {/* Animated Error Code Badge */}
        <div className="relative group select-none">
          <h1 className="text-9xl font-black font-serif text-[#1A73E8] tracking-widest transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1">
            404
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#1A73E8] to-[#0070F3] rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
        </div>

        {/* Messaging Text */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight">
            Page Not Found
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed max-w-xs sm:max-w-sm mx-auto">
            Oops! The page you are looking for doesn't exist, has been moved, or
            is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
          <Link href={"/"}>
            {" "}
            <Button
              radius="full"
              className="bg-[#0070F3] text-white font-semibold px-8 py-2.5 w-full sm:w-auto shadow-[0_4px_14px_0_rgba(0,112,243,0.39)] transition-all duration-300 ease-in-out hover:bg-[#0061d5] hover:shadow-[0_6px_20px_rgba(0,112,243,0.47)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Go Back Home
            </Button>
          </Link>

          <Button
            radius="full"
            variant="light"
            className="border border-gray-200 text-[#475569] font-medium px-8 py-2.5 w-full sm:w-auto bg-transparent hover:bg-gray-100 hover:text-black transition-all duration-200"
          >
            Browse Courses
          </Button>
        </div>
      </div>
    </div>
  );
}
