"use client";

import SectionTitle from "@/components/section-title";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { getProductsByCategory } from "@/public/products";
import { ArrowRight } from "lucide-react";

// 5 different categories - each card represents ONE category
const showcaseCategories = ["Paints", "Chemicals", "Putty", "Waterproofing", "Tools"];

export default function OurLatestCreation() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);
  
  // Track which product is currently shown in each card (per category)
  const [cardProductIndex, setCardProductIndex] = useState(
    showcaseCategories.map(() => 0)
  );
  
  const intervalRef = useRef(null);
  const productsByCategory = getProductsByCategory();

  // Auto-rotate products WITHIN each card every 5 seconds
  useEffect(() => {
    if (isHovered) return;

    intervalRef.current = setInterval(() => {
      setCardProductIndex((prev) => {
        return prev.map((currentIndex, cardIndex) => {
          const category = showcaseCategories[cardIndex];
          const categoryProducts = productsByCategory[category] || [];
          if (categoryProducts.length === 0) return 0;
          return (currentIndex + 1) % categoryProducts.length;
        });
      });
    }, 5000); // 5 seconds per product rotation

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, productsByCategory]);

  // Auto-rotate which card is expanded (original 3.5s timing)
  useEffect(() => {
    if (isHovered) return;

    const expandInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseCategories.length);
    }, 3500);

    return () => clearInterval(expandInterval);
  }, [isHovered]);

  const handleCheckNow = (category) => {
    // Scroll to products section
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
      
      // Dispatch custom event to change category in ProductsSection
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("categoryChange", { detail: category })
        );
      }, 500); // Small delay to ensure scroll completes
    }
  };

  return (
    <section id="best-sellers" className="flex flex-col items-center mt-10">
      <SectionTitle
        title="Our Product Range"
        description="Explore premium products across all categories — from paints and chemicals to tools and waterproofing solutions."
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
          {showcaseCategories.map((category, cardIndex) => {
            const categoryProducts = productsByCategory[category] || [];
            const currentProductIndex = cardProductIndex[cardIndex];
            const currentProduct = categoryProducts[currentProductIndex] || categoryProducts[0];
            
            if (!currentProduct) return null;

            const isExpanded = isHovered
              ? hoveredIndex === cardIndex
              : activeIndex === cardIndex;

            return (
              <motion.div
                key={category}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: cardIndex * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 55,
                }}
                onAnimationComplete={() => setReady(true)}
                onMouseEnter={() => setHoveredIndex(cardIndex)}
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
                {/* Product Image Area */}
                <div className="h-[100%] flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-50 p-6">
                  <motion.img
                    key={`${category}-${currentProduct.name}`}
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="
                      max-h-full
                      max-w-full
                      object-contain
                    "
                  />
                </div>

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
                      {category}
                    </span>

                    <motion.h3
                      key={`${category}-${currentProduct.name}-title`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-2xl font-bold"
                    >
                      {currentProduct.name}
                    </motion.h3>

                    <motion.p
                      key={`${category}-${currentProduct.name}-desc`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="mt-2 text-sm leading-relaxed max-w-sm"
                    >
                      {currentProduct.weight
                        ? `Premium ${category.toLowerCase()} product — Net Weight: ${currentProduct.weight}`
                        : `Premium ${category.toLowerCase()} product with superior quality and performance.`}
                    </motion.p>

                    {/* Check Now Button */}
                    <button
                      onClick={() => handleCheckNow(category)}
                      className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-sky-900 font-semibold text-sm hover:bg-sky-50 transition-all"
                    >
                      Check Now
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden mt-10 w-full px-4 space-y-5">
        {showcaseCategories.map((category, cardIndex) => {
          const categoryProducts = productsByCategory[category] || [];
          const currentProductIndex = cardProductIndex[cardIndex];
          const currentProduct = categoryProducts[currentProductIndex] || categoryProducts[0];
          const isOpen = activeIndex === cardIndex;

          if (!currentProduct) return null;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: cardIndex * 0.1 }}
              onClick={() => setActiveIndex(cardIndex)}
              className="relative overflow-hidden rounded-2xl"
            >
              <motion.img
                key={`${category}-${currentProduct.name}`}
                src={currentProduct.image}
                alt={currentProduct.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-[240px] object-contain bg-gradient-to-br from-sky-50 via-white to-blue-50 p-4"
              />

              <div
                className={`
                  absolute inset-0 bg-black/50
                  ${isOpen ? "opacity-100" : "opacity-60"}
                `}
              />

              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl bg-transparent p-4">
                  <div className="flex items-center gap-2 text-yellow-500 text-sm">
                    <span className="bg-yellow-400 text-slate-900 px-2 py-0.5 rounded text-xs font-bold">
                      {category}
                    </span>
                  </div>

                  <motion.h3
                    key={`${category}-${currentProduct.name}-title`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg font-bold text-white mt-2"
                  >
                    {currentProduct.name}
                  </motion.h3>

                  <motion.p
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    className="overflow-hidden text-sm mt-2 text-slate-200"
                  >
                    {currentProduct.weight
                      ? `Net Weight: ${currentProduct.weight}`
                      : `Premium ${category.toLowerCase()} product.`}
                  </motion.p>

                  {isOpen && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCheckNow(category);
                      }}
                      className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-sky-900 font-semibold text-sm"
                    >
                      Check Now
                      <ArrowRight size={14} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}