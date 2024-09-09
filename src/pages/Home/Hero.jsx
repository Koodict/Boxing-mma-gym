import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


const Hero = () => {
    // dummy data
    const swiperData = [
        {
            id: 1,
            bgImg: "https://source.unsplash.com/random/?fitness",
            slogan: "Keep your body",
            title: "Burning",
            desc: "Get ready to burn off some serious fat with our high quality products.",
        },
        {
            id: 2,
            bgImg: "https://source.unsplash.com/random/?gym",
            slogan: "Just Believe In",
            title: "Yourself",
            desc: "We are here to help you achieve your goals.",
        },
        {
            id: 3,
            bgImg: "https://source.unsplash.com/random/?yoga",
            slogan: "Grow Your Body",
            title: "Strength",
            desc: "Make your body stronger with our high quality products.",
        },
    ];
    return (
        <>
            <div className='w-full h-auto'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 8500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper w-full h-auto"
                >

                    {/* #####<<<<<<<<<------THIS IS Slide ONE in WEB APP IN NAVBAR---------->>>>>>>>>>>>>>>>*!!!!! */}
                    <SwiperSlide className='w-full h-[85vh] relative ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615117950029-db3cf44bdefa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNTQxNjAxMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }}>
                        {/* This is the overlap box with some black bg color */}

                        <div className="w-full h-full bg-black/45 absolute top-0 left-0 -z-10"></div>
                        <div className="w-full h-full flex items-center justify-center flex-col z-10 1g:px-24 md:px-16 sm:px-6 px-4">
                            <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl   text-indigo-400 font-semibold mb-2 uppercase">
                                Keep your body
                            </h5>
                            <h1 className='lg:text-8xl md:text-7xl sm-text-5xl text-5xl font-bold text-white mb-4 uppercase'>
                                Grinding
                            </h1>
                            <p className="1g:text-lg md:text-base sm:text-base text-base text-gray-400
                            font-medium mb-6 text-center">
                                GET READY TO BURN CALORIES WITH OUR BEST LINED INTENSE WORKOUTS.
                            </p>
                            <button className=" text-gray-200 bg-indigo-600  px-3 py-1.5  gap-x-1 hover:bg-indigo-600/70 ease-out duration-500 h-14 mt-10 lg:w-[15%] md:w-[25%] sm:w-[30%] w-[35%] text-xl font-semibold rounded-full "><Link to="/Contact" >Get Started</Link></button>
                        </div>
                    </SwiperSlide>

                    {/* #####<<<<<<<<<------THIS IS Slide SECOND in WEB APP IN NAVBAR---------->>>>>>>>>>>>>>>>*!!!!! */}

                    <SwiperSlide className='w-full h-[85vh] relative ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMzAxMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }}>
                        {/* This is the overlap box with some black bg color */}

                        <div className="w-full h-full bg-black/45 absolute top-0 left-0 -z-10"></div>
                        <div className="w-full h-full flex items-center justify-center flex-col z-10 1g:px-24 md:px-16 sm:px-6 px-4">
                            <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl   text-indigo-400 font-semibold mb-2 uppercase">
                                LEARN THE CORE
                            </h5>
                            <h1 className='lg:text-8xl md:text-7xl sm-text-5xl text-5xl font-bold text-white mb-4 uppercase'>
                                WRESLTING
                            </h1>
                            <p className="1g:text-lg md:text-base sm:text-base text-base text-gray-400
                            font-medium mb-6 text-center">
                                GROW YOUR CORE WRESLTING TECHNIQUES AND LEARN WRESLTING WITH OUR BEST COACHS.
                            </p>
                            <button className=" text-gray-200 bg-indigo-600  px-3 py-1.5  gap-x-1 hover:bg-indigo-600/70 ease-out duration-500 h-14 mt-5 lg:w-[15%] md:w-[25%] sm:w-[30%] w-[35%] text-xl font-semibold rounded-full ">Get Started</button>
                        </div>
                    </SwiperSlide>

                    {/* #####<<<<<<<<<------THIS IS Slide ^^^"THIRD"^^^ in WEB APP IN NAVBAR---------->>>>>>>>>>>>>>>>*!!!!! */}

                    <SwiperSlide className='w-full h-[85vh] relative ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1682545888368-587f56efd06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNTQxNzQ2NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }}>
                        {/* This is the overlap box with some black bg color */}

                        <div className="w-full h-full bg-black/45 absolute top-0 left-0 -z-10"></div>
                        <div className="w-full h-full flex items-center justify-center flex-col z-10 1g:px-24 md:px-16 sm:px-6 px-4">
                            <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl   text-indigo-400 font-semibold mb-2 uppercase">
                                GROW YOUR SKILLS WITH
                            </h5>
                            <h1 className='lg:text-8xl md:text-7xl sm-text-5xl text-5xl font-bold text-white mb-4 uppercase'>
                                BJJ JIUJITSU
                            </h1>
                            <p className="1g:text-lg md:text-base sm:text-base text-base text-gray-400
                            font-medium mb-6 text-center">
                                Get ready to take your amature career to Professional WITH OUR BEST COACHS.
                            </p>

                            <button className=" text-gray-200 bg-indigo-600  px-3 py-1.5  gap-x-1 hover:bg-indigo-600/70 ease-out duration-500 h-14 mt-5 lg:w-[15%] md:w-[25%] sm:w-[30%] w-[35%] text-xl font-semibold rounded-full "><Link to='/Contact'>Get Started </Link></button>
                        </div>
                    </SwiperSlide>

                    {/* #####<<<<<<<<<------THIS IS Slide FORTH in WEB APP IN NAVBAR---------->>>>>>>>>>>>>>>>*!!!!! */}

                    <SwiperSlide className='w-full h-[85vh] relative ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529165980561-f19d4acc4f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NzMwNjc2OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }}>
                        {/* This is the overlap box with some black bg color */}

                        <div className="w-full h-full bg-black/45 absolute top-0 left-0 -z-10"></div>
                        <div className="w-full h-full flex items-center justify-center flex-col z-10 1g:px-24 md:px-16 sm:px-6 px-4">
                            <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl   text-indigo-400 font-semibold mb-2 uppercase">
                                LEARN HOW TO SHADOW
                            </h5>
                            <h1 className='lg:text-8xl md:text-7xl sm-text-5xl text-5xl font-bold text-white mb-4 uppercase'>
                                BOXING
                            </h1>
                            <p className="1g:text-lg md:text-base sm:text-base text-base text-gray-400
                            font-medium mb-6 text-center">
                                Be BEST AT YOUR BASICS JABS || POWER OFFENSE AND DEFFENSE WITH OUR BEST TRAINERS.
                            </p>
                            <button className=" text-gray-200 bg-indigo-600  px-3 py-1.5  gap-x-1 hover:bg-indigo-600/70 ease-out duration-500 h-14 mt-5 lg:w-[15%] md:w-[25%] sm:w-[30%] w-[35%] text-xl font-semibold rounded-full ">Get Started</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* <<<<<<<THIs isBANNER TYPE CARDS>>>>>  */}
                <div className="w-full h-auto flex items-centers lg:justify-between md:justify-between sm:justify-center justify-center lg:gap-7 md:gap-5 sm:gap-5 gap-5 lg:px-24 md:px-16 sm:px-6 mt-6 flex-wrap">
                    <div className="flex items-center justify-center flex-col lg:-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10  bg-black/30 hover:bg-black hover:bg-black/100   rounded-md ease-out duration-700 cursor-pointer">
                        <h5 className='text-4xl text-indigo-600 font-semibold mb-2 uppercase'>1200+</h5>
                        <p className='text-lg text-gray-200 font-medium'>Members </p>
                    </div>
                    {/* 2nd Members >>>>> */}
                    <div className="flex items-center justify-center flex-col lg:-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/30 hover:bg-black hover:bg-black/100   rounded-md ease-out duration-700 cursor-pointer">
                        <h5 className='text-4xl text-indigo-600 font-semibold mb-2 uppercase'>50+</h5>
                        <p className='text-lg text-gray-200 font-medium'>Expert Trainers </p>
                    </div>
                    {/* 3rd member >>>>> */}
                    <div className="flex items-center justify-center flex-col lg:-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/30 hover:bg-black hover:bg-black/100  rounded-md ease-out duration-700 cursor-pointer">
                        <h5 className='text-4xl text-indigo-600 font-semibold mb-2 uppercase'>23+</h5>
                        <p className='text-lg text-gray-200 font-medium'>Years of expreience </p>
                    </div>
                    {/* 4th member >>>> */}
                    <div className="flex items-center justify-center flex-col lg:-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/30 hover:bg-black hover:bg-black/100   rounded-md ease-out duration-700 cursor-pointer">
                        <h5 className='text-4xl text-indigo-600 font-semibold mb-2 uppercase'>07+</h5>
                        <p className='text-lg text-gray-200 font-medium'>GYMs </p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Hero
