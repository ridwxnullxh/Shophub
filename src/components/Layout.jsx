import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useDarkMode } from "../contexts/DarkModeContext";

const Layout = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
