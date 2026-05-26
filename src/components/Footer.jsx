"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8FAFC] border-t border-gray-100 px-4 sm:px-8 py-8 mt-auto font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Left Side: Brand and Copyright */}
        <div className="flex flex-col gap-2">
          <Link href="/" className="inline-block group cursor-pointer">
            <span className="text-xl font-bold font-serif text-[#0052FF] tracking-wide transition-colors duration-300 group-hover:text-[#1A73E8]">
              Mentora
            </span>
          </Link>
          <p className="text-sm text-[#94A3B8]">
            &copy; {new Date().getFullYear()} Mentora Inc. All rights reserved.
          </p>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 sm:gap-8 text-[#334155]">
          <Link 
            href="/privacy" 
            className="text-sm font-medium hover:text-[#0052FF] transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms" 
            className="text-sm font-medium hover:text-[#0052FF] transition-colors duration-200"
          >
            Terms of Service
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium hover:text-[#0052FF] transition-colors duration-200"
          >
            Contact Support
          </Link>
        </div>

      </div>
    </footer>
  );
}