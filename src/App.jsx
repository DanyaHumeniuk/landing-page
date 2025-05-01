import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import About from "./components/About"
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
        <HeroSection />
        <Services />
        <About />
      </div>
      
    </div>
    
  )
}

export default App