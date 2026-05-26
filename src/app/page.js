import BenefitsSection from "@/components/BenefitsSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/Hero";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturedCourses></FeaturedCourses>
      <BenefitsSection></BenefitsSection>
    </div>
  );
}
