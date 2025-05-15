"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import NavClicks from "@/app/utils/navClicks";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import TransitionLink from "@/app/utils/transistionLink";
import { prodNavLinks } from "./folderMap2";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navItem = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const mobileMenu = {
  hidden: { height: 0, opacity: 0 },
  show: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const ProdNav = () => {
  const [searcher, setSearcher] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes size={20} className="text-cyan-600" />
            ) : (
              <FaBars size={20} />
            )}
          </motion.button>

          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="relative hidden md:block flex-1 max-w-md mx-4"
          >
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all duration-200"
              value={searcher}
              onChange={(e) => setSearcher(e.target.value)}
            />
          </motion.div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <NavClicks name="Cart (0)" icon={IoCartOutline} />
            <TransitionLink href="/">
              <NavClicks name="LogOut" icon={FaRegUserCircle} />
            </TransitionLink>
          </div>
        </div>

        <motion.nav
          variants={container}
          initial="hidden"
          animate="show"
          className="py-2"
        >
          <ul className="flex space-x-6 overflow-x-auto py-2 hide-scrollbar">
            {prodNavLinks.map((item) => (
              <motion.li
                key={item.id}
                variants={navItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TransitionLink href={item.path} >
                  <span className="whitespace-nowrap px-2 py-1 text-sm font-medium text-gray-500 hover:text-cyan-600 transition-colors relative group">
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </TransitionLink>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenu}
              initial="hidden"
              animate="show"
              exit="exit"
              className="md:hidden bg-white overflow-hidden"
            >
              <div className="py-3 space-y-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    value={searcher}
                    onChange={(e) => setSearcher(e.target.value)}
                  />
                </motion.div>
                <div className="flex flex-col space-y-2">
                  {prodNavLinks.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: "spring" }}
                    >
                      <TransitionLink href={item.path}>
                        <a className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-md transition-colors">
                          {item.name}
                        </a>
                      </TransitionLink>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProdNav;
