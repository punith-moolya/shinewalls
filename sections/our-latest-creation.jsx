"use client";

import SectionTitle from "@/components/section-title";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OurLatestCreation() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);

  const sectionData = [
    {
      title: "Interior Premium Paints",
      description:
        "Smooth finishes with rich color depth, low VOC, and long-lasting elegance for modern interiors.",
      image: "/interior.png",
    },
    {
      title: "Designer Texture Finishes",
      description:
        "Luxury textures that add depth, character, and architectural sophistication to walls.",
      image: "/exterior.png",
    },
    {
      title: "Exterior Weather Shield",
      description:
        "Advanced exterior coatings engineered to resist heat, rain, and harsh climates.",
      image: "/teture.png",
    },
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sectionData.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, sectionData.length]);

  return (
    <section id="creations" className="flex flex-col items-center mt-10">
      <SectionTitle
        title="Our Products"
        description="Premium paint solutions crafted for durability, beauty, and performance."
      />

      <div
        className="mt-20 w-full max-w-7xl px-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredIndex(null);
        }}
      >
        <div className="flex gap-6 h-[580px]">
          {sectionData.map((data, index) => {
            const isExpanded = isHovered
              ? hoveredIndex === index
              : activeIndex === index;

            return (
              <motion.div
                key={data.title}
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                onAnimationComplete={() => setReady(true)}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 260,
                  damping: 60,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`
                  relative overflow-hidden rounded-2xl
                  transition-all duration-500 ease-in-out
                  ${ready ? "cursor-pointer" : "pointer-events-none"}
                  ${
                    isExpanded
                      ? "flex-[3]"
                      : "flex-[1.2]"
                  }
                `}
              >
                {/* Image */}
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-full w-full object-cover"
                />

                {/* Overlay (only when expanded) */}
                <div
                  className={`
                    absolute inset-0 bg-black/45 transition-opacity duration-300
                    ${isExpanded ? "opacity-100" : "opacity-0"}
                  `}
                />

                {/* Text (ONLY when expanded) */}
                <div
                  className={`
                    absolute inset-x-0 bottom-0 p-10 text-white
                    transition-all duration-300
                    ${
                      isExpanded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }
                  `}
                >
                  <h3 className="text-3xl font-semibold">
                    {data.title}
                  </h3>
                  <p className="mt-3 text-base max-w-md leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}