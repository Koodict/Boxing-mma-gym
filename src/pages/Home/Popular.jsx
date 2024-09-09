import React from 'react';
import { Dumbbell } from 'lucide-react';

const Popular = () => {
    return (
        <>
            <div className='w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4'>
                <h6 className='text-lg font-bold text-gray-200 flex items-center gap-x-2 mb-6'>
                    <Dumbbell className='w-4 h-4 -rotate-45 text-indigo-600' />
                    OUR POPULAR EXERCISES
                </h6>
                <div className="w-full h-auto flex items-center gap-x-5 gap-y-6 1g:flex-nowrap md:flex-wrap sm:flex-wrap  flex-wrap">
                    <div className="1g:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-xl
                             overflow-hidden hover:shadow hover:shadow-indigo-400/90 ease-out duration-700 cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1615117270691-3bc3cb65f2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNTQxNDY5MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="exercise img" className="w-full lg:h-[40vh] md:h-[43vh] sm:h-[45vh] h-[47vh] object-cover rounded-1g"
                        />
                        <div className='w-full h-auto py-4 px-43 text-white '>
                            <h1>Grappling</h1>
                            <div className='w-full h-auto flex items-center gap-x-2'>
                                <p className='text-md text-gray-300'>10 min</p>
                                <span className='w-1 h-1 rounded-full bg-gray-600 '></span>
                                <p className='text-md text-gray-300'>2 SETS</p>
                                <span className='w-1 h-1 rounded-full bg-gray-600 '></span>
                                <p className='text-md text-gray-300'>Strength and Hand/toes grip</p>
                            </div>
                        </div>
                    </div>
                    <div className="1g:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-xl
                             overflow-hidden hover: shadow hover:shadow-indigo-400/90 ease-out duration-700 cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1633956257840-fdd7a68222a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNTQxNDgyMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="exercise img" className="w-full lg:h-[40vh] md:h-[43vh] sm:h-[45vh] h-[47vh] object-cover rounded-1g"
                        />
                        <div className='w-full h-auto py-4 px-43 text-white '>
                            <h1>Shadow Boxing</h1>
                            <div className='w-full h-auto flex items-center gap-x-2'>
                                <p className='text-md text-gray-300'>5 min </p>
                                <span className='w-1 h-1 rounded-full bg-gray-600 '></span>
                                <p className='text-md text-gray-300'>3 SETS</p>
                                <span className='w-1 h-1 rounded-full bg-gray-600 '></span>
                                <p className='text-md text-gray-300'>Hand speed and arm strength</p>
                            </div>
                        </div>
                    </div>
                    <div className="1g:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-xl
                             overflow-hidden hover: shadow hover:shadow-indigo-400/90 ease-out duration-700 cursor-pointer">
                        <img src="https://source.unsplash.com/random/?exercise" alt="exercise img" className="w-full lg:h-[40vh] md:h-[43vh] sm:h-[45vh] h-[47vh] object-cover rounded-1g"
                        />
                        <div className='w-full h-auto py-4 px-43 text-white '>
                            <h1>Sprinting</h1>
                            <div className='w-full h-auto flex items-center gap-x-2'>
                                <p className='text-md text-gray-300'>3 min</p>
                                <span className='w-1 h-1 rounded-full bg-gray-600 '></span>
                                <p className='text-md text-gray-300'>3 SETS</p>
                                <span className='w-1 h-1 rounded-full bg-gray-600 '></span>
                                <p className='text-md text-gray-300'>Cardio and 110 calories</p>
                            </div>
                        </div>
                    </div>
                    <div className="1g:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-xl
                             overflow-hidden hover: shadow hover:shadow-indigo-400/90 ease-out duration-700 cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1666121365672-f2bdd58cb311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNTQxNDk0Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="exercise img" className="w-full lg:h-[40vh] md:h-[43vh] sm:h-[45vh] h-[47vh] object-cover rounded-1g"
                        />
                        <div className='w-full h-auto py-4 px-43 text-white '>
                            <h1>Punching Bag</h1>
                            <div className='w-full h-auto flex items-center gap-x-2'>
                                <p className='text-md text-gray-300'>15 min</p>
                                <span className='w-1 h-1 rounded-full bg-gray-600 '></span>
                                <p className='text-md text-gray-300'>3 SETS</p>
                                <span className='w-1 h-1 rounded-full bg-gray-600 '></span>
                                <p className='text-md text-gray-300'>Basic core of Boxing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Popular
