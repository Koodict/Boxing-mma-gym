import React from 'react'
import {Link} from "react-router-dom"
import PrimaryBtn from '../../components/Button/PrimaryBtn'

const Banner = () => {
    return (
        <>
            <div

                className="w-full h-[55vh] flex items-center justify-center flex-col lg:py-16
                         md:py-14 sm:py-12 py-10 1g:px-24 md:px-16 sm:px-6 px-4 relative z-10"

                style={{

                    backgroundImage: "url(https://source.unsplash.com/random/?fitness)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                >
             <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
               <h1 className="1g:text-6xl md:text-5x1 sm:text-4xl text-4xl font-bold
                             text-gray-200 uppercase mb-4 text-center">
                Train <span className="text-indigo-600">Hard</span>, Fight{" "}
                <span className="text-indigo-600">Smart</span>
            </h1>
            <p className="text-lg text-gray-300 font-medium mb-8 text-center w-[60%]">
            Experience our combat sports community for expert training resources, live Streaming, and a supportive network of fellow enthusiasts, all in one dynamic platform
            </p>
            <PrimaryBtn className="px-10 py-3 uppercase rounded-full">
             <Link to="/Contact">Become A Member</Link>

            </PrimaryBtn>
        </div >
        </>
    )
}

export default Banner
