"use client";

import SectionTitle from "@/components/section-title";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function GetInTouch() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

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
        {/* Quick Contact Buttons — BIG & PROMINENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Call Now Button */}
          <a
            href="tel:+918867238999"
            className="
              flex items-center justify-center gap-3
              rounded-2xl
              bg-slate-900
              px-6 py-5
              text-white text-base font-semibold
              shadow-xl shadow-slate-900/20
              hover:bg-slate-800 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300
              no-underline
            "
          >
            <Phone size={22} strokeWidth={2} />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918867238999?text=Hello%20Shinewalls,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-3
              rounded-2xl
              bg-gradient-to-r from-sky-600 to-blue-700
              px-6 py-5
              text-white text-base font-semibold
              shadow-xl shadow-blue-600/20
              hover:brightness-110 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300
              no-underline
            "
          >
            <MessageCircle size={22} strokeWidth={2} />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white/70 text-sm text-slate-500 font-medium">
              Or send us a message
            </span>
          </div>
        </div>

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
              className="mt-4 py-3 rounded-xl border border-slate-300 bg-white/80"
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
              className="mt-2 px-4 py-3 rounded-xl border text-black border-slate-300 bg-white/80"
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