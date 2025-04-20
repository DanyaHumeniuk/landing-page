import hero from "../assets/heroPhoto3.jpeg"
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="mt-28 mx-auto w-[90%] h-[60vh] 
    p-8 bg-white/30 
    
    rounded-3xl backdrop-blur-3xl 
    grid grid-cols-2 grid-rows-1 gap-0 lg:w-[65%]">
        <div className="col-start-1 row-start-1 col-end-2 row-end-2 flex flex-col items-center justify-start text-neutral-900">
            <p className="font-thin text-2xl lg:text-4xl mt-4 lg:mt-8 bg-gradient-to-r from-red-700 to-neutral-900 text-transparent bg-clip-text">Ольга Вітюк</p>
            <hr class="border-t-2 border-neutral-900 my-1 w-[150px]"/>
            <p className="font-semibold text-neutral-700 text-sm">Тета-практик</p>
            <p className="mt-10 lg:mt-16 lg:ml-8 tracking-tight">Тета-практика — це шлях до глибокого внутрішнього зцілення, пробудження Супер Сили та розкриття родових ресурсів. Через м’які, але трансформаційні практики відкриваються нові горизонти мислення, зникають обмеження, а на їх місце приходить ясність, довіра до себе та внутрішній спокій. Кожна сесія — це простір для душі, де народжується нове бачення себе та свого життя. Тут починається шлях до глибокої любові до себе та життя в гармонії.</p>
            <div>

            </div>
        </div>

        <div className="col-start-2 row-start-1 col-end-3 row-end-2 flex items-center justify-center">
            <img className="rounded-lg h-[440px] w-[330px] lg:w-[380px] lg:h-[490px] lg:ml-16 ml-4" src={hero} alt="PHOTO"/>
        </div>
        
       
        
    </section>
  
  )
}

export default HeroSection