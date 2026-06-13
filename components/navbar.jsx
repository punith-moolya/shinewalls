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
                alt="logo"
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
                href="https://wa.me/918152088999"
                target="_blank"
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


// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navLinks = [
//     { href: "#creations", label: "Creations" },
//     { href: "#about", label: "About" },
//     { href: "#testimonials", label: "Testimonials" },
//     { href: "#contact", label: "Contact" },
//   ];

//   return (
//     <>
//       {/* DESKTOP NAV */}
//       <motion.header
//         initial={{ y: -40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="fixed top-6 left-0 right-0 z-50"
//       >
//         <div className="mx-auto max-w-7xl px-6">
//           <nav className="flex items-center justify-between rounded-2xl bg-white/70 backdrop-blur-xl shadow-lg shadow-sky-500/10 px-6 py-4">
            
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-2">
//               <Image
//                 src="SW-Circle.png"
//                 alt="Shinewalls Logo"
//                 width={250}
//                 height={150}
//                 className="h-12 w-auto"
//               />
//             </Link>

//             {/* Links */}
//             <div className="hidden lg:flex items-center gap-10">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="text-slate-700 hover:text-sky-600 transition font-medium"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>

//             {/* CTA */}
//             <div className="hidden lg:block">
//               <a
//                 href="https://wa.me/91XXXXXXXXXX"
//                 target="_blank"
//                 className="rounded-xl bg-sky-600 px-6 py-2.5 text-white font-medium shadow-md shadow-sky-600/30 hover:bg-sky-700 transition active:scale-95"
//               >
//                 WhatsApp
//               </a>
//             </div>

//             {/* Mobile Toggle */}
//             <button
//               onClick={() => setOpen(true)}
//               className="lg:hidden rounded-lg p-2 hover:bg-slate-100 transition"
//             >
//               <Menu className="size-6 text-slate-800" />
//             </button>
//           </nav>
//         </div>
//       </motion.header>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ y: -40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -40, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="mx-auto mt-6 max-w-[90%] rounded-2xl bg-white p-6 shadow-xl"
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <Image
//                   src="/assets/logo.svg"
//                   alt="Shinewalls"
//                   width={120}
//                   height={36}
//                 />
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="rounded-lg p-2 hover:bg-slate-100"
//                 >
//                   <X className="size-6" />
//                 </button>
//               </div>

//               <div className="flex flex-col gap-6 text-lg">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                     className="text-slate-800 hover:text-sky-600 transition"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}

//                 <a
//                   href="https://wa.me/91XXXXXXXXXX"
//                   target="_blank"
//                   className="mt-4 rounded-xl bg-sky-600 px-6 py-3 text-center text-white font-medium"
//                 >
//                   Contact on WhatsApp
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   // ✅ FINAL NAV LINKS FOR SHINEWALLS
//   const navLinks = [
//     { href: "#products", label: "Products" },
//     { href: "#about", label: "About" },
//     { href: "#contact", label: "Contact" },
//   ];

//   return (
//     <>
//       {/* DESKTOP NAV */}
//       <motion.header
//         initial={{ y: -40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="fixed top-6 left-0 right-0 z-50"
//       >
//         <div className="mx-auto max-w-7xl px-6">
//           <nav className="flex items-center justify-between rounded-2xl bg-white/70 backdrop-blur-xl shadow-lg shadow-sky-500/10 px-6 py-4">

//             {/* LOGO + BRAND */}
//             <Link href="/" className="flex items-center gap-3">
//               <Image
//                 src="/SW-Circle.png"
//                 alt="Shinewalls Logo"
//                 width={48}
//                 height={48}
//                 className="h-12 w-12"
//               />

//               {/* Brand text (3D blue) */}
//               <span className="text-xl font-semibold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
//                 Shinewalls
//               </span>
//             </Link>

//             {/* LINKS */}
//             <div className="hidden lg:flex items-center gap-10">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="text-slate-700 hover:text-sky-600 transition font-medium"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>

//             {/* CTA */}
//             <div className="hidden lg:block">
//               <a
//                 href="https://wa.me/91XXXXXXXXXX"
//                 target="_blank"
//                 className="rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-6 py-2.5 text-white font-medium shadow-md shadow-blue-600/30 hover:scale-[1.02] transition active:scale-95"
//               >
//                 WhatsApp
//               </a>
//             </div>

//             {/* MOBILE TOGGLE */}
//             <button
//               onClick={() => setOpen(true)}
//               className="lg:hidden rounded-lg p-2 hover:bg-slate-100 transition"
//             >
//               <Menu className="size-6 text-slate-800" />
//             </button>
//           </nav>
//         </div>
//       </motion.header>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ y: -40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -40, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="mx-auto mt-6 max-w-[90%] rounded-2xl bg-white p-6 shadow-xl"
//             >
//               {/* Mobile Header */}
//               <div className="flex items-center justify-between mb-6">
//                 <span className="text-lg font-semibold bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
//                   Shinewalls
//                 </span>
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="rounded-lg p-2 hover:bg-slate-100"
//                 >
//                   <X className="size-6" />
//                 </button>
//               </div>

//               {/* Mobile Links */}
//               <div className="flex flex-col gap-6 text-lg">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                     className="text-slate-800 hover:text-sky-600 transition"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}

//                 <a
//                   href="https://wa.me/918152088999"
//                   target="_blank"
//                   className="mt-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-6 py-3 text-center text-white font-medium"
//                 >
//                   Contact on WhatsApp
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }