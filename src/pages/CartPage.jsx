import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import { CartItemSkeleton, default as Skeleton } from "../components/Skeleton";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Shopping Cart
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[...Array(3)].map((_, index) => (
                  <CartItemSkeleton key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                Order Summary
              </h2>
              <div className="space-y-4">
                <Skeleton className="h-6 w-full" variant="text" />
                <Skeleton className="h-6 w-full" variant="text" />
                <Skeleton className="h-6 w-full" variant="text" />
              </div>
              <Skeleton className="h-12 w-full mt-6" variant="text" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="max-w-md mx-auto">
          <svg
            className="mx-auto h-16 w-16 text-gray-400"
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
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Your cart is empty
          </h2>
          <p className="mt-3 text-gray-600">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      {" "}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Shopping Cart
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {cartItems.map((item) => (
                <li key={item.id} className="p-6">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="ml-6 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          {" "}
                          <h3 className="text-base font-medium text-gray-900 dark:text-white">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {item.category}
                          </p>
                        </div>
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center border border-gray-200 rounded-full">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-2 hover:text-primary-600"
                              disabled={item.quantity <= 1}
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
                            <span className="w-12 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-2 hover:text-primary-600"
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
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-sm font-medium text-primary-600 hover:text-primary-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Order Summary */}{" "}
        <div className="lg:col-span-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
              Order Summary
            </h2>
            <div className="flow-root">
              <dl className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600 dark:text-gray-400">Subtotal</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">
                    ${cartTotal.toFixed(2)}
                  </dd>
                </div>{" "}
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600 dark:text-gray-400">Shipping</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">
                    Free
                  </dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900 dark:text-white">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                    ${cartTotal.toFixed(2)}
                  </dd>
                </div>
              </dl>
            </div>
            <button
              type="button"
              className="mt-6 w-full py-3 px-4 rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Proceed to Checkout
            </button>
            <Link
              to="/products"
              className="mt-4 block text-center text-sm text-primary-600 hover:text-primary-500"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
