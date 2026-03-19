"use client";

import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

export default function OurTestimonials() {
  const testimonials = [
    {
      quote:
        "The finish quality is outstanding. Our living room walls still look fresh and vibrant even after two years.",
      name: "Ramesh Kumar",
      role: "Home Owner",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      quote:
        "Shinewalls textures added a premium look to our project. Clients instantly notice the difference.",
      name: "Anita Sharma",
      role: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      quote:
        "Excellent coverage and durability. The exterior paint handled monsoon and heat without any issues.",
      name: "Vikram Rao",
      role: "Building Contractor",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "Smooth application and consistent color tone. One of the best paint brands we’ve worked with.",
      name: "Sneha Iyer",
      role: "Architect",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "Great finish and easy maintenance. Perfect choice for modern homes.",
      name: "Arjun Patel",
      role: "Villa Owner",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      quote:
        "Reliable quality and professional results every time. Shinewalls has become our go-to brand.",
      name: "Meera Nair",
      role: "Project Manager",
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
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
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-sky-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}