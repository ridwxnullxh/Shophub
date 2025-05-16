import { useState, useEffect } from "react";

const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  const saveWishlist = (items) => {
    localStorage.setItem("wishlist", JSON.stringify(items));
    setWishlistItems(items);
  };

  const addToWishlist = (product) => {
    if (!wishlistItems.some((item) => item.id === product.id)) {
      saveWishlist([...wishlistItems, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    const updatedItems = wishlistItems.filter((item) => item.id !== productId);
    saveWishlist(updatedItems);
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  return {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };
};

export default useWishlist;
