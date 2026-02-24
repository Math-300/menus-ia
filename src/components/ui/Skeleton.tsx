'use client';

import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white/5 animate-pulse rounded-xl ${className}`}></div>
  );
};

export const CardSkeleton: React.FC = () => (
  <div className="flex items-center gap-4 py-4 border-b border-dashed border-white/5 px-2 -mx-2 opacity-50">
    <Skeleton className="h-20 w-20 rounded-2xl flex-shrink-0" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
      <div className="flex justify-between mt-2">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>
    </div>
  </div>
);
