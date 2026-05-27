"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { toast } from "react-hot-toast";

import {
  HiOutlineDocumentText,
  HiOutlineBookOpen,
  HiOutlineLink,
  HiOutlineTag,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
} from "react-icons/hi";
import { authClient } from "@/lib/auth-client";

export default function AddCourseForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    thumbnailUrl: "",
    category: "",
    price: "",
    duration: "",
  });
  console.log(courseData);

  const categories = [
    { value: "web-development", label: "Web Development" },
    { value: "programming", label: "Programming" },
    { value: "design", label: "UI/UX Design" },
    { value: "marketing", label: "Digital Marketing" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasValidTitle = courseData.title.trim().length > 4;
    const hasValidDescription = courseData.description.trim().length > 10;
    const hasCategory = courseData.category !== "";
    const hasValidPrice = Number(courseData.price) >= 0;

    if (
      !hasValidTitle ||
      !hasValidDescription ||
      !hasCategory ||
      !hasValidPrice
    ) {
      toast.error("Validation Failed! Please check your inputs.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Publishing your course to database...");

   const {data:tokenData} = await authClient.token();
   console.log(tokenData)
   const jwtToken = tokenData.token;
   console.log(jwtToken, 'onek jalacce')
    

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(courseData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.dismiss(toastId);
        toast.success("Course published successfully");

        setCourseData({
          title: "",
          description: "",
          thumbnailUrl: "",
          category: "",
          price: "",
          duration: "",
        });

        setTimeout(() => {
          router.push("/courses");
        }, 1500);
      } else {
        throw new Error(data.message || "Failed to save course");
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-10 rounded-3xl border border-gray-100 bg-[#F8FAFC] shadow-xl font-mono">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex p-3 bg-blue-50 rounded-xl text-[#0070F3] mb-3 text-2xl">
          <HiOutlineBookOpen />
        </div>
        <h2 className="text-3xl font-bold text-[#0F172A] font-serif tracking-wide">
          Create New <span className="text-[#0070F3]">Course</span>
        </h2>
        <p className="text-xs text-[#475569] mt-2 tracking-wider">
          Share your knowledge with the world
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Course Title */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#475569]">
            Course Title
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-xl text-[#475569]">
              <HiOutlineDocumentText />
            </span>
            <input
              type="text"
              name="title"
              placeholder="e.g. Next.js 15 Masterclass"
              value={courseData.title}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#0070F3] focus:ring-1 focus:ring-[#0070F3] transition-all placeholder:text-gray-300"
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#475569]">
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            placeholder="What will students learn in this course?"
            value={courseData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#0070F3] focus:ring-1 focus:ring-[#0070F3] transition-all resize-none placeholder:text-gray-300"
          />
        </div>

        {/* Grid Row 1: Thumbnail and Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Thumbnail URL */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#475569]">
              Thumbnail URL
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-xl text-[#475569]">
                <HiOutlineLink />
              </span>
              <input
                type="url"
                name="thumbnailUrl"
                placeholder="https://images.unsplash.com/..."
                value={courseData.thumbnailUrl}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#0070F3] focus:ring-1 focus:ring-[#0070F3] transition-all placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Category Dropdown */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#475569]">
              Category
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-xl text-[#475569]">
                <HiOutlineTag />
              </span>
              <select
                name="category"
                value={courseData.category}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#0070F3] focus:ring-1 focus:ring-[#0070F3] transition-all appearance-none cursor-pointer text-gray-700"
              >
                <option value="" disabled className="text-gray-300">
                  Select a category
                </option>
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              <span className="absolute right-3 pointer-events-none text-gray-400 text-xs">
                ▼
              </span>
            </div>
          </div>
        </div>

        {/* Grid Row 2: Price and Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Price */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#475569]">
              Price ($)
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-xl text-[#475569]">
                <HiOutlineCurrencyDollar />
              </span>
              <input
                type="number"
                name="price"
                step="0.01"
                min="0"
                placeholder="0.00"
                value={courseData.price}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#0070F3] focus:ring-1 focus:ring-[#0070F3] transition-all placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Duration */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#475569]">
              Duration
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-xl text-[#475569]">
                <HiOutlineClock />
              </span>
              <input
                type="text"
                name="duration"
                placeholder="e.g. 12h 30m"
                value={courseData.duration}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#0070F3] focus:ring-1 focus:ring-[#0070F3] transition-all placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-4 mt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2.5 text-sm font-semibold text-gray-600 hover:text-black transition-colors rounded-xl hover:bg-gray-100"
          >
            Cancel
          </button>

          <Button
            type="submit"
            radius="xl"
            isLoading={loading}
            className="flex-1 max-w-[240px] bg-[#0070F3] text-white font-semibold py-2.5 shadow-[0_4px_14px_0_rgba(0,112,243,0.39)] transition-all duration-300 ease-in-out hover:bg-[#0061d5] hover:shadow-[0_6px_20px_rgba(0,112,243,0.47)] hover:-translate-y-0.5 active:translate-y-0"
          >
            {loading ? "Publishing..." : "Publish Course"}
          </Button>
        </div>
      </form>
    </div>
  );
}
