import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import {
  HeroSkeleton,
  BenefitCardSkeleton,
  FeaturedSectionSkeleton,
} from "../components/Skeleton";

const HeroSection = () => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-700 dark:to-accent-700">
    <div className="absolute inset-0 bg-grid-white/30 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))] dark:bg-grid-white/20" />
    <div className="relative px-6 py-16 sm:px-8 sm:py-24 lg:py-32 lg:px-12">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Summer Collection <br />
          <span className="text-accent-200 dark:text-accent-300">2025</span>
        </h1>
        <p className="mt-6 text-lg text-white/90 dark:text-white/80 max-w-xl">
          Discover our latest collection of trendy products at unbeatable
          prices. Shop now and get exclusive deals!
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            to="/products"
            className="rounded-full bg-white dark:bg-white/90 px-6 py-3 text-sm font-semibold text-primary-600 dark:text-primary-700 shadow-sm hover:bg-primary-50 dark:hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Shop Now
          </Link>
          <Link
            to="/categories"
            className="rounded-full bg-white/10 dark:bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedSection = ({ title, products, viewAllLink }) => (
  <section className="mt-16">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <Link
        to={viewAllLink}
        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center"
      >
        View All
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

const HomePage = () => {
  const { getFeaturedProducts, getNewArrivals, getBestSellers } = useProducts();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      title: "Quality Products",
      description: "Curated selection of the best products",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Best Prices",
      description: "Competitive prices on all items",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      title: "Fast Shipping",
      description: "Quick & reliable delivery",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "24/7 Support",
      description: "Always here to help you",
    },
  ];

  if (isLoading) {
    return (
      <div>
        <HeroSkeleton />

        <FeaturedSectionSkeleton />

        {/* Benefits Section Skeleton */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <BenefitCardSkeleton key={index} />
          ))}
        </section>

        <FeaturedSectionSkeleton />
        <FeaturedSectionSkeleton />
      </div>
    );
  }

  return (
    <div>
      <HeroSection />

      <FeaturedSection
        title="Featured Products"
        products={getFeaturedProducts()}
        viewAllLink="/products"
      />

      {/* Benefits Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-primary-600 dark:text-primary-400 mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {benefit.description}
            </p>
          </div>
        ))}
      </section>

      <FeaturedSection
        title="New Arrivals"
        products={getNewArrivals()}
        viewAllLink="/products?sort=newest"
      />

      <FeaturedSection
        title="Best Sellers"
        products={getBestSellers()}
        viewAllLink="/products?sort=best-selling"
      />
    </div>
  );
};

export default HomePage;
