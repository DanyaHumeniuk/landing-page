

const Navbar = () => {
  return (
    <nav className="mx-auto w-[90%] p-4 bg-white/40 rounded-full 
  lg:w-[65%] backdrop-blur-3xl mt-8 flex justify-center items-center">
        <ul className="flex items-center justify-center gap-12 md:gap-16 lg:gap-24 ">
            <li>
                <a className="no-underline font-medium relative py-[5px] transition-colors duration-300 ease-in-out group cursor-pointer ">
                Послуги
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </a>
            </li>
            <li>
                <a className="no-underline  font-medium relative py-[5px] transition-colors duration-300 ease-in-out group cursor-pointer ">
                Про мене
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </a>
            </li>
            <li>
                <a className="no-underline  font-medium relative py-[5px] transition-colors duration-300 ease-in-out group cursor-pointer ">
                Відгуки
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </a>
            </li>
            <li>
                <a className="no-underline font-medium relative py-[5px] transition-colors duration-300 ease-in-out group cursor-pointer ">
                Контакт
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </a>
            </li>
</ul>
    </nav>
  )
}

export default Navbar