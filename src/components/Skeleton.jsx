import React from "react";

const Skeleton = ({
  className = "",
  variant = "rectangular",
  animation = "pulse",
}) => {
  const baseClasses = "bg-gray-200 dark:bg-gray-700";
  const animationClasses =
    animation === "pulse" ? "animate-pulse" : "animate-shimmer";

  const variants = {
    rectangular: "",
    circular: "rounded-full",
    text: "rounded-md",
  };

  return (
    <div
      className={`${baseClasses} ${animationClasses} ${variants[variant]} ${className}`}
      aria-hidden="true"
    />
  );
};

export const ProductCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
    <div className="aspect-[4/3]">
      <Skeleton className="w-full h-full" />
    </div>
    <div className="p-4">
      <Skeleton className="h-4 w-24 mb-2" variant="text" />
      <Skeleton className="h-5 w-full mb-4" variant="text" />
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-20" variant="text" />
        <Skeleton className="h-8 w-8" variant="circular" />
      </div>
    </div>
  </div>
);

export const ProductDetailsSkeleton = () => (
  <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
    <Skeleton className="aspect-square rounded-2xl" />
    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
      <Skeleton className="h-8 w-3/4 mb-4" variant="text" />
      <Skeleton className="h-6 w-1/4 mb-6" variant="text" />
      <div className="space-y-4">
        <Skeleton className="h-24 w-full" variant="text" />
        <Skeleton className="h-12 w-full" variant="text" />
      </div>
    </div>
  </div>
);

export const CartItemSkeleton = () => (
  <div className="flex items-center py-6">
    <Skeleton className="h-24 w-24 rounded-md" />
    <div className="ml-4 flex flex-1 flex-col">
      <div className="flex justify-between">
        <div>
          <Skeleton className="h-5 w-40 mb-2" variant="text" />
          <Skeleton className="h-4 w-20" variant="text" />
        </div>
        <Skeleton className="h-6 w-20" variant="text" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-8 w-8" variant="circular" />
          <Skeleton className="h-8 w-12" variant="text" />
          <Skeleton className="h-8 w-8" variant="circular" />
        </div>
        <Skeleton className="h-6 w-16" variant="text" />
      </div>
    </div>
  </div>
);

export const HeroSkeleton = () => (
  <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
    <div className="px-6 py-16 sm:px-8 sm:py-24 lg:py-32 lg:px-12">
      <div className="max-w-2xl space-y-6">
        <div className="h-12 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
        <div className="h-8 w-1/3 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
        <div className="flex gap-4">
          <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
          <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

export const BenefitCardSkeleton = () => (
  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
    <div className="text-primary-600 mb-4">
      <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
    </div>
    <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />
    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
  </div>
);

export const FeaturedSectionSkeleton = () => (
  <section className="mt-16">
    <div className="flex items-center justify-between mb-8">
      <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  </section>
);

export default Skeleton;
