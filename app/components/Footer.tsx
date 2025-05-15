import React from "react";
import Logo from "../utils/logo";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: FaInstagram,
      // url: "/",
    },
    {
      id: 2,
      icon: FaTwitter,
      // url: "/",
    },
    {
      id: 3,
      icon: AiFillTikTok,
      // url: "/",
    },
  ];

  return (
    <footer className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Logo />
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 text-center md:text-left">
            © 2025 The Wena Project Company. All rights reserved
          </div>

          <ul className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.id}>
                  <span
                    // href={link.url}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    className="text-gray-500 hover:text-cyan-600 transition-colors"
                    aria-label={link.icon.name}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
