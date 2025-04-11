

const Navbar = () => {
  return (
    <nav className="fixed top-8 left-1/2 w-[80%] -translate-x-1/2 
    p-4 bg-white/30 backdrop-blur 
    border border-neutral-900
    shadow-[0_6px_6px_rgba(0,0,0,0.5)] rounded-full lg:w-1/2">
        <ul className="flex items-center justify-center gap-16">
            <li>
                <a className="no-underline font-medium relative py-[5px] transition-colors duration-300 ease-in-out group cursor-pointer">
                Послуги
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </a>
            </li>
            <li>
                <a className="no-underline  font-medium relative py-[5px] transition-colors duration-300 ease-in-out group cursor-pointer">
                Про мене
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </a>
            </li>
            <li>
                <a className="no-underline  font-medium relative py-[5px] transition-colors duration-300 ease-in-out group cursor-pointer">
                Відгуки
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </a>
            </li>
            <li>
                <a className="no-underline font-medium relative py-[5px] transition-colors duration-300 ease-in-out group cursor-pointer">
                Контакт
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </a>
            </li>
</ul>
    </nav>
  )
}

export default Navbar