import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        {!product.inStock && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
            <span className="px-4 py-2 bg-black/70 text-white text-sm font-medium rounded-full">
              Out of Stock
            </span>
          </div>
        )}
        <div className="absolute top-2 right-2">
          {" "}
          <div className="flex items-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <span className="text-amber-500">★</span>
            <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
              {product.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2">
          {" "}
          <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">
            {product.category}
          </p>
          <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </p>
          <button
            className={`rounded-full p-2 transition-colors ${
              product.inStock
                ? "bg-primary-50 text-primary-600 hover:bg-primary-100"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
            disabled={!product.inStock}
          >
            <svg
              className="w-5 h-5"
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
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
