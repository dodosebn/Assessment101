"use client";
import React, { useState } from "react";
import Logo from "../utils/logo";
import NavClicks from "../utils/navClicks";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle, FaTimes, FaBars } from "react-icons/fa";
import TransitionLink from "../utils/transistionLink";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searcher, setSearcher] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "/", id: 1 },
    { name: "Products", href: "/products", id: 2 },
    // { name: 'Affiliates', href: '/Affiliates', id: 3 },
    { name: "About", href: "/about", id: 4 },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-gray-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <ul className="flex space-x-6">
              {navLinks.map((item) => (
                <li key={item.id} className="nav-links">
                  <TransitionLink href={item.href}>{item.name}</TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 border-transparent"
                value={searcher}
                onChange={(e) => setSearcher(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-4 md:space-x-6">
              <NavClicks name="Cart (0)" icon={IoCartOutline} />
          <TransitionLink href="/products"><NavClicks name="Sign In" icon={FaRegUserCircle} /></TransitionLink>    
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
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

            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((item) => (
                <span key={item.id} className="mobile-nav-link">
                  <TransitionLink href={item.href}> {item.name}</TransitionLink>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
