import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import About from "./components/About"
import Reviews from "./components/Reviews"
import Contact from "./components/Contact"
import ScrollFloatSection from "./components/ScrollFloat";
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/react"
import background from './assets/background.jpg';


const App = () => {
  return (
    <div className="text-neutral-800">
      <div 
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div>
        <Navbar />
        <div id="hero">
          <HeroSection />
        </div>
        <div id="services">
          <ScrollFloatSection>
            <Services />
          </ScrollFloatSection>
        </div>
        <div id="about">
          <ScrollFloatSection>
            <About />
          </ScrollFloatSection>
        </div>
        <div id="reviews">
          <ScrollFloatSection>
            <Reviews />
          </ScrollFloatSection>
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
        <Analytics />
      </div>
    </div>
    
  )
}

export default App