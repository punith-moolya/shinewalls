"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { RippleButton } from "@/components/ui/ripple-button";
import SectionTitle from "@/components/section-title";
import { categories, products } from "@/public/products";

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Listen for category changes from OurLatestCreation
  useEffect(() => {
    const handleCategoryChange = (event) => {
      const category = event.detail;
      if (categories.includes(category)) {
        setActiveCategory(category);
      }
    };

    window.addEventListener("categoryChange", handleCategoryChange);
    return () => {
      window.removeEventListener("categoryChange", handleCategoryChange);
    };
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="products" className="w-full py-8 md:py-10 lg:py-12">
      <SectionTitle
        title="Our Products"
        description="Explore our premium collection of paints,
        waterproofing solutions, construction materials,
        wood finishes, automotive coatings, and
        professional painting tools."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-10">
        {/* Categories */}
        <div className="mb-8 md:mb-12">
          <div
            className="
              flex
              items-center
              gap-2 sm:gap-3
              overflow-x-auto
              overflow-y-hidden
              whitespace-nowrap
              scrollbar-hide
              touch-pan-x
              py-2
              -mx-4 sm:-mx-6 lg:-mx-8
              px-4 sm:px-6 lg:px-8
            "
          >
            {categories.map((category) => (
              <RippleButton
                key={category}
                rippleColor="#ffffff"
                onClick={() => setActiveCategory(category)}
                className={`
                  shrink-0
                  rounded-full
                  px-4 sm:px-6
                  py-2.5 sm:py-3
                  text-xs sm:text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    activeCategory === category
                      ? `
                        bg-gradient-to-br
                        from-sky-400/20
                        to-blue-600/20
                        backdrop-blur-xl
                        border
                        border-white/20
                        text-white
                        shadow-[0_8px_30px_rgba(59,130,246,0.25)]
                      `
                      : `
                        bg-[#466fe0]/85
                        hover:bg-[#0a329e]
                        text-white
                      `
                  }
                `}
              >
                {category}
              </RippleButton>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.name}
              className="
                overflow-hidden
                rounded-2xl sm:rounded-3xl
                bg-white
                border
                border-slate-200
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              {/* Image */}
              <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px] w-full bg-slate-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 sm:p-6"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 border-t border-slate-100">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#121E40]">
                  {product.name}
                </h3>

                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-500">
                  Shinewalls Premium Product
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}