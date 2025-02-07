import AboutUs from "@components/sections/AboutUs";
import Blog from "@components/sections/Blog";
import ChooseUs from "@components/sections/ChooseUs";
import Destination from "@components/sections/Destination";
import Hero from "@components/sections/Hero";
import Sponsor from "@components/sections/Sponsor";
import Testimonial from "@components/sections/Testimonial";
import TestimonialSwiper from "@components/sections/TestimonialSwiper";
import VideoPreview from "@components/sections/VideoPreview";

export default function Home() {
  return (
    <>
    <Hero />
    <AboutUs />
    <Destination />
    <ChooseUs />
    <VideoPreview />
    <Testimonial />
    <TestimonialSwiper />
    <Blog />
    <Sponsor />
    </>
  );
}
