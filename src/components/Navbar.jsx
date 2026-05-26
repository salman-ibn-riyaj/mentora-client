// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation"; // useRouter এখন আর লাগছে না
// import { HiMenu, HiX } from "react-icons/hi";
// import { Button } from "@heroui/react"; // HeroUI v3 syntax

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname(); // বর্তমান পাথ ট্র্যাক করার জন্য

//   const toggleMenu = () => setIsOpen(!isOpen);

//   // Logo Component with a smooth interactive hover animation
//   const Logo = () => (
//     <Link href="/" className="flex items-center gap-2 group cursor-pointer">
//       <div className="bg-[#1A73E8] p-2 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 shadow-sm">
//         <svg
//           className="w-6 h-6 text-white"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//           />
//         </svg>
//       </div>
//       <span className="text-xl font-bold font-serif text-[#0F172A] tracking-wide transition-colors duration-300 group-hover:text-[#1A73E8]">
//         Mentora
//       </span>
//     </Link>
//   );

//   return (
//     <nav className="w-full bg-[#F8FAFC] border-b border-gray-100 sticky top-0 z-50 px-4 sm:px-8 py-3 font-mono">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Left Side: Logo Element */}
//         <Logo />

//         {/* Center Navigation: Links (Hidden on Mobile/Tablet, visible on Desktop) */}
//         <div className="hidden md:flex items-center gap-8 text-[#475569]">
//           <Link
//             href="/"
//             className={`transition-colors ${pathname === "/" ? "text-[#1A73E8] font-semibold" : "hover:text-black"}`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/courses"
//             className={`transition-colors ${pathname === "/courses" ? "text-[#1A73E8] font-semibold" : "hover:text-black"}`}
//           >
//             Courses
//           </Link>
//           <Link
//             href="/add-course"
//             className={`transition-colors ${pathname === "/add-course" ? "text-[#1A73E8] font-semibold" : "hover:text-black"}`}
//           >
//             Add Course
//           </Link>
//           <Link
//             href="/dashboard"
//             className={`transition-colors ${pathname === "/dashboard" ? "text-[#1A73E8] font-semibold" : "hover:text-black"}`}
//           >
//             Dashboard
//           </Link>
//         </div>

//         {/* Right Side: Authentication Buttons (Desktop Layout) */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link
//             href="/login"
//             className={`transition-colors ${pathname === "/login" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}
//           >
//             Login
//           </Link>
          
//           {/* Desktop "Join Free" Button wrapped with Link properly */}
//           <Link href="/signup">
//             <Button
//               radius="full"
//               className="bg-[#0070F3] text-white font-semibold px-6 py-2 shadow-[0_4px_14px_0_rgba(0,112,243,0.39)] transition-all duration-300 ease-in-out hover:bg-[#0061d5] hover:shadow-[0_6px_20px_rgba(0,112,243,0.47)] hover:-translate-y-0.5 active:translate-y-0"
//             >
//               Join Free
//             </Button>
//           </Link>
//         </div>

//         {/* Mobile & Tablet Toggle Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={toggleMenu}
//             className="text-2xl text-[#475569] focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             {isOpen ? <HiX /> : <HiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Drawer Dropdown Menu Panel */}
//       {isOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-[#F8FAFC] border-b border-gray-200 py-4 px-6 flex flex-col gap-4 shadow-lg transition-all duration-300">
//           <Link
//             href="/"
//             onClick={toggleMenu}
//             className={`py-1 ${pathname === "/" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/courses"
//             onClick={toggleMenu}
//             className={`py-1 ${pathname === "/courses" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}
//           >
//             Courses
//           </Link>
//           <Link
//             href="/add-course"
//             onClick={toggleMenu}
//             className={`py-1 ${pathname === "/add-course" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}
//           >
//             Add Course
//           </Link>
//           <Link
//             href="/dashboard"
//             onClick={toggleMenu}
//             className={`py-1 ${pathname === "/dashboard" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}
//           >
//             Dashboard
//           </Link>

//           <hr className="border-gray-200 my-1" />

//           <div className="flex flex-col gap-3">
//             <Link
//               href="/login"
//               onClick={toggleMenu}
//               className={`text-center py-2 ${pathname === "/login" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}
//             >
//               Login
//             </Link>
            
