'use client';
import React from "react";
import { motion } from "framer-motion";
import TransitionLink from "@/app/utils/transistionLink";
import { prodNavLinks } from "./folderMap2";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
};

const underline = {
  hover: { width: "100%", transition: { duration: 0.3 } },
  initial: { width: 0 },
};

const ProdNav = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="border-b border-gray-200 bg-white sticky top-0 z-40"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.ul className="flex space-x-8 overflow-x-auto py-4 hide-scrollbar">
          {prodNavLinks.map((item) => (
            <motion.li
              key={item.id}
              variants={itemVariant}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <TransitionLink href={item.path} legacyBehavior>
                <a className="whitespace-nowrap px-1 py-2 text-sm font-medium text-gray-500 hover:text-cyan-600 transition-colors relative">
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-cyan-600"
                    variants={underline}
                    initial="initial"
                    whileHover="hover"
                  />
                </a>
              </TransitionLink>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.div>
  );
};

export default ProdNav;
