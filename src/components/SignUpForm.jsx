"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { Button } from "@heroui/react"; 
import { toast } from "react-hot-toast"; 
// Better Auth ক্লায়েন্ট ইম্পোর্ট করুন (আপনার প্রজেক্টের পাথ অনুযায়ী ঠিক করে নেবেন)
import { authClient } from "@/lib/auth-client"; 
import { FcGoogle } from "react-icons/fc";
import { 
  HiOutlineMail, 
  HiOutlineLockClosed, 
  HiOutlineUser, 
  HiOutlinePhotograph,
  HiOutlineEye,      
  HiOutlineEyeOff    
} from "react-icons/hi";

export default function SignUpForm() {
  const router = useRouter(); 
  const [loading, setLoading] = useState(false); 

  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);

    // Better Auth ক্লায়েন্ট মেথড দিয়ে সরাসরি monteraDB তে ইউজার তৈরি করা হচ্ছে
    await authClient.signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      image: formData.imageUrl, // Better Auth ডিফল্টভাবে প্রোফাইল ছবির জন্য 'image' ফিল্ড ব্যবহার করে
    }, {
      onRequest: () => {
        toast.loading("Creating account in monteraDB...");
      },
      onSuccess: (ctx) => {
        toast.dismiss(); // লোডিং টোস্ট বন্ধ করবে
        toast.success("Account created successfully! 🎉");
        
        // ফর্ম ক্লিয়ার করে দেওয়া
        setFormData({ name: "", imageUrl: "", email: "", password: "", confirmPassword: "" });

        // ১.৫ সেকেন্ড পর হোম পেজে রিডাইরেক্ট করবে
        setTimeout(() => {
          // router.push("/");
          window.location.href="/";
        }, 1500);
      },
      onError: (ctx) => {
        toast.dismiss();
        // Better Auth থেকে আসা অরিজিনাল এরর মেসেজ দেখাবে
        toast.error(ctx.error.message || "Sign up failed! Please try again.");
      }
    });

    setLoading(false);
  };

  // const handleGoogleSignIn = async () => {
  //   const data = await authClient.signIn.social({
  //     provider: "google",
  //   });
  // };
  

  return (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 rounded-2xl border border-gray-100 bg-[#F8FAFC] shadow-md font-mono">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#0F172A] font-serif tracking-wide">
          Create Account
        </h2>
        <p className="text-sm text-[#475569] mt-2">
          Join <span className="text-[#1A73E8] font-semibold">Mentora</span> today and start learning
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSignUp} className="flex flex-col gap-5">
        
        {/* Name Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#0F172A]">Full Name</label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-xl text-[#475569]">
              <HiOutlineUser />
            </span>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-all"
            />
          </div>
        </div>

        {/* Image URL Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#0F172A]">Profile Image URL</label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-xl text-[#475569]">
              <HiOutlinePhotograph />
            </span>
            <input
              type="url"
              name="imageUrl"
              placeholder="https://example.com/avatar.jpg"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-all"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#0F172A]">Email Address</label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-xl text-[#475569]">
              <HiOutlineMail />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-all"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#0F172A]">Password</label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-xl text-[#475569]">
              <HiOutlineLockClosed />
            </span>
            <input
              type={isVisiblePassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-10 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-all"
            />
            <div 
              className="absolute right-3 cursor-pointer text-[#475569] hover:text-black p-1 select-none"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            >
              {isVisiblePassword ? <HiOutlineEyeOff className="text-xl" /> : <HiOutlineEye className="text-xl" />}
            </div>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#0F172A]">Confirm Password</label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-xl text-[#475569]">
              <HiOutlineLockClosed />
            </span>
            <input
              type={isVisibleConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-10 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-all"
            />
            <div 
              className="absolute right-3 cursor-pointer text-[#475569] hover:text-black p-1 select-none"
              onClick={() => setIsVisibleConfirmPassword(!isVisibleConfirmPassword)}
            >
              {isVisibleConfirmPassword ? <HiOutlineEyeOff className="text-xl" /> : <HiOutlineEye className="text-xl" />}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          radius="xl"
          isLoading={loading} 
          className="w-full bg-[#0070F3] text-white font-semibold py-2.5 mt-2 shadow-[0_4px_14px_0_rgba(0,112,243,0.39)] transition-all duration-300 ease-in-out hover:bg-[#0061d5] hover:shadow-[0_6px_20px_rgba(0,112,243,0.47)] hover:-translate-y-0.5 active:translate-y-0"
        >
          {loading ? "Registering..." : "Sign Up"}
        </Button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-1 border-t border-gray-200"></div>
        <span className="px-3 text-xs text-[#475569] uppercase tracking-wider">Or continue with</span>
        <div className="flex-1 border-t border-gray-200"></div>
      </div>

      {/* Google Sign In Button */}
      {/* <Button
        onClick={handleGoogleSignIn}
        variant="bordered"
        radius="xl"
        className="w-full border-gray-200 bg-white text-[#475569] font-medium hover:bg-gray-50 hover:text-black transition-colors"
        startContent={<FcGoogle className="text-xl" />}
      >
        Sign up with Google
      </Button> */}

      {/* Already have an account link */}
      <p className="text-center text-sm text-[#475569] mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-[#1A73E8] font-semibold hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}