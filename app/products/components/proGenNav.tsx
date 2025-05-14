"use client";
import React, { useState } from "react";
import Link from "next/link";

const prodNavLinks = [
  {
    id: 1,
    name: "All",
    path: '/products'
  },
  {
    id: 2,
    name: "Clothing",
    path: "/clothing",
  },
  {
    id: 3,
    name: "Products",
    path: "/products",
  },
  {
    id: 4,
    name: "Food",
    path: "/food",
  },
  {
    id: 5,
    name: "Travel",
    path: "/travel",
  },
];

const ProdNav = () => {
  return (
    <div className="border-b border-gray-200 flex">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex space-x-8 overflow-x-auto py-4 hide-scrollbar">
          {prodNavLinks.map((item) => (
            <li key={item.id}>
              <Link href={item.path}>
                <span className="whitespace-nowrap px-1 py-2 text-sm font-medium text-gray-500 hover:text-cyan-600 transition-colors border-b-2 border-transparent hover:border-cyan-600">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProdNav;

// Add to your global CSS:
// .hide-scrollbar::-webkit-scrollbar {
//   display: none;
// }
// .hide-scrollbar {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }
