"use client";

import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Logo from "../utils/logo";
import genImg from "@/public/assets/genProduct.avif";
import Image from "next/image";
import ShopBtn from "../utils/shopBtn";
import LearnBtn from "../utils/learnBtn";
import { categories } from "./folderMaps";
const Intro = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
      <aside className="mb-6 md:mb-8">
        <ul className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
          {categories.map((category, index) => (
            <li key={index} className="group relative">
              <button
                className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors"
                onClick={() => toggleDropdown(index)}
              >
                {category.name}
                {activeDropdown === index ? (
                  <IoMdArrowDropup className="text-cyan-600 transition-colors" />
                ) : (
                  <IoMdArrowDropdown className="text-gray-500 group-hover:text-cyan-600 transition-colors" />
                )}
              </button>

              {activeDropdown === index && (
                <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100">
                  <ul className="py-1">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-cyan-600 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-12">
        <div className="w-full md:w-1/2 order-2 md:order-1 space-y-6 pb-10">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              <span className="inline-block mr-2">
                <Logo />
              </span>{" "}
              sells products from,
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                trusted brands.
              </span>{" "}
              delivered by us
            </h1>

            <p className="text-base md:text-lg text-gray-600 max-w-lg">
              Shop directly, place orders, and enjoy fast delivery; all through
              our affiliate-powered platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
             <ShopBtn />
           <LearnBtn />
            </div>
          </div>
        </div>

        <div className="w-full md:w-[45%] order-1 md:order-2">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300">
            <Image
              src={genImg}
              alt="Premium products showcase"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
