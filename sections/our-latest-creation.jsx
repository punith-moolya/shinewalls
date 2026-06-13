"use client";

import SectionTitle from "@/components/section-title";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OurLatestCreation() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);

  const bestSellers = [
    {
      title: "Luxury Emulsion",
      description:
        "Premium interior paint delivering exceptional smoothness, rich color depth, and long-lasting elegance.",
      image: "/productimg/paints3.png",
    },
    {
      title: "Cool Proof",
      description:
        "Advanced waterproof and heat-reflective coating that helps keep buildings cooler and protected.",
      image: "/productimg/waterproofing3.png",
    },
    {
      title: "Platinum Emulsion",
      description:
        "High-performance emulsion with superior coverage, durability, and premium wall finish.",
      image: "/productimg/paints2.png",
    },
    {
      title: "PU Wood Finish",
      description:
        "Professional-grade wood coating that enhances natural grain while protecting surfaces.",
      image: "/productimg/wood.png",
    },
    {
      title: "Tile Adhesive",
      description:
        "Strong bonding adhesive for long-lasting tile installations in residential and commercial spaces.",
      image: "/productimg/tile.png",
    },
  ];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bestSellers.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, bestSellers.length]);

  return (
    <section id="best-sellers" className="flex flex-col items-center mt-10">
      <SectionTitle
        title="Best Sellers"
        description="Our most trusted and highest-selling products preferred by homeowners, contractors, and professionals."
      />

      {/* Desktop */}
      <div
        className="hidden md:block mt-16 w-full max-w-7xl px-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredIndex(null);
        }}
      >
        <div className="flex gap-5 h-[430px]">
          {bestSellers.map((product, index) => {
            const isExpanded = isHovered
              ? hoveredIndex === index
              : activeIndex === index;

            return (
           <motion.div
  key={product.title}
  initial={{ y: 100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{
    delay: index * 0.1,
    type: "spring",
    stiffness: 260,
    damping: 55,
  }}
  onAnimationComplete={() => setReady(true)}
  onMouseEnter={() => setHoveredIndex(index)}
  className={`
    relative overflow-hidden rounded-3xl
    bg-white
    border border-slate-200
    shadow-lg
    transition-all duration-500 ease-in-out
    ${ready ? "cursor-pointer" : "pointer-events-none"}
    ${isExpanded ? "flex-[3]" : "flex-[1]"}
  `}
>
  {/* Product Image Area - 85% */}
  <div className="h-[100%] flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-50 p-6">
    <img
      src={product.image}
      alt={product.title}
      className="
        max-h-full
        max-w-full
        object-contain
        transition-transform duration-500
        group-hover:scale-105
      "
    />
  </div>

  {/* Product Info Area - 15% */}

  {/* Expanded Overlay */}
  <div
    className={`
      absolute inset-0 bg-gradient-to-t
      from-sky-900/80 via-sky-900/20 to-transparent
      transition-all duration-300
      ${isExpanded ? "opacity-100" : "opacity-0"}
    `}
  >
    <div className="absolute bottom-6 left-6 right-6 text-white">
      <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900">
        ⭐ BEST SELLER
      </span>

      <h3 className="mt-3 text-2xl font-bold">
        {product.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed max-w-sm">
        {product.description}
      </p>
    </div>
  </div>
</motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden mt-10 w-full px-4 space-y-5">
        {bestSellers.map((product, index) => {
          const isOpen = activeIndex === index;

          return (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveIndex(index)}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[240px] object-cover"
              />

              <div
                className={`
                  absolute inset-0 bg-black/50
                  ${isOpen ? "opacity-100" : "opacity-60"}
                `}
              />

              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl bg-transparent  p-4">
                  <div className="flex items-center gap-1 text-yellow-500 text-sm">
                    ★★★★★
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mt-2">
                    {product.title}
                  </h3>

                  <motion.p
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    className="overflow-hidden text-sm mt-2 text-slate-600"
                  >
                    {product.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
