import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Testimonials } from "@/components/Testimonials";
import { Tooltip } from "@/components/Tooltip";
import UpcomingEvents from "@/components/UpcomingEvents";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs/>
    <Testimonials/>
    <UpcomingEvents/>
    <Tooltip/>
    <Footer/>
    </main>
  );
}
