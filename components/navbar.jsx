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



"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ FINAL NAV LINKS FOR SHINEWALLS
  const navLinks = [
    { href: "#products", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* DESKTOP NAV */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 left-0 right-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center justify-between rounded-2xl bg-white/70 backdrop-blur-xl shadow-lg shadow-sky-500/10 px-6 py-4">

            {/* LOGO + BRAND */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/SW-Circle.png"
                alt="Shinewalls Logo"
                width={48}
                height={48}
                className="h-12 w-12"
              />

              {/* Brand text (3D blue) */}
              <span className="text-xl font-semibold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                Shinewalls
              </span>
            </Link>

            {/* LINKS */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-sky-600 transition font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                className="rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-6 py-2.5 text-white font-medium shadow-md shadow-blue-600/30 hover:scale-[1.02] transition active:scale-95"
              >
                WhatsApp
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden rounded-lg p-2 hover:bg-slate-100 transition"
            >
              <Menu className="size-6 text-slate-800" />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mx-auto mt-6 max-w-[90%] rounded-2xl bg-white p-6 shadow-xl"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-semibold bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
                  Shinewalls
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 hover:bg-slate-100"
                >
                  <X className="size-6" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-6 text-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-slate-800 hover:text-sky-600 transition"
                  >
                    {link.label}
                  </Link>
                ))}

                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  className="mt-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-6 py-3 text-center text-white font-medium"
                >
                  Contact on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}