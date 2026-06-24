// src/data/products.js

export const categories = [
  "All",
  "Paints",
  "Chemicals",
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

export const products = [
  // Paints
  {
    name: "Economy Emulsion",
    category: "Paints",
    image: "/productimg/paints3.png",
  },
  {
    name: "Platinum Emulsion",
    category: "Paints",
    image: "/productimg/paints5.png",
  },
  {
    name: "Luxury Emulsion",
    category: "Paints",
    image: "/productimg/paints4.png",
  },
  {
    name: "Gold Metallic",
    category: "Paints",
    image: "/productimg/paints1.png",
  },
  {
    name: "Silver Metallic",
    category: "Paints",
    image: "/productimg/paints2.png",
  },

  // Chemicals
  {
    name: "SW-AA261S",
    category: "Chemicals",
    image: "/productimg/chemicals/chem2.jpeg",
    weight: "220.000 KG",
  },
  {
    name: "SW-OPEX 92",
    category: "Chemicals",
    image: "/productimg/chemicals/chem3.jpeg",
    weight: "220.000 KG",
  },
  {
    name: "SW-ELASTO 50",
    category: "Chemicals",
    image: "/productimg/chemicals/chem4.jpeg",
    weight: "220.000 KG",
  },
  {
    name: "Titanium Dioxide R996",
    category: "Chemicals",
    image: "/productimg/chemicals/chem5.jpeg",
    weight: "25 KG",
    grade: "Rutile Grade TiO2",
  },
  {
    name: "Micron Carb 2030",
    category: "Chemicals",
    image: "/productimg/chemicals/chem6.jpeg",
    weight: "50 KG",
  },
  {
    name: "Micron Talc 2050",
    category: "Chemicals",
    image: "/productimg/chemicals/chem7.jpeg",
    weight: "25 KG",
  },
  {
    name: "China Clay PYJ",
    category: "Chemicals",
    image: "/productimg/chemicals/chem8.jpeg",
    weight: "25 KG",
  },
  {
    name: "Limestone Powder",
    category: "Chemicals",
    image: "/productimg/chemicals/chem9.jpeg",
    weight: "25 KG",
    grade: "20 Microns",
  },
  {
    name: "HCU (Sanitized)",
    category: "Chemicals",
    image: "/productimg/chemicals/chem10.jpeg",
    weight: "50 KG",
  },
  {
    name: "CDO (Sanitized)",
    category: "Chemicals",
    image: "/productimg/chemicals/chem11.jpeg",
    weight: "50 KG",
  },
  {
    name: "HSSL-C12",
    category: "Chemicals",
    image: "/productimg/chemicals/chem12.jpeg",
    weight: "50 KG",
  },
  {
    name: "SW-5295",
    category: "Chemicals",
    image: "/productimg/chemicals/chem13.jpeg",
    weight: "220.000 KG",
  },
  {
    name: "ALPHOX 200",
    category: "Chemicals",
    image: "/productimg/chemicals/chem14.jpeg",
    weight: "50 KG",
  },
  {
    name: "SN 621 N Heur Thickener",
    category: "Chemicals",
    image: "/productimg/chemicals/chem15.jpeg",
    weight: "50 KG",
  },
  {
    name: "Antiforming Agent Al-010",
    category: "Chemicals",
    image: "/productimg/chemicals/chem16.jpeg",
    weight: "50 KG",
  },
  {
    name: "Diethylene Glycol",
    category: "Chemicals",
    image: "/productimg/chemicals/chem17.jpeg",
    weight: "50 KG",
  },
  {
    name: "Pine Oil",
    category: "Chemicals",
    image: "/productimg/chemicals/chem18.jpeg",
    weight: "50 KG",
  },
  {
    name: "Liquid Ammonia NH3",
    category: "Chemicals",
    image: "/productimg/chemicals/chem19.jpeg",
    weight: "50 KG",
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
    image: "/productimg/waterproofing1.png",
  },
  {
    name: "801 Latex Coating",
    category: "Waterproofing",
    image: "/productimg/waterproofing.png",
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
    image: "/productimg/wood1.png",
  },
  {
    name: "Wood Polish",
    category: "Wood",
    image: "/productimg/wood.png",
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
    image: "/productimg/brush.png",
  },
  {
    name: "Paint Roller",
    category: "Tools",
    image: "/productimg/roler.png",
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

export const bestSellers = [
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

// Get products grouped by category (excluding "All")
export const getProductsByCategory = () => {
  const grouped = {};
  categories
    .filter((cat) => cat !== "All")
    .forEach((category) => {
      grouped[category] = products.filter((p) => p.category === category);
    });
  return grouped;
};