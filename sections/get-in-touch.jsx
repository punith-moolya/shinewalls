"use client";

import SectionTitle from "@/components/section-title";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function GetInTouch() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("SERVICE:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
        },
        (error) => {
          console.log("STATUS:", error?.status);
          console.log("TEXT:", error?.text);
          console.log("FULL:", error);
          alert(`Error: ${error?.text || "Unknown error"}`);
        },
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center px-4 md:px-6 mt-16"
    >
      <SectionTitle
        title="Get in touch"
        description="Reach out to us for premium painting services and expert consultation."
      />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mt-12 md:mt-16 bg-white/70 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-6 md:p-10"
      >
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {/* NAME */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-700">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter your name"
              className="mt-2 px-4 py-3 rounded-xl border border-slate-300 bg-white/80"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-700">
              Email ID
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="mt-2 px-4 py-3 rounded-xl border border-slate-300 bg-white/80"
            />
          </div>

          {/* MESSAGE */}
          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="Enter your message"
              className="mt-2 px-4 py-3 rounded-xl border border-slate-300 bg-white/80"
            />
          </div>

          {/* BUTTON */}
          <div className="md:col-span-2 flex justify-end mt-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 rounded-xl 
              bg-gradient-to-r from-sky-600 to-blue-700 text-white font-medium"
            >
              Submit
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
