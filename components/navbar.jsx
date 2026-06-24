"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#products", label: "Products" },
    { href: "#best-sellers", label: "Best Sellers" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* 🔷 NAVBAR */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/60 border-b border-white/20"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <nav className="flex items-center justify-between py-3">

            {/* 🔷 LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/SW-Circle.png"
                alt="Shinewalls Paints Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-lg md:text-xl font-semibold bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
                Shinewalls
              </span>
            </Link>

            {/* 🔷 DESKTOP LINKS */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group text-slate-700 font-medium transition duration-300 
                  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-700"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-sky-500 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* 🔷 CTA */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/918867238999?text=Hello%20Shinewalls,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-2 text-white font-medium shadow-lg hover:scale-105 hover:shadow-[0_10px_30px_rgba(14,165,233,0.3)] transition"
              >
                WhatsApp
              </a>
            </div>

            {/* 🔷 MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition"
            >
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {open ? (
                  <X className="size-6 text-slate-800" />
                ) : (
                  <Menu className="size-6 text-slate-800" />
                )}
              </motion.div>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* 🔷 MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="h-full w-full 
              bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 
              flex flex-col px-6 py-8 text-white"
            >
              {/* 🔷 TOP */}
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Shinewalls
                </span>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition"
                >
                  <X className="size-7 text-white" />
                </button>
              </div>

              {/* 🔷 LINKS */}
              <div className="flex flex-col items-center justify-center flex-1 gap-8 text-2xl font-semibold">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-10 py-4 rounded-xl 
                      text-white/70 
                      transition-all duration-300

                      hover:text-white 
                      hover:bg-white/5 
                      hover:backdrop-blur-md
                      hover:scale-105
                      hover:shadow-[0_0_30px_rgba(14,165,233,0.25)]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* 🔷 CTA */}
              <a
                href="https://wa.me/918867238999?text=Hello%20Shinewalls,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 py-4 text-center text-white font-medium text-lg shadow-lg hover:scale-[1.02] transition"
              >
                Contact on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}