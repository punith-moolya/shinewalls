import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LenisScroll from "@/components/lenis-scroll";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Shinewalls – Premium Paint Solutions",
  description:
    "Shinewalls is a premium paint manufacturing and selling brand delivering elegant, durable wall finishes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="relative min-h-screen overflow-x-hidden text-slate-900 antialiased">

        {/* 🔹 FIXED BACKGROUND IMAGE */}
        <div
          className="fixed inset-0 -z-30 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.jpeg')" }}
        />

        {/* 🔹 GLOBAL COLOR OVERLAY */}
        <div className="fixed inset-0 -z-20 bg-gradient-to-br from-white/80 via-sky-200/40 to-blue-700/40" />

        <LenisScroll />
        <Navbar />

        {/* 🔹 PAGE CONTENT */}
        <main className="relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}