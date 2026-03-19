"use client";

import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

export default function AboutOurApps() {
  const sectionData = [
    {
      title: "Premium Finish Quality",
      description:
        "Engineered for smooth application and rich, long-lasting finishes that elevate every space.",
      icon: "🎨",
    },
    {
      title: "Built for Indian Climate",
      description:
        "Formulated to withstand heat, humidity, and heavy rains without fading or peeling.",
      icon: "☀️",
    },
    {
      title: "Trusted & Durable",
      description:
        "High-performance coatings tested for strength, adhesion, and long-term protection.",
      icon: "🛡️",
    },
  ];

  return (
    <section id="about" className="relative mt-32">
      <SectionTitle
        title="Why Shinewalls"
        description="Crafted with precision, tested for durability, and designed to transform walls into lasting impressions."
      />

      <div className="relative mx-auto mt-20 max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {sectionData.map((data, index) => (
            <motion.div
              key={data.title}
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 260,
                damping: 60,
              }}
              className="group relative rounded-2xl bg-white p-8 shadow-xl shadow-sky-500/10 transition hover:-translate-y-1"
            >
              {/* Accent glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-sky-400/20 to-blue-600/20 opacity-0 blur-xl transition group-hover:opacity-100" />

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-600/10 text-2xl">
                {data.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {data.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {data.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}