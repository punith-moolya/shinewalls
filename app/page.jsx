'use client';

import HeroSection from "@/sections/hero-section";
import OurLatestCreation from "@/sections/our-latest-creation";
import AboutOurApps from "@/sections/about-our-apps";
import OurTestimonials from "@/sections/our-testimonials";
import TrustedCompanies from "@/sections/trusted-companies";
import GetInTouch from "@/sections/get-in-touch";
import SubscribeNewsletter from "@/sections/subscribe-newsletter";
import ProductsSection from "@/sections/our-latest-products";

export default function Page() {
  return (
    <main className="relative">
      <HeroSection />
      <OurLatestCreation />
      <ProductsSection/>
      <AboutOurApps />
      <OurTestimonials />
      {/* <TrustedCompanies /> */}
      <GetInTouch />
      {/* <SubscribeNewsletter /> */}
    </main>
  );
}