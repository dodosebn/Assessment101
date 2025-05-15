"use client";
import React from "react";
import { prodDemoMaps } from "./ProductsMaps";
import Image from "next/image";
import ShopBtn from "@/app/utils/AddBtn";
import ProdNav from "./proGenNav";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const hoverEffect = {
  hover: { scale: 1.03 },
  tap: { scale: 0.98 },
};

const GenProd = () => {
  return (
    <>
      <ProdNav />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
      >
        {prodDemoMaps.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="group border rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-white"
          >
            <motion.div className="relative aspect-square">
              <Image
                src={item.name}
                alt={item.describ}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/30 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <ShopBtn />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="p-5 space-y-2">
              <motion.p
                className="font-bold text-lg text-gray-900"
                whileHover={{ color: "#0891b2" }}
              >
                {item.price}
              </motion.p>
              <p className="text-gray-600 line-clamp-2">{item.describ}</p>

              <motion.div
                className="flex items-center pt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
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
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default GenProd;
