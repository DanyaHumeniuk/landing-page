import {CONTACT} from "../constants"

const Contact = () => {
  return (
    <div className="my-8 mx-auto w-[90%] h-auto
    p-8 bg-white/30 
    rounded-3xl backdrop-blur-3xl 
    gap-0 lg:w-[65%] overflow-visible lg:h-auto justify-center items-center">
        <div className="flex justify-center text-lg lg:text-2xl underline underline-offset-8 decoration-rose-600">Зв’яжіться зі мною</div>

        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="mailto:olgavityuk55@gmail.com" className="">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact