"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Next.js Image component import kora hoyeche
import { Button } from "@heroui/react"; // HeroUI v3
import { HiArrowRight, HiPlay, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

const SLIDE_DATA = [
  {
    badge: "Trusted by 10,000+ Students Worldwide",
    headingNormal1: "Master New",
    headingNormal2: "Skills with",
    headingHighlight: "Expert-Led",
    headingNormal3: "Courses",
    description: "Unlock your potential with over 1,000+ high-quality courses taught by industry professionals. Start your learning journey today.",
    primaryBtnText: "Explore Courses",
    primaryBtnLink: "/courses",
    secondaryBtnText: "Watch Demo",
    secondaryBtnLink: "#demo",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop", 
    communityText: "Join the community",
    communitySubText: "500+ new enrollments today"
  },
  {
    badge: "Advance Your Professional Career",
    headingNormal1: "Build Real",
    headingNormal2: "Projects &",
    headingHighlight: "Get Hired",
    headingNormal3: "Faster",
    description: "Gain hands-on experience by coding production-ready industrial web architectures. Learn step-by-step from senior engineers.",
    primaryBtnText: "Browse Paths",
    primaryBtnLink: "/paths",
    secondaryBtnText: "View Syllabus",
    secondaryBtnLink: "#syllabus",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    communityText: "Mentora Alumni",
    communitySubText: "Working at Tech Giants"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDE_DATA.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDE_DATA.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 8000);
    return () => clearInterval(slideInterval);
  }, []);

  const slide = SLIDE_DATA[currentSlide];

  return (
    <section className="w-full bg-[#F8FAFC] min-h-[calc(100vh-70px)] flex items-center relative overflow-hidden px-4 sm:px-8 py-12 md:py-16">
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="hidden sm:flex absolute left-2 lg:left-6 z-20 text-[#0070F3] hover:text-[#0061d5] text-3xl p-1 bg-white/60 hover:bg-white rounded-full transition-all duration-200 border border-gray-100 shadow-sm"
        aria-label="Previous Slide"
      >
        <HiChevronLeft />
      </button>

      <button 
        onClick={nextSlide}
        className="hidden sm:flex absolute right-2 lg:left-auto lg:right-6 z-20 text-[#0070F3] hover:text-[#0061d5] text-3xl p-1 bg-white/60 hover:bg-white rounded-full transition-all duration-200 border border-gray-100 shadow-sm"
        aria-label="Next Slide"
      >
        <HiChevronRight />
      </button>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Grid: Texts & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6 font-mono text-left">
          <div className="inline-flex items-center gap-2 bg-[#E8F0FE] text-[#1A73E8] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#D2E3FC]">
            <span>★</span> {slide.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-[#0F172A] leading-[1.15] tracking-tight max-w-xl">
            {slide.headingNormal1} <br />
            {slide.headingNormal2}{" "}
            <span className="text-[#0052FF] relative inline-block transition-transform duration-300 hover:scale-105">
              {slide.headingHighlight}
            </span>{" "}
            <br />
            {slide.headingNormal3}
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-lg font-mono">
            {slide.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2 w-full sm:w-auto">
            <Button
              as={Link}
              href={slide.primaryBtnLink}
              radius="full"
              endContent={<HiArrowRight className="text-lg" />}
              className="bg-[#0070F3] text-white font-semibold px-6 py-3 shadow-[0_4px_14px_0_rgba(0,112,243,0.39)] transition-all duration-300 ease-in-out hover:bg-[#0061d5] hover:shadow-[0_6px_20px_rgba(0,112,243,0.47)] hover:-translate-y-0.5"
            >
              {slide.primaryBtnText}
            </Button>

            <Button
              as={Link}
              href={slide.secondaryBtnLink}
              radius="full"
              variant="light"
              startContent={<HiPlay className="text-xl" />}
              className="text-[#0F172A] font-semibold px-6 py-3 bg-transparent hover:bg-gray-100 transition-colors duration-200"
            >
              {slide.secondaryBtnText}
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-8 grayscale opacity-60 text-xl font-sans select-none">
            <span className="font-serif italic font-bold tracking-tight text-gray-800 text-sm">logo</span>
            <div className="flex items-center gap-1 text-[#0A66C2]">
              <FaLinkedin className="text-2xl" />
              <span className="font-bold text-xs font-sans tracking-tighter">LinkedIn</span>
            </div>
            <div className="flex items-center gap-1 text-[#FF0000]">
              <FaYoutube className="text-2xl" />
              <span className="font-bold text-xs tracking-tighter font-sans">YouTube</span>
            </div>
          </div>
        </div>

        {/* Right Grid: Image Layer Wrapper with next/image configuration */}
        <div className="lg:col-span-6 flex justify-center relative w-full px-2 sm:px-4">
          
          {/* Main Visual Rounded Box Container */}
          <div className="relative w-full max-w-[500px] aspect-square rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(26,115,232,0.15)] group transition-transform duration-500 ease-out hover:scale-[1.01]">
            
            {/* ✅ Next.js optimized Image implementation */}
            <Image
              src={slide.image}
              alt="Mentora Course Platform Group Session"
              fill
              sizes="(max-w-7xl) 50vw, 100vw"
              priority
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />

            {/* Bottom Floating Glassmorphism Community Metrics Panel */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] bg-white/80 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 border border-white/40 shadow-lg z-10">
              <div className="flex -space-x-3 overflow-hidden relative w-24 h-8 items-center">
                {/* Micro User Avatar Badges via standard layouts */}
                <div className="relative w-8 h-8 rounded-full ring-2 ring-white overflow-hidden z-30">
                  <Image fill src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100" alt="Avatar 1" sizes="32px"/>
                </div>
                <div className="relative w-8 h-8 rounded-full ring-2 ring-white overflow-hidden -ml-3 z-20">
                  <Image fill src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100" alt="Avatar 2" sizes="32px"/>
                </div>
                <div className="relative w-8 h-8 rounded-full ring-2 ring-white overflow-hidden -ml-3 z-10">
                  <Image fill src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100" alt="Avatar 3" sizes="32px"/>
                </div>
              </div>

              <div className="flex flex-col text-left font-mono">
                <span className="text-xs font-bold text-[#0F172A]">{slide.communityText}</span>
                <span className="text-[10px] text-[#64748B]">{slide.communitySubText}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Slider Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {SLIDE_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-6 bg-[#0070F3]" : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}