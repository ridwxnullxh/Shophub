import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { products } from "../data/products";
import useCart from "../hooks/useCart";
import useWishlist from "../hooks/useWishlist";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isInWishlistState, setIsInWishlistState] = useState(isInWishlist(id));

  const handleWishlistToggle = () => {
    if (isInWishlistState) {
      removeFromWishlist(id);
      setIsInWishlistState(false);
      Swal.fire({
        title: "Removed!",
        text: "Product removed from wishlist",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        background: "#fff",
        iconColor: "#7e22ce",
      });
    } else {
      addToWishlist(product);
      setIsInWishlistState(true);
      Swal.fire({
        title: "Added!",
        text: "Product added to wishlist",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        background: "#fff",
        iconColor: "#7e22ce",
      });
    }
  };

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Product Not Found
        </h2>
        <p className="mb-8 text-gray-600">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          View All Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, selectedQuantity);

    setTimeout(() => {
      setIsAdding(false);
      Swal.fire({
        title: "Added to Cart!",
        text: `${product.name} has been added to your cart`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        background: "#fff",
        iconColor: "#7e22ce",
      });
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Image */}
        <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 group relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button
            onClick={handleWishlistToggle}
            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
          >
            <svg
              className={`w-6 h-6 ${
                isInWishlistState ? "text-red-500" : "text-gray-400"
              }`}
              fill={isInWishlistState ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>
            <div className="flex items-center bg-primary-50 px-3 py-1 rounded-full">
              <span className="text-primary-600">★</span>
              <span className="ml-1 text-sm font-medium text-primary-900">
                {product.rating}
              </span>
            </div>
          </div>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700">{product.description}</p>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Category</h3>
              <Link
                to={`/products?category=${product.category}`}
                className="text-sm font-medium text-primary-600 hover:text-primary-500"
              >
                {product.category}
              </Link>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {/* Quantity selector */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">
                Quantity:
              </span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() =>
                    setSelectedQuantity(Math.max(1, selectedQuantity - 1))
                  }
                  className="p-2 text-gray-600 hover:text-primary-600"
                  disabled={selectedQuantity <= 1}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <span className="px-4 py-2 text-gray-900">
                  {selectedQuantity}
                </span>
                <button
                  onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                  className="p-2 text-gray-600 hover:text-primary-600"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v12M6 12h12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock || isAdding}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white ${
                product.inStock
                  ? "bg-primary-600 hover:bg-primary-700"
                  : "bg-gray-400 cursor-not-allowed"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors`}
            >
              {isAdding ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : product.inStock ? (
                "Add to Cart"
              ) : (
                "Out of Stock"
              )}
            </button>
          </div>

          {/* Features */}
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Features</h3>
            <div className="mt-4">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-primary-500"
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
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
