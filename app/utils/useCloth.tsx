"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionLink from "./transistionLink";
import { Product } from "../types";
import AddBtn from "./AddBtn";

interface UseClothProps {
  whereWeAreImportingFrom: Product[];
}

const UseCloth: React.FC<UseClothProps> = ({ whereWeAreImportingFrom }) => {
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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
    >
      {whereWeAreImportingFrom.map((product) => (
        <motion.div
          key={product.id}
          variants={item}
          whileHover={{ scale: 1.03 }}
          className="group border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
        >
          <div className="relative aspect-square">
            <Image
              src={product.name}
              alt={product.describ}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />

            {/* Animated Shop Button */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/30 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <TransitionLink href={`/products/${product.id}`}>
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <AddBtn />
                </motion.div>
              </TransitionLink>
            </motion.div>
          </div>

          <div className="p-5 space-y-2">
            <motion.p
              className="font-bold text-lg text-gray-900"
              whileHover={{ color: "#0891b2" }}
            >
              {product.price}
            </motion.p>
            <p className="text-gray-600 line-clamp-2">{product.describ}</p>

            <div className="flex items-center pt-2">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{ scale: 1.2 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
              <span className="text-xs text-gray-500 ml-1">(24)</span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default UseCloth;
