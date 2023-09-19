import { AboutMeSection } from "./components/AboutMeSection";
import { BannerSection } from "./components/BannerSection";
import { Footer } from "./components/Footer";
import { ProjectsSection } from "./components/ProjectSection";
import { TechSection } from "./components/TechSection";
import { Header } from "./components/Header";
import "./styles/globalStyle.css";
import "./styles/reset.css";
import React from "react";


function App() {

  return (
    <div>
      <div className="containner">
      <Header/>
        <main>
          <BannerSection/>
          <AboutMeSection/>
          <TechSection/>
          <ProjectsSection/>
          <Footer/>
        </main>
      </div>
    </div>
  )
}

export default App
