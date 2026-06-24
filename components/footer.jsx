"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

// Social Media Icon Components
const FacebookIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TwitterXIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <motion.footer
      className="w-full mt-24 md:mt-40 bg-white px-5 sm:px-6 md:px-16 lg:px-24 xl:px-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 py-12 md:py-20 text-sm text-slate-600">
        {/* Brand */}
        <div className="space-y-5 sm:space-y-6">
          <Image
            src="/SW-Circle.png"
            width={100}
            height={100}
            alt="Shinewalls Paints logo"
            className="sm:w-[120px] sm:h-[120px]"
          />
          <p className="leading-7 max-w-sm text-slate-600">
            We provide premium interior & exterior painting solutions with
            flawless finishes, modern textures, and long-lasting protection for
            homes and commercial spaces.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.facebook.com/share/p/1GzU7XdYch/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href="https://www.instagram.com/p/DYY3Ziyxksz/?igsh=MTZienFwcmxvNXptdQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X (Twitter)"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
            >
              <TwitterXIcon size={16} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-5 sm:space-y-6">
          <h2 className="font-semibold text-slate-900 text-base">
            Our Services
          </h2>
          <ul className="space-y-3">
            <li className="hover:text-slate-900 transition-colors">
              Interior Wall Painting
            </li>
            <li className="hover:text-slate-900 transition-colors">
              Exterior Weather Coatings
            </li>
            <li className="hover:text-slate-900 transition-colors">
              Designer Texture Finishes
            </li>
            <li className="hover:text-slate-900 transition-colors">
              Waterproofing Solutions
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-5 sm:space-y-6">
          <h2 className="font-semibold text-slate-900 text-base">Contact Us</h2>

          {/* Dual Contact Buttons — Mobile-friendly */}
          <div className="grid grid-cols-2 gap-3">
            {/* Call Now Button */}
            <a
              href="tel:+918867238999"
              className="
                flex items-center justify-center gap-2
                rounded-xl
                bg-slate-900
                px-4 py-3
                text-white text-sm font-medium
                shadow-lg shadow-slate-900/20
                hover:bg-slate-800 transition
                no-underline
              "
            >
              <Phone size={16} strokeWidth={2} />
              <span>Call Now</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918867238999?text=Hello%20Shinewalls,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2
                rounded-xl
                bg-gradient-to-r from-sky-600 to-blue-700
                px-4 py-3
                text-white text-sm font-medium
                shadow-lg shadow-blue-600/20
                hover:brightness-110 transition
                no-underline
              "
            >
              <MessageCircle size={16} strokeWidth={2} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3 text-slate-600">
            <Mail size={16} strokeWidth={1.8} className="mt-0.5 flex-shrink-0 text-slate-400" />
            <a
              href="mailto:shinewallspaint@gmail.com"
              className="text-slate-700 hover:text-blue-600 hover:underline transition break-all"
            >
              shinewallspaint@gmail.com
            </a>
          </div>

          {/* Service Area */}
          <div className="flex items-start gap-3 text-slate-500">
            <MapPin size={16} strokeWidth={1.8} className="mt-0.5 flex-shrink-0 text-slate-400" />
            <span>Serving residential & commercial projects</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <p>© 2025 Shinewalls Paints. All rights reserved.</p>
        <p className="mt-2">
          Website designed & developed by{" "}
          <a
            href="https://punith-moolya.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-700 hover:text-blue-600 transition"
          >
            Punith moolya
          </a>
        </p>
      </div>
    </motion.footer>
  );
}