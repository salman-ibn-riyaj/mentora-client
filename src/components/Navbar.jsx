"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // useRouter এখন আর লাগছে না
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "@heroui/react"; // HeroUI v3 syntax

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // বর্তমান পাথ ট্র্যাক করার জন্য

  const toggleMenu = () => setIsOpen(!isOpen);

  // Logo Component with a smooth interactive hover animation
  const Logo = () => (
    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
      <div className="bg-[#1A73E8] p-2 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 shadow-sm">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>
      <span className="text-xl font-bold font-serif text-[#0F172A] tracking-wide transition-colors duration-300 group-hover:text-[#1A73E8]">
        Mentora
      </span>
    </Link>
  );

  return (
    <nav className="w-full bg-[#F8FAFC] border-b border-gray-100 sticky top-0 z-50 px-4 sm:px-8 py-3 font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side: Logo Element */}
        <Logo />

        {/* Center Navigation: Links (Hidden on Mobile/Tablet, visible on Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-[#475569]">
          <Link
            href="/"
            className={`transition-colors ${pathname === "/" ? "text-[#1A73E8] font-semibold" : "hover:text-black"}`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className={`transition-colors ${pathname === "/courses" ? "text-[#1A73E8] font-semibold" : "hover:text-black"}`}
          >
            Courses
          </Link>
          <Link
            href="/add-course"
            className={`transition-colors ${pathname === "/add-course" ? "text-[#1A73E8] font-semibold" : "hover:text-black"}`}
          >
            Add Course
          </Link>
          <Link
            href="/dashboard"
            className={`transition-colors ${pathname === "/dashboard" ? "text-[#1A73E8] font-semibold" : "hover:text-black"}`}
          >
            Dashboard
          </Link>
        </div>

        {/* Right Side: Authentication Buttons (Desktop Layout) */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/login"
            className={`transition-colors ${pathname === "/login" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}
          >
            Login
          </Link>
          
          {/* Desktop "Join Free" Button wrapped with Link properly */}
          <Link href="/signup">
            <Button
              radius="full"
              className="bg-[#0070F3] text-white font-semibold px-6 py-2 shadow-[0_4px_14px_0_rgba(0,112,243,0.39)] transition-all duration-300 ease-in-out hover:bg-[#0061d5] hover:shadow-[0_6px_20px_rgba(0,112,243,0.47)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Join Free
            </Button>
          </Link>
        </div>

        {/* Mobile & Tablet Toggle Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl text-[#475569] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F8FAFC] border-b border-gray-200 py-4 px-6 flex flex-col gap-4 shadow-lg transition-all duration-300">
          <Link
            href="/"
            onClick={toggleMenu}
            className={`py-1 ${pathname === "/" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            onClick={toggleMenu}
            className={`py-1 ${pathname === "/courses" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}
          >
            Courses
          </Link>
          <Link
            href="/add-course"
            onClick={toggleMenu}
            className={`py-1 ${pathname === "/add-course" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}
          >
            Add Course
          </Link>
          <Link
            href="/dashboard"
            onClick={toggleMenu}
            className={`py-1 ${pathname === "/dashboard" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}
          >
            Dashboard
          </Link>

          <hr className="border-gray-200 my-1" />

          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              onClick={toggleMenu}
              className={`text-center py-2 ${pathname === "/login" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}
            >
              Login
            </Link>
            
            {/* Mobile "Join Free" Button - FIXED WITH NATIVE LINK */}
            <Link href="/signup" onClick={toggleMenu} className="w-full block">
              <Button
                radius="full"
                className="bg-[#0070F3] text-white font-semibold w-full py-3 shadow-md hover:bg-[#0061d5]"
              >
                Join Free
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}