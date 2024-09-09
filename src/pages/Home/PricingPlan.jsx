import React from 'react'
import { CheckSquare, Dumbbell } from 'lucide-react'
import PrimaryBtn from '../../components/Button/PrimaryBtn'
import { Link } from 'react-router-dom'

const PricingPlan = () => {
    return (
        <>
            <div className='w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4'>
                <h6 className='text-lg font-bold text-gray-200 flex items-center gap-x-2 mb-6'>
                    <Dumbbell className='w-4 h-4 -rotate-45 text-indigo-600' />
                    OUR PRICING PLAN
                </h6>
                <div className='w-[90%] h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap'>
                    {/* ^^^^^<<<<<<<<<<<<<<THIS IS BASIC PLAN CARD^^^^^^^^^^^^^^>>>>>>>>>  */}
                    <div className='lg:w-[28%] md:w-full sm:w-full w-full h-auto pz-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/10 rounded-lg border-[6px] border-gray-600 hover:border-indigo-600/40 hover:bg-gray-600/10 ease-out duration-700 cursor-pointer text-center'>
                        <h2 className='lg:text-4xl md:text-4xl sm:text-3xl  text-3xl text-white font-semibold mb-5'>
                            Basic Plan
                        </h2>
                        <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide'>
                            $65.00 <span className='lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal '>
                                /month
                            </span>
                        </h1>
                        <hr className='border-gray-600/40 my-7' />
                        <div className='w-full h-auto space-y-2 mb-8'>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    Get access to all gym Classes
                                </p>


                            </div>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    limited timed Coaching Classes
                                </p>


                            </div>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    Gym Equipments and Gears
                                </p>
                            </div>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    Gym Trainer
                                </p>
                            </div>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    Use of lockers
                                </p>
                            </div>
                        </div>
                        <PrimaryBtn className=" tracking-wider mb-3 uppercase w-[80%] h-11 test-lg justify-center font-semibold ">
                            <Link to="/payment">
                                Select Plan
                            </Link>
                        </PrimaryBtn>

                    </div>
                    {/* ^^^^^<<<<<<<<<<<<<<THIS IS PRIMEIUM  PLAN CARD^^^^^^^^^^^^^^>>>>>>>>>  */}
                    <div className='lg:w-[33%] md:w-full sm:w-full w-full h-auto pz-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-indigo rounded-lg border-[6px] border-indigo-600  ease-out duration-700 cursor-pointer text-center relative'>
                        <div className='absolute -top-6 left-[50%] translate-x-[-50%] bg-indigo-600 py-2
                        px-5 rounded-full text-base font-medium text-white '>
                            Recommended
                        </div>
                        <h2 className='lg:text-4xl md:text-4xl sm:text-3xl  text-3xl text-white font-semibold mb-5'>
                            Premium Plan
                        </h2>
                        <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide'>
                            $120.00 <span className='lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal '>
                                /month
                            </span>
                        </h1>
                        <hr className='border-gray-600/40 my-7' />
                        <div className='w-full h-auto space-y-2 mb-8'>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    Unlimited access to MMA/Boxing Equipments
                                </p>


                            </div>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    Full access to live stream Matches
                                </p>


                            </div>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    Advanced progress tracking tools
                                </p>


                            </div>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    Core MMA Training
                                </p>


                            </div>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    Access to events & seminars
                                </p>
                            </div>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    Spar with Professional Fighters
                                </p>
                            </div>
                        </div>
                        <PrimaryBtn className=" tracking-wider mb-3 uppercase w-[80%] h-11 test-lg justify-center font-semibold ">
                            <Link to="/payment">
                                Select Plan
                            </Link>
                        </PrimaryBtn>

                    </div>
                    {/* ^^^^^<<<<<<<<<<<<<<THIS IS vip PLAN CARD^^^^^^^^^^^^^^>>>>>>>>>  */}
                    <div className='lg:w-[28%] md:w-full sm:w-full w-full h-auto pz-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/10 rounded-lg border-[6px] border-gray-600 hover:border-indigo-600/40 hover:bg-gray-600/10 ease-out duration-700 cursor-pointer text-center'>
                        <h2 className='lg:text-4xl md:text-4xl sm:text-3xl  text-3xl text-white font-semibold mb-5'>
                            Standard Plan
                        </h2>
                        <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide'>
                            $95.00 <span className='lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal '>
                                /month
                            </span>
                        </h1>
                        <hr className='border-gray-600/40 my-7' />
                        <div className='w-full h-auto space-y-2 mb-8'>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    Get access to all gym Classes
                                </p>


                            </div>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    MMA and Boxing Classes
                                </p>


                            </div>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    Access to All MMA Equipments
                                </p>


                            </div>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    Advance Progress Tracking
                                </p>
                            </div>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-4 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                                    Use of looker
                                </p>
                            </div>
                        </div>
                        <PrimaryBtn className=" tracking-wider mb-3 uppercase w-[80%] h-11 test-lg justify-center font-semibold ">
                            <Link to="/payment">
                                Select Plan
                            </Link>
                        </PrimaryBtn>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingPlan
