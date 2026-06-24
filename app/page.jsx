'use client';

import HeroSection from "@/sections/hero-section";
import OurLatestCreation from "@/sections/our-latest-creation";
import AboutOurApps from "@/sections/about-our-apps";
import OurTestimonials from "@/sections/our-testimonials";
import TrustedCompanies from "@/sections/trusted-companies";
import GetInTouch from "@/sections/get-in-touch";
import SubscribeNewsletter from "@/sections/subscribe-newsletter";
import ProductsSection from "@/sections/our-latest-products";
import OrganizationSchema from "@/components/OrganizationSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function Page() {
  return (
    <main className="relative">
      <OrganizationSchema/>
      <LocalBusinessSchema/>


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