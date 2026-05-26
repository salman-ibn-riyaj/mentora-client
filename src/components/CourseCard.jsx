"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function CourseCard({ course }) {
  if (!course) return null;

  return (
    <div className="bg-white border border-gray-100 rounded-[24px] overflow-hidden flex flex-col justify-between p-3 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] group cursor-pointer w-full">
      {/* Top Half: Image & Text Info */}
      <div className="flex flex-col gap-4">
        {/* Aspect-Ratio Box for Next.js Image Tag */}
        <div className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden bg-gray-50">
          <Image
            src={
              course.thumbnail ||
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"
            }
            alt={course.title || "Course Thumbnail"}
            fill
            sizes="(max-w-7xl) 25vw, (max-w-md) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            priority={false}
          />

          {/* Dynamic Category Badge */}
          {course.category && (
            <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[9px] font-bold tracking-wide uppercase text-[#0F172A] px-2.5 py-1 rounded-full shadow-sm border border-white/20">
              {course.category}
            </span>
          )}
        </div>

        {/* Title Content Description Section */}
        <div className="px-2 flex flex-col gap-1.5">
          <h3 className="text-sm font-bold font-serif text-[#0F172A] leading-snug tracking-wide line-clamp-2 transition-colors duration-200 group-hover:text-[#0052FF]">
            {course.title}
          </h3>
          {course.duration && (
            <>
              <span className="text-[10px] text-[#94A3B8] font-mono">
                {course.duration}
              </span>
              <span className="text-[10px] text-[#94A3B8] font-mono">
                {course.instructor}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Bottom Half: Footer Line with Metrics and Pricing */}
      <div className="px-2 pt-4 mt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold">
        {/* Enrollments Metadata */}
        <div className="flex items-center gap-1.5 text-[#94A3B8]">
          <Link href={`/courses/${course._id}`}>
            <Button variant="ghost">Learn More</Button>
          </Link>
        </div>

        {/* Formatted Price Token */}
        <span className="text-[#0052FF] font-bold text-sm">
          ${course.price || "Free"}
        </span>
      </div>
    </div>
  );
}
