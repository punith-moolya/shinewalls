"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ title, description }) {
  return (
    <div className="flex justify-center mt-32 px-4">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        className="
          relative max-w-4xl w-full
          overflow-hidden
          border border-indigo-900
          bg-gradient-to-br from-[#401B98]/5 to-[#180027]/10
          rounded-3xl
          px-6 py-10 md:px-10 md:py-14
          text-center
        "
      >
        {/* SAME glow blobs */}
        <div className="absolute pointer-events-none top-10 -z-10 left-20 size-64 bg-gradient-to-br from-[#536DFF] to-[#4F39F6]/60 blur-[180px]" />
        <div className="absolute pointer-events-none bottom-10 -z-10 right-20 size-64 bg-gradient-to-br from-[#536DFF] to-[#4F39F6]/60 blur-[180px]" />

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-r from-white to-[#b6abff] text-transparent bg-clip-text">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-base text-black max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>
    </div>
  );
}