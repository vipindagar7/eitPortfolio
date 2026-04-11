import About from "@/components/Home/About";
import Achievements from "@/components/Home/Achivements";
import AdmissionCTA from "@/components/Home/AdmissionCTA";
import CampusLife from "@/components/Home/CampusLife";
import Contact from "@/components/Home/Contact";
import Courses from "@/components/Home/Courses";
import Events from "@/components/Home/Events";
import FAQ from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import Placements from "@/components/Home/Placement";
import Testimonials from "@/components/Home/Testimonials";
import ImageSlider from "@/components/utils/ImageSlider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ImageSlider
        images={[
          "/assets/images/1SLIDE.webp",
          "/assets/images/2SLIDE.webp",
          "/assets/images/3SLIDE.webp",
        ]}
        autoPlay
        interval={5000}
        className="h-[100vh] w-full relative"
        overlay={<Hero />}
      />
      <About />
      <Courses />
      <Placements />
      <Achievements />
      <CampusLife />
      <Events />
      <Testimonials />
      <FAQ />
      <AdmissionCTA />
      <Contact/>
        


    </>
  );
}
