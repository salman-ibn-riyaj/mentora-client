import Image from "next/image";
import React from "react";
import { HiUserGroup } from "react-icons/hi";

const FeaturedCard = ({course}) => {
  return (
    <div className="bg-white border border-gray-100 rounded-[24px] overflow-hidden flex flex-col justify-between p-3 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] group cursor-pointer">
      {/* Upper Content Group */}
      <div className="flex flex-col gap-4">
        {/* Image Frame with Absolute Category Tag */}
        <div className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden bg-gray-100">
          <Image
            src={
              course.thumbnail ||
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
            }
            alt={course.title}
            fill
            sizes="(max-w-7xl) 25vw, 50vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          {course.category && (
            <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[9px] font-bold tracking-wide uppercase text-[#0F172A] px-2.5 py-1 rounded-full shadow-sm border border-white/20">
              {course.category}
            </span>
          )}
        </div>

        {/* Course Details Text */}
        <div className="px-2 flex flex-col gap-2">
          <h3 className="text-sm font-bold font-serif text-[#0F172A] leading-snug tracking-wide line-clamp-2 transition-colors duration-200 group-hover:text-[#0052FF]">
            {course.title}
          </h3>
        </div>
      </div>

      {/* Lower Footer Group (Metrics and Price Line) */}
      <div className="px-2 pt-4 mt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold">
        {/* Enrollments Counter */}
        <div className="flex items-center gap-1.5 text-[#94A3B8]">
          <HiUserGroup className="text-sm text-[#94A3B8]" />
          <span className="text-[11px]">{course.studentsCount || 0}</span>
        </div>

        {/* Price Badge */}
        <span className="text-[#0052FF] font-bold text-sm">
          ${course.price}
        </span>
      </div>
    </div>
  );
};

export default FeaturedCard;
