import hero from "../assets/heroPhoto.jpeg"

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
            <img src={hero} className="h-full w-full object-cover"/>
        </div>
    </section>
  )
}

export default HeroSection