//             {/* Mobile "Join Free" Button - FIXED WITH NATIVE LINK */}
//             <Link href="/signup" onClick={toggleMenu} className="w-full block">
//               <Button
//                 radius="full"
//                 className="bg-[#0070F3] text-white font-semibold w-full py-3 shadow-md hover:bg-[#0061d5]"
//               >
//                 Join Free
//               </Button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenu, HiX, HiOutlineViewGrid, HiOutlineLogout } from "react-icons/hi";
import { Button } from "@heroui/react";
// Better Auth ক্লায়েন্ট মেথড (আপনার প্রজেক্টের পাথ অনুযায়ী প্রয়োজনে পরিবর্তন করে নিবেন)
import { useSession, signOut } from "@/lib/auth-client"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনুর স্টেট
  const [dropdownOpen, setDropdownOpen] = useState(false); // প্রোফাইল ড্রপডাউনের স্টেট
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const { data: session } = useSession();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // ড্রপডাউনের বাইরে ক্লিক করলে যেন ড্রপডাউন বন্ধ হয়ে যায়
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // লগআউট ফাংশন
  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          setDropdownOpen(false);
          setIsOpen(false);
          window.location.href = "/login"; // লগআউট হলে রিডাইরেক্ট
        },
      },
    });
  };

  // Logo Component
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
        
        {/* Left Side: Logo */}
        <Logo />

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[#475569]">
          <Link href="/" className={`transition-colors ${pathname === "/" ? "text-[#1A73E8] font-semibold" : "hover:text-black"}`}>
            Home
          </Link>
          <Link href="/courses" className={`transition-colors ${pathname === "/courses" ? "text-[#1A73E8] font-semibold" : "hover:text-black"}`}>
            Courses
          </Link>
          <Link href="/add-course" className={`transition-colors ${pathname === "/add-course" ? "text-[#1A73E8] font-semibold" : "hover:text-black"}`}>
            Add Course
          </Link>
          <Link href="/dashboard" className={`transition-colors ${pathname === "/dashboard" ? "text-[#1A73E8] font-semibold" : "hover:text-black"}`}>
            Dashboard
          </Link>
        </div>

        {/* Right Side: Auth / Profile Dropdown (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {session ? (
            /* 🎯 লগইন থাকলে প্রোফাইল পিল এবং ড্রপডাউন দেখাবে (আপনার ইমেজের ডিজাইন অনুযায়ী) */
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-3 bg-[#64748B] hover:bg-[#475569] text-white px-4 py-2 rounded-full transition-all cursor-pointer shadow-sm select-none"
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                  <Image
                    src={session.user.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb"}
                    alt="Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col text-left pr-1">
                  <span className="text-xs font-bold leading-tight tracking-wide">{session.user.name || "Salman Shah"}</span>
                  <span className="text-[10px] text-gray-300 leading-none mt-0.5">Student</span>
                </div>
              </button>

              {/* ড্রপডাউন মেনু বক্স */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-3xl border border-gray-100 shadow-xl p-5 flex flex-col gap-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* ওয়েলকাম ও ইমেইল পার্ট */}
                  <div>
                    <h4 className="text-base font-bold text-[#0F172A] tracking-wide">Welcome back!</h4>
                    <p className="text-xs text-[#64748B] truncate mt-0.5 opacity-80">{session.user.email}</p>
                  </div>

                  <hr className="border-gray-100" />

                  {/* ড্রপডাউন লিংকস */}
                  <div className="flex flex-col gap-1">
                    <Link
                      href="/dashboard"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#0F172A] hover:bg-gray-50 transition-colors"
                    >
                      <HiOutlineViewGrid className="text-xl text-[#0F172A]" />
                      <span>Dashboard</span>
                    </Link>

                    {/* লগআউট বাটন */}
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#EF4444] hover:bg-red-50/50 transition-colors w-full text-left font-semibold cursor-pointer"
                    >
                      <HiOutlineLogout className="text-xl" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* লগইন না থাকলে নরমাল বাটন */
            <>
              <Link href="/login" className={`transition-colors ${pathname === "/login" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}>
                Login
              </Link>
              <Link href="/signup">
                <Button radius="full" className="bg-[#0070F3] text-white font-semibold px-6 py-2 shadow-md hover:bg-[#0061d5]">
                  Join Free
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl text-[#475569] focus:outline-none" aria-label="Toggle Menu">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F8FAFC] border-b border-gray-200 py-4 px-6 flex flex-col gap-4 shadow-lg z-50">
          <Link href="/" onClick={toggleMenu} className={`py-1 ${pathname === "/" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}>
            Home
          </Link>
          <Link href="/courses" onClick={toggleMenu} className={`py-1 ${pathname === "/courses" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}>
            Courses
          </Link>
          <Link href="/add-course" onClick={toggleMenu} className={`py-1 ${pathname === "/add-course" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}>
            Add Course
          </Link>
          <Link href="/dashboard" onClick={toggleMenu} className={`py-1 ${pathname === "/dashboard" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}>
            Dashboard
          </Link>

          <hr className="border-gray-200 my-1" />

          {/* Mobile Auth / Profile Info */}
          <div className="flex flex-col gap-3">
            {session ? (
              <div className="flex flex-col gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={session.user.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb"}
                      alt="Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#0F172A]">{session.user.name || "Salman Shah"}</span>
                    <span className="text-xs text-[#64748B] truncate max-w-[180px]">{session.user.email}</span>
                  </div>
                </div>
                <Button
                  onClick={handleLogout}
                  radius="xl"
                  className="bg-red-50 text-[#EF4444] font-semibold w-full mt-1 border border-red-100 hover:bg-red-100"
                >
                  Log Out
                </Button>
              </div>
            ) : (
              <>
                <Link href="/login" onClick={toggleMenu} className={`text-center py-2 ${pathname === "/login" ? "text-[#1A73E8] font-semibold" : "text-[#475569] hover:text-black"}`}>
                  Login
                </Link>
                <Link href="/signup" onClick={toggleMenu} className="w-full block">
                  <Button radius="full" className="bg-[#0070F3] text-white font-semibold w-full py-3 shadow-md hover:bg-[#0061d5]">
                    Join Free
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}