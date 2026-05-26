import React from "react";
import Link from "next/link";

import { HiArrowRight} from "react-icons/hi";
import FeaturedCard from "./FeaturedCard";

export default async function FeaturedCourses() {

    const res = await fetch('http://localhost:5001/featuredCourses');
    const courses = await res.json();
    console.log(courses)
  return (
    <section className="w-full bg-[#F8FAFC] px-4 sm:px-8 py-16 sm:py-24 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Section Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-3 text-left">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#0052FF]">
              Top Rated
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0F172A] tracking-tight">
              Featured Courses
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-xl leading-relaxed mt-1">
              Handpicked premium courses designed to help you master the most in-demand skills in the industry today.
            </p>
          </div>

          {/* "View All Courses" Link Button */}
          <Link 
            href="/courses" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F172A] hover:text-[#0052FF] transition-colors duration-200 group self-start sm:self-auto shrink-0 pb-1"
          >
            <span>View All Courses</span>
            <HiArrowRight className="text-base transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Dynamic Responsive Grid Layout */}
        {courses.length === 0 ? (
          <div className="w-full text-center py-12 text-[#64748B] text-sm border border-dashed border-gray-200 rounded-2xl bg-white">
            No courses available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {courses.map((course) => (
              <FeaturedCard course={course} key={course._id}></FeaturedCard>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}