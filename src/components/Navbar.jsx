import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';
import logo from "../assets/logo.png"

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    useEffect(() => {
        if (mobileDrawerOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [mobileDrawerOpen])

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setMobileDrawerOpen(false); 
        }
      };

    return (
        <>
            <nav className="mx-auto w-[90%] p-4 bg-white/40 rounded-full 
        lg:w-[65%] backdrop-blur-3xl mt-8 flex justify-between items-center overflow-hidden">
        
                <div className="flex items-center justify-center shrink-0">
                    <img src={logo} alt="" className="h-12 w-12 scale-150 object-contain shrink-0 grow-0 ml-4"/>
                </div>
                <ul className="hidden lg:flex items-center justify-center gap-4 lg:gap-8 mx-4">
                    
                    <li>
                        <a onClick={() => scrollToSection("services")} className="no-underline font-medium relative py-[5px] transition-colors duration-300 ease-in-out group cursor-pointer sm:text-base">
                        Послуги
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection("about")} className="no-underline  font-medium relative py-[5px] transition-colors duration-300 ease-in-out group cursor-pointer sm:text-base">
                        Про мене
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection("reviews")} className="no-underline  font-medium relative py-[5px] transition-colors duration-300 ease-in-out group cursor-pointer sm:text-base">
                        Відгуки
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection("contact")} className="no-underline font-medium relative py-[5px] transition-colors duration-300 ease-in-out group cursor-pointer sm:text-base">
                        Контакт
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                        </a>
                    </li>
                </ul>

                <button className="lg:hidden mr-2" onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
                
        

            </nav>
            <AnimatePresence>
                {mobileDrawerOpen && (
                    <div className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm lg:hidden">
                        <motion.div key="drawer"
                                    initial={{ x: "100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100%" }}
                                    transition={{ type: "tween", duration: 0.4 }} className="fixed top-0 right-0 w-9/12 h-screen bg-white flex flex-col items-center p-8 gap-6 z-40 lg:hidden rounded-l-3xl">
                            
                            <button className="self-end hover:text-red-600" onClick={toggleNavbar}>
                                <X size={28} />
                            </button>
                            
                            
                            <div className="flex flex-col border border-red-300 
                                px-4 sm:px-6 md:px-8 
                                max-w-[90vw] sm:max-w-[80vw] 
                                w-full 
                                min-h-[60vh]
                                rounded-3xl items-center justify-center py-20 my-20 mx-auto">
                                <a onClick={() => scrollToSection("services")} className="block text-center no-underline font-medium relative transition-colors duration-300 ease-in-out group cursor-pointer sm:text-base my-6">Послуги
                                    <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                                </a>
                                <a onClick={() => scrollToSection("about")} className="block text-center no-underline font-medium relative transition-colors duration-300 ease-in-out group cursor-pointer sm:text-base my-6">Про мене
                                    <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                                </a>
                                <a onClick={() => scrollToSection("reviews")} className="block text-center no-underline font-medium relative transition-colors duration-300 ease-in-out group cursor-pointer sm:text-base my-6">Відгуки
                                    <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                                </a>
                                <a onClick={() => scrollToSection("contact")} className="block text-center no-underline font-medium relative transition-colors duration-300 ease-in-out group cursor-pointer sm:text-base my-6">Контакт
                                    <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                                </a>
                            </div>

                            <div className="flex gap-10 text-neutral-800 hover">
                                <a  href="https://instagram.com/yourprofile"><FaInstagram size={24} className="hover:text-red-600"/></a>
                                <a href="https://t.me/yourusername"><FaTelegramPlane size={24} className="hover:text-red-600"/></a>
                                <a href="mailto:olgavityuk55@gmail.com"><FaEnvelope size={24} className="hover:text-red-600"/></a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>

    )
}

export default Navbar