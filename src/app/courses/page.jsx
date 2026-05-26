"use client"; // 🚀 পুরো পেজটাকে ক্লায়েন্ট কম্পোনেন্ট বানিয়ে দিলাম যেন লাইভ সার্চ এক শটে কাজ করে

import CourseCard from "@/components/CourseCard";
import SearchBar from "@/components/SearchBar";
import React, { useState, useEffect } from "react";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🎯 ডাটাবেজ থেকে কোর্স নিয়ে আসার মেইন ফাংশন
  const fetchCourses = async (searchTerm = "") => {
    setLoading(true);
    try {
      // আপনার পোর্ট ৫০MDE১ এবং ডিরেক্ট /courses ইউআরএল
      const url = searchTerm 
        ? `http://localhost:5001/courses?title=${encodeURIComponent(searchTerm)}` 
        : `http://localhost:5001/courses`;

      const res = await fetch(url);
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    } finally {
      setLoading(false);
    }
  };

  // শুরুতে পেজ লোড হলে সব কোর্স নিয়ে আসবে
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <section className="w-full bg-[#F8FAFC] px-4 sm:px-8 py-16 sm:py-20 text-center select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Typography Content Wrapper */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-[#0F172A] tracking-tight leading-[1.15]">
            Explore Our{" "}
            <span className="text-[#0052FF] relative inline-block transition-transform duration-300 hover:scale-105">
              Premium Courses
            </span>
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] font-mono max-w-xl sm:max-w-2xl mx-auto leading-relaxed mt-1">
            Find the perfect course to advance your career. Learn from the best
            experts in the field.
          </p>
        </div>

        {/* 🎯 সার্চবার (এখানে সরাসরি fetchCourses ফাংশনটা পাস করে দিচ্ছি) */}
        <div className="w-full pt-2">
          <SearchBar onSearch={fetchCourses} />
        </div>
      </div>

      <section className="w-full bg-[#F8FAFC] px-4 sm:px-8 py-12 sm:py-16 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          
          {/* Section Heading Label */}
          <div className="flex flex-col items-start text-left gap-1 border-b border-gray-100 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0F172A] tracking-tight">
              All Available Courses
            </h2>
            <p className="text-xs text-[#64748B] font-mono">
              {loading ? "Loading..." : `Showing ${courses.length} high-fidelity developer learning programs`}
            </p>
          </div>

          {/* লোডিং স্টেট */}
          {loading ? (
            <div className="w-full text-center py-16 text-[#64748B] text-sm">
              Loading courses from MongoDB...
            </div>
          ) : courses.length === 0 ? (
            <div className="w-full text-center py-16 text-[#64748B] text-sm border border-dashed border-gray-200 rounded-[24px] bg-white">
              No courses found matching your query.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
              {courses.map((singleCourse) => (
                <CourseCard 
                  key={singleCourse._id || singleCourse.id} 
                  course={singleCourse} 
                />
              ))}
            </div>
          )}

        </div>
      </section>
    </section>
  );
}