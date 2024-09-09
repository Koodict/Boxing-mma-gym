
import React from 'react'
import { Dumbbell, MoveRight } from 'lucide-react';
// import {Link} from "react-router-dom";
import TertiaryLink from "../../components/LinkBtn/TertiaryLink"
const Services = () => {
    return (
        <>

            <div className='w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4'>
                <h6 className='text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6'>
                    <Dumbbell className='w-4 h-4 -rotate-45 text-indigo-600' />
                    OUR SERVICES
                </h6>
                <div className='w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10'>

                            {/* 0000000000000<<<<<<<<<< this  is first Card >>>>>>>>>>222222222222222222  */}

                    <div className='lg:w-[23%] md:w-[48%] sm:w-[48%] w-full  lg:h-[58vh] md:h-[58vh] sm:h-[58vh] h-[60vh]  rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:border-white  hover:-translate-y-2 ease-out duration-500 ' style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ4Mzk3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}  >
                        {/* <div className='w-full h-full bg-black/30 absolute top-0 left-0 -z-10 '></div> */}
                        <div className='w-full h-full flex items-center hover:border-indigo-100/90 justify-center flex-col text-white p-4 z-50'>
                            <div className='w-12 h-12 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5'>
                                <Dumbbell className='w-5 h-5 text-white' />
                            </div>
                            <h1 className='text-xl text-gray-100 font-bold text-center mb-4'>Weight Lifting</h1>
                            <p className='text-base text-gray-300 font-normal text-center mb-4'>Strengthen your body by lifting weights-targeting build muscle mass, increase strength</p>
                            <TertiaryLink link="services">Read More
                                <MoveRight className='w-4 h-4' /></TertiaryLink>
                        </div>
                        {/* <<<<<<<<<< this is card for boxing <>>>>>>>>>>>>  */}

                    </div>
                    <div className='lg:w-[23%] md:w-[48%] sm:w-[48%] w-full  lg:h-[58vh] md:h-[58vh] sm:h-[58vh] h-[60vh]  rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500 ' style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1615117950029-db3cf44bdefa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNTQxNjAxMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}  >
                        <div className='w-full h-full bg-black/30 absolute top-0 left-0 -z-10 '></div>
                        <div className='w-full h-full flex items-center justify-center flex-col text-white p-4 z-50'>
                            <div className='w-12 h-12 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5'>
                                <Dumbbell className='w-5 h-5 text-white' />
                            </div>
                            <h1 className='text-xl text-gray-100 font-bold text-center mb-4'>Start BOXING</h1>
                            <p className='text-base text-gray-300 font-normal text-center mb-4'>Learn the Core Boxing an intense body workout and Offensive-defensive maneuvers with our best coachs</p>
                            <TertiaryLink link="services">Read More
                                <MoveRight className='w-4 h-4' /></TertiaryLink>
                        </div>

                    </div>
                    
                     {/* 0000000000000<<<<<<<<<< this  is first Card WRESLTing >>>>>>>>>>222222222222222222  */}

                    <div className='lg:w-[23%] md:w-[48%] sm:w-[48%] w-full  lg:h-[58vh] md:h-[53vh] sm:h-[58vh] h-[60vh]  rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500 ' style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMzAxMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}  >
                        <div className='w-full h-full bg-black/30 absolute top-0 left-0 -z-10 '></div>
                        <div className='w-full h-full flex items-center justify-center flex-col text-white p-4 z-50'>
                            <div className='w-12 h-12 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5'>
                                <Dumbbell className='w-5 h-5 text-white' />
                            </div>
                            <h1 className='text-xl text-gray-100 font-bold text-center mb-4'>Start WRESLTING</h1>
                            <p className='text-base text-gray-300 font-normal text-center mb-4'>Learn Wreslting Its Good for ultimate test of strength-technique-strategy as you grapple</p>
                            <TertiaryLink link="services">Read More
                                <MoveRight className='w-4 h-4' /></TertiaryLink>
                        </div>

                         {/* 0000000000000<<<<<<<<<< this  is first Card BJJ >>>>>>>>>>222222222222222222  */}

                    </div>
                    <div className='lg:w-[23%] md:w-[48%] sm:w-[48%] w-full  lg:h-[58vh] md:h-[53vh] sm:h-[58vh] h-[60vh]  rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500 ' style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1682545888368-587f56efd06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNTQxNzQ2NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}  > 
                        <div className='w-full h-full bg-black/30 absolute top-0 left-0 -z-10 '></div>
                        <div className='w-full h-full flex items-center justify-center flex-col text-white p-4 z-50'>
                            <div className='w-12 h-12 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5'>
                                <Dumbbell className='w-5 h-5 text-white' />
                            </div>
                            <h1 className='text-xl text-gray-100 font-bold text-center mb-4'>Start BJJ</h1>
                            <p className='text-base text-gray-300 font-normal text-center mb-4'>Brazilian Jiu-Jitsu-Learn the art of ground game-fighting Submossions-techniques mental discipline along the way Get your first white</p>
                            <TertiaryLink link="services">Read More
                                <MoveRight className='w-4 h-4' /></TertiaryLink>
                        </div>

                         {/* 0000000000000<<<<<<<<<< this  is first Card wieght >>>>>>>>>>222222222222222222  */}

                    </div>
                    <div className='lg:w-[23%] md:w-[48%] sm:w-[48%] w-full  lg:h-[58vh] md:h-[53vh] sm:h-[58vh] h-[60vh]  rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500 ' style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1529165980561-f19d4acc4f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NzMwNjc2OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}  >
                        <div className='w-full h-full bg-black/30 absolute top-0 left-0 -z-10 '></div>
                        <div className='w-full h-full flex items-center justify-center flex-col text-white p-4 z-50'>
                            <div className='w-12 h-12 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5'>
                                <Dumbbell className='w-5 h-5 text-white' />
                            </div>
                            <h1 className='text-xl text-gray-100 font-bold text-center mb-4'>Lose Weight</h1>
                            <p className='text-base text-gray-300 font-normal text-center mb-4'>Get Ready to Burn off some serious fat and Your weight lose journey with best traniers</p>
                            <TertiaryLink link="services">Read More
                                <MoveRight className='w-4 h-4' /></TertiaryLink>
                        </div>

                         {/* 0000000000000<<<<<<<<<< this  is first Card >>>>>>>>>>222222222222222222  */}

                    </div>
                    <div className='lg:w-[23%] md:w-[48%] sm:w-[48%] w-full  lg:h-[58vh] md:h-[53vh] sm:h-[58vh] h-[60vh]  rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500 ' style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNjgxMzk2OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}  >
                        <div className='w-full h-full bg-black/30 absolute top-0 left-0 -z-10 '></div>
                        <div className='w-full h-full flex items-center justify-center flex-col text-white p-4 z-50'>
                            <div className='w-12 h-12 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5'>
                                <Dumbbell className='w-5 h-5 text-white' />
                            </div>
                            <h1 className='text-xl text-gray-100 font-bold text-center mb-4'>Swimming</h1>
                            <p className='text-base text-gray-300 font-normal text-center mb-4'>Get Full Membership and enjoy and Vip pools for Swimming</p>
                            <TertiaryLink link="services">Read More
                                <MoveRight className='w-4 h-4' /></TertiaryLink>
                        </div>

                         {/* 0000000000000<<<<<<<<<< this  is first Card >>>>>>>>>>222222222222222222  */}

                    </div>
                    <div className='lg:w-[23%] md:w-[48%] sm:w-[48%] w-full  lg:h-[58vh] md:h-[53vh] sm:h-[58vh] h-[60vh]  rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500 ' style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1626926938421-90124a4b83fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5Njc1NTI3NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}  >
                        <div className='w-full h-full bg-black/30 absolute top-0 left-0 -z-10 '></div>
                        <div className='w-full h-full flex items-center justify-center flex-col text-white p-4 z-50'>
                            <div className='w-12 h-12 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5'>
                                <Dumbbell className='w-5 h-5 text-white' />
                            </div>
                            <h1 className='text-xl text-gray-100 font-bold text-center mb-4'>Badminton court</h1>
                            <p className='text-base text-gray-300 font-normal text-center mb-4'>Get your body warm up before intense workouts and enjoy playing sports with your opponent</p>
                            <TertiaryLink link="services">Read More
                                <MoveRight className='w-4 h-4' /></TertiaryLink>
                        </div>

                         {/* 0000000000000<<<<<<<<<< this  is first Card >>>>>>>>>>222222222222222222  */}

                    </div>
                    <div className='lg:w-[23%] md:w-[48%] sm:w-[48%] w-full  lg:h-[58vh] md:h-[53vh] sm:h-[58vh] h-[60vh]  rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500 ' style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ4Mzk3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}  >
                        <div className='w-full h-full bg-black/30 absolute top-0 left-0 -z-10 '></div>
                        <div className='w-full h-full flex items-center justify-center flex-col text-white p-4 z-50'>
                            <div className='w-12 h-12 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5'>
                                <Dumbbell className='w-5 h-5 text-white' />
                            </div>
                            <h1 className='text-xl text-gray-100 font-bold text-center mb-4'>GYM</h1>
                            <p className='text-base text-gray-300 font-normal text-center mb-4'>start with our best Equipments</p>
                            <TertiaryLink link="services">Read More
                                <MoveRight className='w-4 h-4' /></TertiaryLink>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Services
