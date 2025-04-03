import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {LINKS} from "../constants"




const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <nav className="border-b-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
            <div className="pl-2">
                <a href="" className="class">
                    <span className="font-medium">OLHA</span> 
                    <span className="font-extrabold bg-gradient-to-r from-neutral-800 to-pink-400 bg-clip-text text-transparent">VITYUK</span>
                </a>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-2xl pr-2 focus:outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}>
                {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
            </div>
            <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
                {LINKS.map((link, index) => (
                    <a key={index} href={link.link} className="uppercase text-sm font-medium">
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}>
                {LINKS.map((links, index) => (
                    <a key={index} href={links.link} className="uppercase text-lg font-medium block py-2 tracking-wide">
                        {links.name}
                    </a>
                ))}
        </div>
    </nav>
  )
}

export default Navbar