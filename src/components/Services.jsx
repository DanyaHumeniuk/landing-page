import { SERVICES_CONTENT } from "../constants"

const Services = () => {
  return (
    <section className="my-8 mx-auto w-[90%] h-auto
    p-8 bg-white/30 
    rounded-3xl backdrop-blur-3xl 
    gap-0 lg:w-[65%] overflow-visible lg:min-h-[75vh] lg:h-auto">
        <div className="flex justify-center text-3xl lg:text-4xl">Мої послуги</div>
        {SERVICES_CONTENT.map((service, index) => (
            <div key={index} className="flex flex-wrap lg:justify-center my-14">
                <div className="w-full lg:w-1/4">
                    <img src={service.image} width={150} height={1} alt={service.alt} className="mb-6 rounded-xl w-48 h-auto" />
                </div>

                <div className="w-full max-w-lg lg:w-3/4">
                    <h6 className="mb-2 text-lg font-bold bg-gradient-to-r from-red-600 to-neutral-900 text-transparent bg-clip-text">{service.title}</h6>
                    <p className="my-2 lg:my-4">{service.description}</p>
                    <p className="sm:pb-4">Ціна: {service.price}</p>
                </div>

            </div>
        ))}
    </section>
  )
}

export default Services