"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { Button } from "@heroui/react"; 
import { toast } from "react-hot-toast"; 
// Better Auth ক্লায়েন্ট ইম্পোর্ট (আপনার প্রজেক্টের পাথ অনুযায়ী ঠিক করে নেবেন)
import { authClient } from "@/lib/auth-client"; 
import { FcGoogle } from "react-icons/fc";
import { 
  HiOutlineMail, 
  HiOutlineLockClosed, 
  HiOutlineEye,      
  HiOutlineEyeOff    
} from "react-icons/hi";

export default function LoginForm() {
  const router = useRouter(); 
  const [loading, setLoading] = useState(false); 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Better Auth ক্লায়েন্ট মেথড দিয়ে সরাসরি monteraDB থেকে ইউজার ভেরিফাই ও লগইন করা হচ্ছে
    await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
    }, {
      onRequest: () => {
        toast.loading("Verifying your credentials...");
      },
      onSuccess: (ctx) => {
        toast.dismiss(); 
        toast.success("Welcome back! 🎉");
        
        // ফর্ম ক্লিয়ার করা
        setFormData({ email: "", password: "" });

        // ১.৫ সেকেন্ড পর হোম পেজে রিডাইরেক্ট করবে
        setTimeout(() => {
          // router.push("/");
          window.location.href = "/";
        }, 1500);
      },
      onError: (ctx) => {
        toast.dismiss();
        // Better Auth থেকে আসা অরিজিনাল এরর মেসেজ (যেমন: Invalid email or password) দেখাবে
        toast.error(ctx.error.message || "Login failed! Please check your credentials.");
      }
    });

    setLoading(false);
  };

  // const handleGoogleSignIn = async () => {
  //   try {
  //     await authClient.signIn.social({
  //       provider: "google",
  //       callbackURL: "/", // গুগল লগইন সফল হলে হোম পেজে নিয়ে যাবে
  //     });
  //   } catch (error) {
  //     toast.error("Google Sign In failed");
  //   }
  // };

  return (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 rounded-2xl border border-gray-100 bg-[#F8FAFC] shadow-md font-mono">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#0F172A] font-serif tracking-wide">
          Welcome Back
        </h2>
        <p className="text-sm text-[#475569] mt-2">
          Log in to your <span className="text-[#1A73E8] font-semibold">Mentora</span> account
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        
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
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-[#0F172A]">Password</label>
            {/* ডামি ফরগট পাসওয়ার্ড লিংক, আপনার প্রয়োজন হলে রুট অ্যাড করতে পারেন */}
            <Link href="/forgot-password" className="text-xs text-[#1A73E8] hover:underline">
              Forgot password?
            </Link>
          </div>
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

        {/* Submit Button */}
        <Button
          type="submit"
          radius="xl"
          isLoading={loading} 
          className="w-full bg-[#0070F3] text-white font-semibold py-2.5 mt-2 shadow-[0_4px_14px_0_rgba(0,112,243,0.39)] transition-all duration-300 ease-in-out hover:bg-[#0061d5] hover:shadow-[0_6px_20px_rgba(0,112,243,0.47)] hover:-translate-y-0.5 active:translate-y-0"
        >
          {loading ? "Logging in..." : "Sign In"}
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
        onPress={handleGoogleSignIn}
        variant="bordered"
        radius="xl"
        className="w-full border-gray-200 bg-white text-[#475569] font-medium hover:bg-gray-50 hover:text-black transition-colors"
        startContent={<FcGoogle className="text-xl" />}
      >
        Sign in with Google
      </Button> */}

      {/* Don't have an account link */}
      <p className="text-center text-sm text-[#475569] mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-[#1A73E8] font-semibold hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}