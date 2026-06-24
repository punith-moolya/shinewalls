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
  metadataBase: new URL("https://www.shinewalls.com"),
  
  title: {
    default: "Shinewalls Paints Industries | Premium Paints, Waterproofing & Construction Chemicals Manufacturer in India",
    template: "%s | Shinewalls Paints Industries"
  },
  
  description: "Shinewalls Paints Industries manufactures premium interior & exterior paints, wall putty, waterproofing solutions, primers, construction chemicals, tile adhesives, wood coatings, industrial chemicals and painting tools. Trusted by contractors and homeowners across India for superior quality and durable finishes.",
  
  keywords: [
    "paint manufacturer India",
    "interior paint",
    "exterior paint",
    "wall paint",
    "emulsion paint",
    "luxury emulsion",
    "platinum emulsion",
    "economy emulsion",
    "wall putty",
    "acrylic wall putty",
    "cement wall putty",
    "waterproofing solutions",
    "waterproofing chemicals",
    "construction chemicals",
    "tile adhesive",
    "tile grout",
    "wood finish",
    "PU wood finish",
    "wood polish",
    "primers",
    "waterproof primer",
    "industrial chemicals",
    "titanium dioxide",
    "micronized chemicals",
    "painting tools",
    "paint brushes",
    "paint rollers",
    "solvents",
    "NC thinner",
    "Shinewalls paints",
    "paint company India",
    "best paint brand India",
    "premium paints India",
    "exterior waterproofing",
    "interior waterproofing",
    "textured paint",
    "designer finishes"
  ],
  
  authors: [{ name: "Shinewalls Paints Industries" }],
  
  creator: "Shinewalls Paints Industries",
  
  publisher: "Shinewalls Paints Industries",
  
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  
  applicationName: "Shinewalls Paints",
  
  referrer: "origin-when-cross-origin",
  
  classification: "Business",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  alternates: {
    canonical: "https://www.shinewalls.com",
    languages: {
      "en-IN": "https://www.shinewalls.com",
    },
  },
  
  openGraph: {
    title: "Shinewalls Paints Industries | Premium Paint & Construction Chemicals Manufacturer",
    description: "Leading manufacturer of premium paints, waterproofing solutions, wall putty, construction chemicals, tile adhesives, wood coatings and industrial products. Superior quality, durable finishes, trusted by professionals.",
    url: "https://www.shinewalls.com",
    siteName: "Shinewalls Paints Industries",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shinewalls Paints Industries - Premium Paint Manufacturer",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Shinewalls Paints Industries Logo",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Shinewalls Paints Industries | Premium Paint Manufacturer",
    description: "Manufacturer of premium paints, waterproofing solutions, wall putty, primers and construction chemicals. Superior quality for homes and commercial spaces.",
    creator: "@shinewallspaints",
    site: "@shinewallspaints",
    images: ["/og-image.jpg"],
  },
  
  category: "Business",
  
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1e40af",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="relative min-h-screen overflow-x-hidden text-slate-900 antialiased">
        {/* FIXED BACKGROUND IMAGE */}
        <div
          className="fixed inset-0 -z-30 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.jpeg')" }}
        />

        {/* GLOBAL COLOR OVERLAY */}
        <div className="fixed inset-0 -z-20 bg-gradient-to-br from-white/80 via-sky-200/40 to-blue-700/40" />

        <LenisScroll />
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}