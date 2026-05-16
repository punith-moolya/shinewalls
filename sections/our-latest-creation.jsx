


// "use client";

// import SectionTitle from "@/components/section-title";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function OurLatestCreation() {
//   const [isHovered, setIsHovered] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(null); // ✅ FIXED
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [ready, setReady] = useState(false);

//   const sectionData = [
//   {
//     title: "Interior Premium Paints",
//     description:
//       "Smooth finishes with rich color depth, low VOC, and long-lasting elegance for modern interiors.",
//     image: "/interior.png",
//   },
//   {
//     title: "Designer Texture Finishes",
//     description:
//       "Luxury textures that add depth, character, and architectural sophistication to walls.",
//     image: "/exterior.png",
//   },
//   {
//     title: "Exterior Weather Shield",
//     description:
//       "Advanced exterior coatings engineered to resist heat, rain, and harsh climates.",
//     image: "/teture.png",
//   },
//   {
//     title: "Economy Emulsion",
//     description:
//       "Affordable interior and exterior emulsion paint with smooth finish, strong coverage, and reliable wall protection.",
//     image: "/emulsion1.png",
//   },
//   {
//     title: "Cool Proof Coating",
//     description:
//       "High-performance heat resistant coating that keeps homes cooler while protecting walls from leakage and harsh weather.",
//     image: "/coolproof.png",
//   },
//   {
//     title: "All Climate Shield",
//     description:
//       "Durable exterior coating built for long-lasting protection against rain, sunlight, moisture, and extreme weather.",
//     image: "/allclimate.png",
//   },
//   ];

//   // 🔁 AUTO SLIDE (desktop feel)
//   useEffect(() => {
//     if (isHovered) return;
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % sectionData.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, [isHovered, sectionData.length]);

//   return (
//     <section id="creations" className="flex flex-col items-center mt-10">
//       <SectionTitle
//         title="Our Products"
//         description="Premium paint solutions crafted for durability, beauty, and performance."
//       />

//       {/* ================= DESKTOP ================= */}
//       <div
//         className="hidden md:block mt-20 w-full max-w-7xl px-6"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => {
//           setIsHovered(false);
//           setHoveredIndex(null);
//         }}
//       >
//         <div className="flex gap-6 h-[580px]">
//           {sectionData.map((data, index) => {
//             const isExpanded = isHovered
//               ? hoveredIndex === index
//               : activeIndex === index;

//             return (
//               <motion.div
//                 key={data.title}
//                 initial={{ y: 120, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 onAnimationComplete={() => setReady(true)}
//                 transition={{
//                   delay: index * 0.15,
//                   type: "spring",
//                   stiffness: 260,
//                   damping: 60,
//                 }}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 className={`relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out
//                 ${ready ? "cursor-pointer" : "pointer-events-none"}
//                 ${isExpanded ? "flex-[3]" : "flex-[1.2]"}`}
//               >
//                 {/* Image */}
//                 <img
//                   src={data.image}
//                   alt={data.title}
//                   className="h-full w-full object-cover"
//                 />

//                 {/* Overlay */}
//                 <div
//                   className={`absolute inset-0 bg-black/45 transition-opacity duration-300
//                   ${isExpanded ? "opacity-100" : "opacity-0"}`}
//                 />

//                 {/* Text */}
//                 <div
//                   className={`absolute inset-x-0 bottom-0 p-10 text-white transition-all duration-300
//                   ${isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//                 >
//                   <h3 className="text-3xl font-semibold">{data.title}</h3>
//                   <p className="mt-3 text-base max-w-md leading-relaxed">
//                     {data.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* ================= MOBILE ================= */}
//       <div className="md:hidden mt-10 w-full px-4 space-y-6">
//         {sectionData.map((data, index) => {
//           const isOpen = activeIndex === index;

//           return (
//             <motion.div
//               key={data.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               onClick={() => setActiveIndex(index)}
//               className="relative rounded-2xl overflow-hidden cursor-pointer"
//             >
//               {/* Image */}
//               <img
//                 src={data.image}
//                 alt={data.title}
//                 className="w-full h-[260px] object-cover"
//               />

