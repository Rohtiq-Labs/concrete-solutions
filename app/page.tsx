import type { JSX } from "react";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { About } from "@/components/sections/About/About";
import { Services } from "@/components/sections/Services/Services";
import { Outdoor } from "@/components/sections/Outdoor/Outdoor";
import { Why } from "@/components/sections/Why/Why";
import { Process } from "@/components/sections/Process/Process";
import { Work } from "@/components/sections/Work/Work";
import { Video } from "@/components/sections/Video/Video";
import { Finance } from "@/components/sections/Finance/Finance";
import { Cta } from "@/components/sections/Cta/Cta";
import { Contact } from "@/components/sections/Contact/Contact";

export default function Home(): JSX.Element {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Outdoor />
        <Why />
        <Process />
        <Work />
        <Video />
        <Finance />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
