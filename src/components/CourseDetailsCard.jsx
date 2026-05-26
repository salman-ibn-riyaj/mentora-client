"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

export default function CourseDetailsCard({ courseData }) {
  // ডাটা না আসলে যেন ক্র্যাশ না করে তার জন্য সেফটি গার্ড
  if (!courseData) return null;

  return (
    <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto rounded-2xl overflow-hidden border border-gray-100 bg-[#F8FAFC] shadow-md transition-all duration-300 hover:shadow-lg font-mono">
      {/* Course Thumbnail using Next.js Image */}
      {/* h-56 এবং sm:h-64/md:h-72 ব্যবহার করায় মোবাইল থেকে বড় স্ক্রিন সবখানেই ইমেজটি পুরো স্ক্রিন জুড়ে পারফেক্ট রেশিওতে থাকবে */}
      <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden bg-gray-200">
        <Image
          src={courseData.thumbnail}
          alt={courseData.title}
          fill
          sizes="(max-w-768px) 100vw, 600px"
          priority={true}
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-3 left-4 bg-[#1A73E8] text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-sm">
          {courseData.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 md:p-8 flex flex-col gap-5">
        {/* Title & Instructor */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-serif leading-tight hover:text-[#1A73E8] transition-colors cursor-pointer">
            {courseData.title}
          </h3>
          <p className="text-sm sm:text-base text-[#475569] mt-2">
            Instructor: <span className="font-semibold text-black">{courseData.instructor}</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#475569] leading-relaxed line-clamp-3">
          {courseData.description}
        </p>

        {/* Meta Info: Duration & Price */}
        <div className="flex items-center justify-between border-t border-b border-gray-200/60 py-4 my-1">
          <div className="flex items-center gap-2 text-sm sm:text-base text-[#475569]">
            <svg
              className="w-5 h-5 text-[#1A73E8]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span>{courseData.duration}</span>
          </div>
          <div className="text-2xl font-bold text-[#0F172A]">
            ${courseData.price}
          </div>
        </div>

        {/* Action Button */}
        <Button
          radius="xl"
          size="lg"
          className="w-full bg-[#0070F3] text-white font-semibold py-3 text-base shadow-[0_4px_14px_0_rgba(0,112,243,0.39)] transition-all duration-300 ease-in-out hover:bg-[#0061d5] hover:shadow-[0_6px_20px_rgba(0,112,243,0.47)] hover:-translate-y-0.5 active:translate-y-0"
        >
          Enroll Now
        </Button>
      </div>
    </div>
  );
}