import { REVIEWS } from "../constants"
import { IoPerson } from "react-icons/io5";

const Reviews = () => {
  return (
    <div className="my-8 mx-auto w-[90%] h-auto
    p-8 bg-white/30 
    rounded-3xl backdrop-blur-3xl 
    gap-0 lg:w-[65%] overflow-visible lg:min-h-[75vh] lg:h-auto justify-center items-center">
        <span className="flex justify-center text-3xl lg:text-4xl underline decoration-rose-600 underline-offset-8 lg:mt-4">
            Відгуки
        </span>

        <div className="flex flex-wrap justify-center my-12">
            {REVIEWS.map((review, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 min-h-full flex">
                    <div className="h-full w-full flex flex-col justify-between bg-neutral rounded-md p-6 text-md border border-red-500/40 font-light">
                        <p>{review.review}</p>

                        <div className="flex mt-5 items-start">
                            <IoPerson className="w-8 h-8 text-white mr-6 mt-2 items-end"/>

                            <div className="">
                                <h6 className="">{review.user}</h6>
                                <span className="text-sm font-extralight italic">{review.location}</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Reviews