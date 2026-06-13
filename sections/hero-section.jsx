"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden px-6 lg:px-16 pt-24">

            {/* ✨ BACKGROUND OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

            {/* ✨ GLOW ACCENTS */}
            <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-sky-400/40 blur-[160px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/30 blur-[160px] pointer-events-none" />

            {/* ✨ HERO CONTENT CONTAINER */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

                {/* LEFT SIDE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <div className="relative w-full h-[450px] sm:h-[500px] md:h-[520px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-600/20">
                        <Image
                            src="/herosection.png"
                            alt="Hero Section Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* RIGHT SIDE TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 max-w-2xl flex flex-col justify-center"
                >
                    <span className="inline-flex rounded-full bg-sky-600/20 px-4 py-1 text-sm text-center font-medium text-sky-800">
                        Premium Paint Manufacturing
                    </span>

                    <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-slate-900">
                        Elevate spaces <br />
                        with{" "}
                        <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent drop-shadow">
                            Shinewalls
                        </span>
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl text-slate-800">
                        High-performance paints crafted with rich color depth,
                        durability, and elegant finishes — made for walls that stand out.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="https://wa.me/918867238999?text=Hello%20Shinewalls,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
                            target="_blank"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-8 py-3 text-white font-medium shadow-lg shadow-blue-600/40 transition hover:scale-[1.03] active:scale-95"
                        >
                            WhatsApp Us
                            <ArrowUpRight className="size-4" />
                        </a>

                        <a
                            href="mailto:info@shinewalls.com"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/60 bg-white/50 px-8 py-3 font-medium text-slate-900 backdrop-blur transition hover:bg-white/70 active:scale-95"
                        >
                            Email Contact
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}