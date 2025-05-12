import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-8">
            Sorry, we couldn't find the product you're looking for.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      Swal.fire({
        title: "Success!",
        text: `${product.name} has been added to your cart`,
        icon: "success",
        confirmButtonText: "OK!",
      });
    }, 600);
  };

  return (
    <div className="container max-w-6xl mx-auto py-12 px-4">
      <Link
        to="/"
        className="inline-flex items-center text-sm font-medium text-gray-600 mb-6 hover:text-gray-900"
      >
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 aspect-square rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">
                {product.category}
              </span>
              <div className="flex items-center">
                <span className="text-amber-500">★</span>
                <span className="ml-1 text-sm text-gray-600">
                  {product.rating}
                </span>
              </div>
            </div>
            <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
            <p className="text-2xl font-semibold mt-4">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <hr className="border-gray-200" />

          <div>
            <h3 className="font-medium mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm text-gray-600"
                >
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            {product.inStock ? (
              <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 border border-green-200 rounded-full mb-4 inline-block">
                In Stock
              </span>
            ) : (
              <span className="px-2 py-1 text-xs font-medium bg-red-50 text-red-600 border border-red-200 rounded-full mb-4 inline-block">
                Out of Stock
              </span>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!product.inStock || isAdding}
                onClick={handleAddToCart}
              >
                {isAdding ? (
                  "Adding..."
                ) : (
                  <>
                    <svg
                      className="w-4 h-4 mr-2 inline"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to Cart
                  </>
                )}
              </button>

              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <svg
                  className="w-4 h-4 mr-2 inline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
