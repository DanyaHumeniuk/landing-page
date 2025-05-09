import hero from "../assets/heroPhoto3.jpeg"
import { motion } from 'framer-motion';

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0 ,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const HeroSection = () => {
  return (
    <section className="my-8 mx-auto w-[90%] h-auto
    p-8 bg-white/30 
    rounded-3xl backdrop-blur-3xl 
    gap-0 lg:w-[65%] overflow-visible lg:min-h-[75vh] lg:h-auto">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:my-14">
                <div className="flex flex-col items-center justify-start text-neutral-900">
                    <motion.p variants={container(0)} initial="hidden" animate="visible" className="font-light text-4xl lg:text-5xl bg-gradient-to-r from-red-600 to-neutral-900 text-transparent bg-clip-text">Ольга Вітюк</motion.p>
                    <motion.hr variants={container(0.5)} initial="hidden" animate="visible" class="border-t-2 border-neutral-900 my-1 w-[150px]"/>
                    <motion.p variants={container(1)} initial="hidden" animate="visible" className="font-semibold text-neutral-700 text-sm">Тета-практик</motion.p>
                    <motion.p variants={container(1.5)} initial="hidden" animate="visible" className="mt-8 lg:ml-3 lg:mt-16 tracking-tight lg:text-xl max-w-xl">Тета-практика — це шлях до глибокого внутрішнього зцілення, пробудження Супер Сили та розкриття родових ресурсів. Через м’які, але трансформаційні практики відкриваються нові горизонти мислення, зникають обмеження, а на їх місце приходить ясність, довіра до себе та внутрішній спокій. Кожна сесія — це простір для душі, де народжується нове бачення себе та свого життя. Тут починається шлях до глибокої любові до себе та життя в гармонії.</motion.p>
                    <motion.button variants={container(2)} initial="hidden" animate="visible" className="mt-8 p-1 lg:mt-16 rounded-md bg-red-600 text-white cursor-pointer hover:animate-glow">
                        <a>
                            Записатись на консультацію
                        </a>
                    </motion.button>
                </div>
            </div>
            

            <motion.div variants={container(2.5)} initial="hidden" animate="visible" className="w-full lg:w-1/2 lg:p-8 mt-10 lg:mt-6 shrink-0 max-w-4xl">
                <div className="flex justify-center shrink-0">
                    <img className="rounded-lg w-full max-w-[380px] min-w-[280px] h-auto shrink-0 grow-0 object-contain" src={hero} alt="PHOTO"/>
                </div>
            </motion.div>
        </div>
    </section>
  
  )
}

export default HeroSection