import hero from "../assets/heroPhoto3.jpeg"


const HeroSection = () => {
  return (
    <section className="grid place-items-center min-h-screen w-screen overflow-hidden">
        
        <div className="grid w-full h-full">
            
            <img
            src={hero}
            className="w-full h-full object-cover object-center col-start-1 row-start-1"
            alt="Hero"
            />

            
            <div className="col-start-1 row-start-1 flex flex-col items-center justify-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 lg:text-9xl border-b">Ольга Вітюк</h1>
                <p className="text-lg md:text-xl lg:text-4xl">Тета-практик</p>
                
            </div>
        </div>
    </section>
  
  )
}

export default HeroSection