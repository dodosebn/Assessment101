"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import NavClicks from "@/app/utils/navClicks";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";

const prodNavLinks = [
  { id: 1, name: "All", path: "/products" },
  { id: 2, name: "Clothing", path: "/clothing" },
  { id: 3, name: "Products", path: "/products" },
  { id: 4, name: "Food", path: "/food" },
  { id: 5, name: "Travel", path: "/travel" },
];

const ProdNav = () => {
  const [searcher, setSearcher] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          <div className="relative hidden md:block flex-1 max-w-md mx-4">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              value={searcher}
              onChange={(e) => setSearcher(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <NavClicks name="Cart (0)" icon={IoCartOutline} />
            <NavClicks name="LogOut" icon={FaRegUserCircle} />
          </div>
        </div>

        <nav className="py-2">
          <ul className="flex space-x-6 overflow-x-auto py-2 hide-scrollbar">
            {prodNavLinks.map((item) => (
              <li key={item.id}>
                <Link href={item.path} legacyBehavior>
                  <a className="whitespace-nowrap px-2 py-1 text-sm font-medium text-gray-500 hover:text-cyan-600 transition-colors border-b-2 border-transparent hover:border-cyan-600">
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-3 space-y-3">
            <div className="relative">
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                value={searcher}
                onChange={(e) => setSearcher(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProdNav;
