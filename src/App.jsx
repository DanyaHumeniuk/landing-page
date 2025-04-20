import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import desert from './assets/desert.jpg';


const App = () => {
  return (
    
    <div className="text-neutral-800 font-serif">
      <div 
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${desert})` }}
      ></div>
      <HeroSection />
      <Navbar />
    </div>
    
  )
}

export default App