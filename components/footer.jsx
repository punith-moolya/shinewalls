"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="w-full mt-40 bg-white px-6 md:px-16 lg:px-24 xl:px-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 py-20 text-sm text-slate-600">
        {/* Brand */}
        <div className="space-y-6">
          <Image
            src="/SW-Circle.png"
            width={120}
            height={120}
            alt="Painting company logo"
          />
          <p className="leading-7 max-w-sm">
            We provide premium interior & exterior painting solutions with
            flawless finishes, modern textures, and long-lasting protection for
            homes and commercial spaces.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h2 className="font-semibold text-slate-900 text-base">
            Our Services
          </h2>
          <ul className="space-y-3">
            <li>Interior Wall Painting</li>
            <li>Exterior Weather Coatings</li>
            <li>Designer Texture Finishes</li>
            <li>Waterproofing Solutions</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h2 className="font-semibold text-slate-900 text-base">Contact Us</h2>

          <a
            href="https://wa.me/918867238999?text=Hello%20Shinewalls,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
            target="_blank"
            className="
              block w-full text-center
              rounded-xl
              bg-gradient-to-r from-sky-600 to-blue-700
              px-6 py-3
              text-white font-medium
              shadow-lg shadow-blue-600/20
              hover:brightness-110 transition
            "
          >
            Chat on WhatsApp
          </a>

          <p>
            Email:&nbsp;
            <a
              href="mailto:yourmail@gmail.com"
              className="text-slate-900 hover:underline"
            >
              yourmail@gmail.com
            </a>
          </p>

          <p className="text-slate-500">
            Serving residential & commercial projects
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © 2025 Shinewalls Paints. All rights reserved.
        <div className="mt-2">
          Website designed & developed by{" "}
          <a
            href="https://punith-moolya.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-700 hover:text-blue-600 transition"
          >
            Punith moolya
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
