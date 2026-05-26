"use client";


import Image from "next/image";
import Link from "next/link";

import { useSession } from "@/lib/auth-client"; 
import { Button } from "@heroui/react";

export default function DashboardPage() {

  const { data: session, isPending } = useSession();


  if (isPending) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white font-mono">
        <p className="text-sm tracking-widest animate-pulse text-[#475569]">Loading profile...</p>
      </div>
    );
  }


  // ২. ইউজার যদি লগইন করা না থাকে (নিরাপদ চেকিং)
// session অথবা session.user যদি না থাকে, তবেই সে রিডাইরেক্ট করবে
if (!session || !session.user) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-white font-mono text-center p-4">
        <p className="text-sm font-semibold text-red-500">You are not authorized! ⚠️</p>
        <p className="text-xs text-[#475569]">Please login first to see your enrolled courses.</p>
        <Link href="/login">
          <Button radius="md" className="bg-[#0070F3] text-white font-semibold px-6">
            Go to Login
          </Button>
        </Link>
      </div>
    );
  }


  return (
    <div className="min-h-screen w-full bg-white px-4 py-10 sm:px-8 lg:px-16 font-mono text-[#0F172A]">
      <div className="mx-auto max-w-7xl">
        
     
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          
          
          <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center lg:col-span-1 h-fit">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-gray-100 sm:h-28 sm:w-28">
              <Image
                src={session?.user?.image} // ইউজারের ছবি না থাকলে ডেমো ছবি
                alt={session?.user?.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <h3 className="mt-4 text-lg font-bold sm:text-xl tracking-wide">
              {session.user.name}
            </h3>
            
            <p className="mt-1 text-xs text-[#475569] break-all max-w-full px-2 opacity-60 tracking-wider">
              {session.user.email}
            </p>
          </div>

          {/* ডান পাশের এনরোল্ড কোর্স সেকশন */}
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-xl font-bold tracking-wide text-left sm:text-2xl lg:text-3xl">
              My Enrolled Courses
            </h2>
            
            {/* কোর্স কন্টেইনার বক্স */}
            <div className="flex min-h-[250px] sm:min-h-[300px] w-full flex-col items-center justify-center rounded-2xl border border-gray-100 bg-[#F8FAFC] p-6 text-center">
              <p className="text-sm tracking-wider text-[#475569] opacity-70 mb-5">
                No courses yet
              </p>
              
              <Link href="/courses" className="w-full max-w-[200px]">
                <Button
                  radius="xl"
                  className="w-full bg-[#0070F3] text-sm text-white font-semibold py-3 shadow-[0_4px_14px_rgba(0,112,243,0.3)] transition-all duration-300 hover:bg-[#0061d5] hover:-translate-y-0.5"
                >
                  Browse Courses
                </Button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}