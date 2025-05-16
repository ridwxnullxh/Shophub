import { useState } from "react";
import { products } from "../data/products";

const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProductById = (id) => {
    return products.find((p) => p.id === id);
  };

  const getProductsByCategory = (category) => {
    return products.filter((p) => p.category === category);
  };

  const searchProducts = (query) => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
  };

  const getFeaturedProducts = () => {
    return products.slice(0, 8);
  };

  const getNewArrivals = () => {
    return [...products]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 4);
  };

  const getBestSellers = () => {
    return products.filter((p) => p.rating >= 4.5).slice(0, 4);
  };

  const getCategories = () => {
    return Array.from(new Set(products.map((p) => p.category)));
  };

  return {
    products,
    loading,
    error,
    getProductById,
    getProductsByCategory,
    searchProducts,
    getFeaturedProducts,
    getNewArrivals,
    getBestSellers,
    getCategories,
  };
};

export default useProducts;
