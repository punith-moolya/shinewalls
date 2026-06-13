"use client";

import { useState } from "react";
import Image from "next/image";
import { RippleButton } from "@/components/ui/ripple-button";
import SectionTitle from "@/components/section-title";

const categories = [
  "All",
  "Paints",
  "Primers",
  "Putty",
  "Waterproofing",
  "Construction",
  "Tiles",
  "Wood",
  "Automotive",
  "Tools",
  "Solvents",
  "Cleaning",
];

const products = [
  // Paints
  {
    name: "Economy Emulsion",
    category: "Paints",
    image: "/productimg/paints1.png",
  },
  {
    name: "Platinum Emulsion",
    category: "Paints",
    image: "/productimg/paints2.png",
  },
  {
    name: "Luxury Emulsion",
    category: "Paints",
    image: "/productimg/paints3.png",
  },
  {
    name: "Gold Metallic",
    category: "Paints",
    image: "/productimg/paints4.png",
  },
  {
    name: "Silver Metallic",
    category: "Paints",
    image: "/productimg/paints5.png",
  },

  // Primers
  {
    name: "Waterproof Primer",
    category: "Primers",
    image: "/productimg/primers.png",
  },

  // Putty
  {
    name: "Acrylic Wall Putty",
    category: "Putty",
    image: "/productimg/putty.png",
  },
  {
    name: "Cement Wall Putty",
    category: "Putty",
    image: "/productimg/putty1.png",
  },

  // Waterproofing
  {
    name: "701 LW Waterproofing",
    category: "Waterproofing",
    image: "/productimg/waterproofing.png",
  },
  {
    name: "801 Latex Coating",
    category: "Waterproofing",
    image: "/productimg/waterproofing1.png",
  },
  {
    name: "Cool Proof",
    category: "Waterproofing",
    image: "/productimg/waterproofing3.png",
  },

  // Construction
  {
    name: "White Cement",
    category: "Construction",
    image: "/productimg/construction.png",
  },
  {
    name: "Gypsum Plaster",
    category: "Construction",
    image: "/productimg/construction1.png",
  },
  {
    name: "Chalk Powder",
    category: "Construction",
    image: "/productimg/construction4.png",
  },
  {
    name: "Crack Filler",
    category: "Construction",
    image: "/productimg/construction5.png",
  },

  // Tiles
  {
    name: "Tile Adhesive",
    category: "Tiles",
    image: "/productimg/tile.png",
  },
  {
    name: "Tile Grout",
    category: "Tiles",
    image: "/productimg/tile1.png",
  },

  // Wood
  {
    name: "PU Wood Finish",
    category: "Wood",
    image: "/productimg/wood.png",
  },
  {
    name: "Wood Polish",
    category: "Wood",
    image: "/productimg/wood1.png",
  },

  // Automotive
  {
    name: "Auto Finish",
    category: "Automotive",
    image: "/productimg/auto1.png",
  },
  {
    name: "Spray Paint",
    category: "Automotive",
    image: "/productimg/auto2.png",
  },

  // Tools
  {
    name: "Paint Brush",
    category: "Tools",
    image: "/productimg/tool.png",
  },
  {
    name: "Paint Roller",
    category: "Tools",
    image: "/productimg/tool1.png",
  },

  // Solvents
  {
    name: "NC Thinner 888",
    category: "Solvents",
    image: "/productimg/solvent.png",
  },
  {
    name: "NC Thinner 999",
    category: "Solvents",
    image: "/productimg/solvent1.png",
  },

  // Cleaning
  {
    name: "Total Clean Tiles Cleaner",
    category: "Cleaning",
    image: "/productimg/cleaner.png",
  },
];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section className="w-full py-10">
      <SectionTitle
              title="Our Products"
              description="Explore our premium collection of paints,
              waterproofing solutions, construction materials,
              wood finishes, automotive coatings, and
              professional painting tools."
            />
      <div className="max-w-7xl mt-10 mx-auto">
        {/* Categories */}
        <div className="mb-12">
          <div
            className="
              flex
              items-center
              gap-3
              overflow-x-auto
              overflow-y-hidden
              whitespace-nowrap
              scrollbar-hide
              touch-pan-x
              py-2
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
                  px-6
                  py-3
                  text-sm
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.name}
              className="
                overflow-hidden
                rounded-3xl
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
              <div className="relative h-[520px] w-full bg-slate-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6"
                />
              </div>

              {/* Content */}
              <div className="p-6 border-t border-slate-100">
                <h3 className="text-xl font-semibold text-[#121E40]">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
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