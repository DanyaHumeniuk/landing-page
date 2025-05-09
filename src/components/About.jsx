import aboutPhoto from "../assets/aboutPhoto.jpeg"
import {ABOUT_TEXT} from "../constants"
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="my-8 mx-auto w-[90%] h-auto
    p-8 bg-white/30 
    rounded-3xl backdrop-blur-3xl 
    gap-0 lg:w-[65%] overflow-visible lg:min-h-[75vh] lg:h-auto justify-center items-center">
      <motion.span whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1.5}} className="flex justify-center text-3xl lg:text-4xl underline decoration-rose-600 underline-offset-8 lg:mt-4">Про мене</motion.span>
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-5 my-12 lg:mt-20">
        
        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className="flex justify-center lg:justify-start w-full lg:ml-20">
          <img
            className="rounded-lg w-full max-w-[380px] min-w-[280px] h-auto object-contain"
            src={aboutPhoto}
            alt="PHOTO"
          />
        </motion.div>

        
        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} className="flex justify-center lg:justify-end w-full lg:mr-20 max-w-[380px]">
          <ul className="list-disc pl-6 space-y-2 text-gray-800 leading-relaxed marker:text-rose-600">
            <li>Допомагаю людям відновити гармонію з собою та внутрішній емоційний баланс.</li>
            <li>Працюю з глибинними переконаннями, які впливають на самосприйняття, стосунки та життєві вибори.</li>
            <li>Поєдную інтуїцію, досвід і техніки Тета Практики для трансформації на рівні підсвідомості.</li>
            <li>Створюю безпечний простір для відкритості, прийняття та внутрішніх змін.</li>
            <li>Підтримую людину на шляху зцілення, допомагаючи їй розкрити внутрішній потенціал.</li>
            <li>Моя мета - допомогти кожному відчути себе почутим, зрозумілим і сильним, щоб жити більш усвідомлено й з любов’ю до себе.</li>
          </ul>
        </motion.div>

      </div>
    </div>
  )
}

export default About