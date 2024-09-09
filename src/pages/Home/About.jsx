import React from 'react';
import SecondaryBtn from "../../components/Button/SecondaryBtn";
import {Link} from "react-router-dom"

const About = () => {
    return (

        <>
    <div className="w-full h-auto flex items-center justify-between gap-7 1g:py-16 md:py-14 sm:py-12 py-10 1g:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse">

            <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relativeoverflow-hidden rounded-lg">
             <img
             src="https://source.unsplash.com/random/?gym" alt="About image"

                className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover"/>
            </div>
             <div className='h-auto lg:w-[50%] md:w-full sm:w-full w-full lg:text-start md:text-start sm:text-start text-center'>
                <h6 className="text-lg font-bold text-gray-200 flex items-centers lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">ABOUT US</h6>
                <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-100 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-o'>
                    Tanked Cardio, Timely Gains: Build And Learn Mixed Martial Arts </h1>
                    <p className='lg:text-base md:text-base sm:text-sm text-sm text-gray-300 font-medium mb-4'>
                    Welcome to Xtreme-MMA, where passion meets discipline and champions are forged. Founded with a vision to provide a dynamic platform for enthusiasts of Combart Sports-we are more than just a gym-we are a community united by a shared love for combat sports.
                    </p>
                    <p className='lg:text-base md:text-base sm:text-sm text-sm text-gray-300 font-medium mb-4'>We Have the 23+ Years Experience of Providing the Young Bull Kids the Best Mixed Martial Arts Coaching And Teaching Them Boxing/MMA </p>
                    <p className='lg:text-base md:text-base sm:text-sm text-sm text-gray-300 font-medium mb-4'>
                    Join us at Xtreme-MMA and experience the thrill of the fight, the camaraderie of the gym, and the transformational power of martial arts-Whether your goal is to compete at the highest level-improve your fitness and self-defense skills, or simply find a new passion-we're here to help you achieve greatness.
                    </p>
                    <p className='lg:text-base md:text-base sm:text-sm text-sm text-white font-bold mb-4'>^Join Our Community And Experience The Thrill OF The Fight^</p>
                    <SecondaryBtn className ="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center" > <Link to="/contact">Become a Member</Link></SecondaryBtn>
             </div>
      </div >
    </>
    
  )
}

export default About
