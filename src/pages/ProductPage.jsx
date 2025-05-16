import React, { useState, useEffect } from "react";
import ProductDetails from "../components/ProductDetails";
import { ProductDetailsSkeleton } from "../components/Skeleton";

const ProductPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  return <ProductDetails />;
};

export default ProductPage;
