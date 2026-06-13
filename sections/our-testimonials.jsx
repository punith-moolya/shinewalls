"use client";

import { User } from "lucide-react";
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

export default function OurTestimonials() {
  const testimonials = [
    {
      quote:
        "Used Shinewalls Platinum Emulsion for our new home. The finish came out smooth and elegant. Even after months, the walls look fresh.",
      name: "Praveen Shetty",
      role: "Home Owner",
    },
    {
      quote:
        "We regularly use Shinewalls products in our projects. Good coverage, consistent quality, and easy application for painters.",
      name: "Raghavendra Poojary",
      role: "Building Contractor",
    },
    {
      quote:
        "The waterproofing products performed very well during heavy monsoon. We are satisfied with the durability.",
      name: "Mahesh Bhandary",
      role: "Civil Engineer",
    },
    {
      quote:
        "Luxury Emulsion gave our interiors a premium look. The color richness and finish exceeded our expectations.",
      name: "Keerthana Rai",
      role: "Interior Designer",
    },
    {
      quote:
        "Tile adhesive and grout quality are excellent. Easy to work with and provides strong bonding.",
      name: "Dinesh Acharya",
      role: "Tiles Contractor",
    },
    {
      quote:
        "Our customers often ask which paint we recommend. Shinewalls has become one of our trusted choices because of its reliable results.",
      name: "Sandeep Alva",
      role: "Paint Dealer",
    },
  ];

  return (
    <section id="testimonials" className="mt-32">
      <SectionTitle
        title="What Our Customers Say"
        description="Real experiences from homeowners, designers, and professionals who trust Shinewalls."
      />

      <div className="mx-auto mt-20 max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 260,
                damping: 60,
              }}
              className="rounded-2xl bg-white p-8 shadow-xl shadow-sky-500/10 transition hover:-translate-y-1"
            >
              <p className="text-slate-700 leading-relaxed">
                “{testimonial.quote}”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#536DFF] to-[#4F39F6] text-white shadow-lg">
                  <User size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-sky-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