//               {/* Overlay */}
//               <div
//                 className={`absolute inset-0 bg-black/50 transition-all duration-300
//                 ${isOpen ? "opacity-100" : "opacity-60"}`}
//               />

//               {/* Content */}
//               <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
//                 <h3 className="text-xl font-semibold">{data.title}</h3>

//                 <motion.p
//                   initial={false}
//                   animate={{
//                     height: isOpen ? "auto" : 0,
//                     opacity: isOpen ? 1 : 0,
//                   }}
//                   className="overflow-hidden text-sm mt-2 leading-relaxed"
//                 >
//                   {data.description}
//                 </motion.p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }



// "use client";

// import SectionTitle from "@/components/section-title";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function OurLatestCreation() {
//   const [isHovered, setIsHovered] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [ready, setReady] = useState(false);

//   const sectionData = [
//     {
//       title: "Interior Premium Paints",
//       description:
//         "Smooth finishes with rich color depth, low VOC, and long-lasting elegance for modern interiors.",
//       image: "/interior.png",
//     },
//     {
//       title: "Designer Texture Finishes",
//       description:
//         "Luxury textures that add depth, character, and architectural sophistication to walls.",
//       image: "/exterior.png",
//     },
//     {
//       title: "Exterior Weather Shield",
//       description:
//         "Advanced exterior coatings engineered to resist heat, rain, and harsh climates.",
//       image: "/teture.png",
//     },
//     {
//       title: "Economy Emulsion",
//       description:
//         "Affordable interior and exterior emulsion paint with smooth finish, strong coverage, and reliable wall protection.",
//       image: "/emulsion1.png",
//     },
//     {
//       title: "Cool Proof Coating",
//       description:
//         "High-performance heat resistant coating that keeps homes cooler while protecting walls from leakage and harsh weather.",
//       image: "/coolproof.png",
//     },
//     {
//       title: "All Climate Shield",
//       description:
//         "Durable exterior coating built for long-lasting protection against rain, sunlight, moisture, and extreme weather.",
//       image: "/allclimate.png",
//     },
//   ];

//   useEffect(() => {
//     if (isHovered) return;

//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % sectionData.length);
//     }, 3500);

//     return () => clearInterval(interval);
//   }, [isHovered, sectionData.length]);

//   return (
//     <section id="creations" className="flex flex-col items-center mt-10">
//       <SectionTitle
//         title="Our Products"
//         description="Premium paint solutions crafted for durability, beauty, and performance."
//       />

//       {/* ================= DESKTOP (3 x 2 GRID, FULL HEIGHT PRESERVED) ================= */}
//       <div
//         className="hidden md:block mt-20 w-full max-w-7xl px-6"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => {
//           setIsHovered(false);
//           setHoveredIndex(null);
//         }}
//       >
//         <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[1160px]">
//           {sectionData.map((data, index) => {
//             const isExpanded = isHovered
//               ? hoveredIndex === index
//               : activeIndex === index;

//             return (
//               <motion.div
//                 key={data.title}
//                 initial={{ y: 120, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 onAnimationComplete={() => setReady(true)}
//                 transition={{
//                   delay: index * 0.15,
//                   type: "spring",
//                   stiffness: 260,
//                   damping: 60,
//                 }}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 className={`relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out
//                 ${ready ? "cursor-pointer" : "pointer-events-none"}`}
//               >
//                 {/* Image */}
//                 <img
//                   src={data.image}
//                   alt={data.title}
//                   className="h-full w-full object-cover"
//                 />

//                 {/* Overlay */}
//                 <div
//                   className={`absolute inset-0 bg-black/45 transition-opacity duration-300
//                   ${isExpanded ? "opacity-100" : "opacity-0"}`}
//                 />

