import {CONTACT} from "../constants"
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="mt-8 mb-6 mx-auto w-[90%] h-auto
    p-8 bg-white/30 
    rounded-3xl backdrop-blur-3xl 
    gap-0 lg:w-[65%] overflow-visible lg:h-auto justify-center items-center">
        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1.5}} className="flex justify-center text-lg lg:text-2xl underline underline-offset-8 decoration-rose-600">Зв’яжіться зі мною</motion.div>

        <div className="text-center tracking-tighter">
            <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className="my-4">{CONTACT.phoneNo}</motion.p>
            <motion.a viewport={{ once: true }} whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} href="mailto:olgavityuk55@gmail.com" >{CONTACT.email}</motion.a>
        </div>
    </div>
  )
}

export default Contact