import Projects from "../ui/projectSection";
import AboutMeSection from "../ui/aboutMeSection";
import Education from "../ui/education";
import ContactMeSection from "../ui/contactMeSection";
import FooterSection from "../ui/footerSection";
import IntroSection from "../ui/introSection";
import PreLoader from "../components/preloader";
import { useEffect } from "react";
import Experience from "../ui/experience";
import Blogs from "./blogs";

let page_load = sessionStorage.getItem("page_load") === "true" ? true : false;

function Home() {
useEffect(() => {!page_load ? sessionStorage.setItem("page_load", "true") : ""; },[]);

  return (
    <>
      {!page_load ? <PreLoader/> : "" }
      <IntroSection />
      <Projects />
      <hr/>
      <AboutMeSection />
      <Blogs/>
      <Education />
      <Experience />
      <ContactMeSection />
      <FooterSection />
    </>
  );
}

export default Home;