//                 {/* Text */}
//                 <div
//                   className={`absolute inset-x-0 bottom-0 p-10 text-white transition-all duration-300
//                   ${isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//                 >
//                   <h3 className="text-3xl font-semibold">{data.title}</h3>
//                   <p className="mt-3 text-base max-w-md leading-relaxed">
//                     {data.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* ================= MOBILE (UNCHANGED) ================= */}
//       <div className="md:hidden mt-10 w-full px-4 space-y-6">
//         {sectionData.map((data, index) => {
//           const isOpen = activeIndex === index;

//           return (
//             <motion.div
//               key={data.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               onClick={() => setActiveIndex(index)}
//               className="relative rounded-2xl overflow-hidden cursor-pointer"
//             >
//               <img
//                 src={data.image}
//                 alt={data.title}
//                 className="w-full h-[260px] object-cover"
//               />

//               <div
//                 className={`absolute inset-0 bg-black/50 transition-all duration-300
//                 ${isOpen ? "opacity-100" : "opacity-60"}`}
//               />

//               <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
//                 <h3 className="text-xl font-semibold">{data.title}</h3>

//                 <motion.p
//                   initial={false}
//                   animate={{
//                     height: isOpen ? "auto" : 0,
//                     opacity: isOpen ? 1 : 0,
//                   }}
//                   className="overflow-hidden text-sm mt-2 leading-relaxed"
//                 >
//                   {data.description}
//                 </motion.p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


"use client";

import SectionTitle from "@/components/section-title";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OurLatestCreation() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);

  const sectionDataTop = [
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

  const sectionDataBottom = [
    {
      title: "Economy Emulsion",
      description:
        "Affordable interior and exterior emulsion paint with smooth finish, strong coverage, and reliable wall protection.",
      image: "/emulsion1.png",
    },
    {
      title: "Cool Proof Coating",
      description:
        "High-performance heat resistant coating that keeps homes cooler while protecting walls from leakage and harsh weather.",
      image: "/coolproof.png",
    },
    {
      title: "All Climate Shield",
      description:
        "Durable exterior coating built for long-lasting protection against rain, sunlight, moisture, and extreme weather.",
      image: "/allclimate.png",
    },
  ];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sectionDataTop.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const renderCards = (dataArray) =>
    dataArray.map((data, index) => {
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
          className={`relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out
          ${ready ? "cursor-pointer" : "pointer-events-none"}
          ${isExpanded ? "flex-[3]" : "flex-[1.2]"}`}
        >
          <img
            src={data.image}
            alt={data.title}
            className="h-full w-full object-cover"
          />

          <div
            className={`absolute inset-0 bg-black/45 transition-opacity duration-300
            ${isExpanded ? "opacity-100" : "opacity-0"}`}
          />

          <div
            className={`absolute inset-x-0 bottom-0 p-10 text-white transition-all duration-300
            ${isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <h3 className="text-3xl font-semibold">{data.title}</h3>
            <p className="mt-3 text-base max-w-md leading-relaxed">
              {data.description}
            </p>
          </div>
        </motion.div>
      );
    });

  return (
    <section id="creations" className="flex flex-col items-center mt-10">
      <SectionTitle
        title="Our Products"
        description="Premium paint solutions crafted for durability, beauty, and performance."
      />

      {/* ================= DESKTOP ================= */}
      <div
        className="hidden md:block mt-20 w-full max-w-7xl px-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredIndex(null);
        }}
      >
        {/* TOP ROW */}
        <div className="flex gap-6 h-[580px] mb-10">
          {renderCards(sectionDataTop)}
        </div>

        {/* BOTTOM ROW */}
        <div className="flex gap-6 h-[580px]">
          {renderCards(sectionDataBottom)}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden mt-10 w-full px-4 space-y-6">
        {[...sectionDataTop, ...sectionDataBottom].map((data, index) => {
          const isOpen = activeIndex === index;

          return (
            <motion.div
              key={data.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveIndex(index)}
              className="relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-[260px] object-cover"
              />

              <div
                className={`absolute inset-0 bg-black/50 transition-all duration-300
                ${isOpen ? "opacity-100" : "opacity-60"}`}
              />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-xl font-semibold">{data.title}</h3>

                <motion.p
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  className="overflow-hidden text-sm mt-2 leading-relaxed"
                >
                  {data.description}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}