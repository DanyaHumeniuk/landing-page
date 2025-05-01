import aboutPhoto from "../assets/aboutPhoto.jpeg"

const About = () => {
  return (
    <div className="my-8 mx-auto w-[90%] h-auto
    p-8 bg-white/30 
    rounded-3xl backdrop-blur-3xl 
    gap-0 lg:w-[65%] overflow-visible lg:min-h-[75vh] lg:h-auto">
        <span className="flex justify-center text-3xl lg:text-4xl">Про мене</span>
        <div>
            <img src={aboutPhoto} alt="About me" className="" />
        </div>
    </div>
  )
}

export default About