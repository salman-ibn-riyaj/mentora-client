"use client";

import React from "react";

export default function CardSkeleton() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-4 animate-pulse shadow-sm w-full">
      {/* Thumbnail */}
      <div className="w-full h-44 bg-gray-200 rounded-xl"></div>
      
      {/* Category / Badge */}
      <div className="h-4 bg-gray-200 rounded-md w-1/4 mt-2"></div>
      
      {/* Title */}
      <div className="h-6 bg-gray-200 rounded-md w-11/12"></div>
      
      {/* Short Text */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded-md w-full"></div>
        <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
      </div>
      
      {/* Bottom Button Layout */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="h-5 bg-gray-200 rounded-md w-1/4"></div>
        <div className="h-9 bg-gray-200 rounded-full w-24"></div>
      </div>
    </div>
  );
}