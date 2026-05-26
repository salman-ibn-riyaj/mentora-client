"use client";

import React from "react";
import { FiUsers, FiAward, FiPlayCircle } from "react-icons/fi"; // Matching React Icons

const BENEFITS_DATA = [
  {
    icon: <FiUsers className="text-xl text-[#0F172A]" />,
    title: "Expert Instructors",
    description: "Learn from industry professionals with real-world experience.",
  },
  {
    icon: <FiAward className="text-xl text-[#0F172A]" />,
    title: "Verified Certificates",
    description: "Earn certificates that are recognized by top companies worldwide.",
  },
  {
    icon: <FiPlayCircle className="text-xl text-[#0F172A]" />,
    title: "Lifetime Access",
    description: "Learn at your own pace with lifetime access to all your courses.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-[#F8FAFC] px-4 sm:px-8 py-16 sm:py-24 font-mono text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#0052FF]">
            Our Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0F172A] tracking-tight">
            Why Choose Mentora?
          </h2>
        </div>

        {/* Responsive Grid Cards Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mt-4">
          {BENEFITS_DATA.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100/80 rounded-[24px] p-8 sm:p-10 flex flex-col items-center text-center gap-5 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] group"
            >
              {/* Minimalist Icon Badge Wrapper */}
              <div className="p-4 bg-[#EEF2F6] rounded-[16px] transition-colors duration-300 group-hover:bg-[#E8F0FE] flex items-center justify-center">
                {benefit.icon}
              </div>

              {/* Text Layout blocks */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold font-serif text-[#0F172A] tracking-wide transition-colors duration-200 group-hover:text-[#0052FF]">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-[260px] mx-auto font-mono">
                  {benefit.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}