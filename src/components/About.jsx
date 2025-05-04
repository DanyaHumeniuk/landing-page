import aboutPhoto from "../assets/aboutPhoto.jpeg"
import {ABOUT_TEXT} from "../constants"

const About = () => {
  return (
    <div className="my-8 mx-auto w-[90%] h-auto
    p-8 bg-white/30 
    rounded-3xl backdrop-blur-3xl 
    gap-0 lg:w-[65%] overflow-visible lg:min-h-[75vh] lg:h-auto justify-center items-center">
      <span className="flex justify-center text-3xl lg:text-4xl underline decoration-rose-600 underline-offset-8 lg:mt-4">Про мене</span>
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-5 my-12 lg:mt-20">
        
        <div className="flex justify-center lg:justify-start w-full lg:ml-20">
          <img
            className="rounded-lg w-full max-w-[380px] min-w-[280px] h-auto object-contain"
            src={aboutPhoto}
            alt="PHOTO"
          />
        </div>

        
        <div className="flex justify-center lg:justify-end w-full lg:mr-20">
          <p className="max-w-[380px] lg:max-w-4xl">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  )
}

export default About