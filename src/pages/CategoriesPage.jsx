import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import Skeleton from "../components/Skeleton";

const CategoryCardSkeleton = () => (
  <div className="relative h-[300px] overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
    <Skeleton className="absolute inset-0" />
    <div className="absolute bottom-0 w-full p-6">
      <Skeleton className="h-8 w-48 mb-2" variant="text" />
      <Skeleton className="h-6 w-32 mb-4" variant="text" />
      <Skeleton className="h-10 w-40" variant="text" />
    </div>
  </div>
);

const CategoriesPage = () => {
  const { getCategories, products } = useProducts();
  const categories = getCategories();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Shop by Category
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore our wide range of products by category
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading
          ? [...Array(6)].map((_, index) => (
              <CategoryCardSkeleton key={index} />
            ))
          : categories.map((category) => {
              const categoryProducts = products.filter(
                (p) => p.category === category
              );
              const firstProduct = categoryProducts[0];

              return (
                <Link
                  key={category}
                  to={`/products?category=${encodeURIComponent(category)}`}
                  className="group relative h-[300px] overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  {firstProduct && (
                    <div className="absolute inset-0">
                      <img
                        src={firstProduct.image}
                        alt={category}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
                    </div>
                  )}
                  <div className="absolute bottom-0 w-full p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">{category}</h2>
                    <p className="mb-4 text-white/90">
                      {categoryProducts.length} Products
                    </p>
                    <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors group-hover:bg-primary-600">
                      Browse Collection
                      <svg
                        className="ml-2 h-4 w-4"
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
                    </span>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default CategoriesPage;
