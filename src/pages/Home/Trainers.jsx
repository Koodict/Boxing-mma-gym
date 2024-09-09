import React from 'react';
// import { Dumbbell } from 'lucide-react';
import { Dumbbell, MoveRight } from 'lucide-react';
import SecondaryLink from "../../components/LinkBtn/SecondaryLink";
// import { MoveRight } from 'lucide-react';
const Trainers = () => {
    const trainerData = [
        {
            id: 1,
            trainerImg: "https://images.unsplash.com/photo-1590070714379-e894212d7838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNTQxNTIzNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            name: "M.Ali",
            role: "Boxing Coach",
        },
        {
            id: 2,
            trainerImg: "https://images.unsplash.com/photo-1584952811565-c4c4031805a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyNDIwMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            name: "SA.Shakuar",
            role: "Gym Trainer",
        },
        {
            id: 3,
            trainerImg: "https://images.unsplash.com/photo-1594750170036-022d6e8b1822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNTQxNTc0Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            name: "Mcgregor",
            role: "Prof. Wreslting coach",
        },
        {
            id: 4,
            trainerImg: "https://plus.unsplash.com/premium_photo-1661680068277-1bfa41187c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNTQxNTQzOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            name: "M.Zahabi",
            role: "Mixed Martial Arts Intructor",
        },
    ];
    return (
        <>
            <div className='w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4'>
                <h6 className='text-lg font-bold text-gray-200 flex items-center gap-x-2 mb-6'>
                    <Dumbbell className='w-4 h-4 -rotate-45 text-indigo-600' />
                    OUR EXPERT TRAINERS
                </h6>
                <div className='w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3   lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10'>
                    {/* display it with the loops  */}
                    {trainerData.map((data)=> (


                    // ))}
                    <div key={data.id} className="1g:w-[23%] md:w-[48%] sm:w-[48%] w-full 1g:h-[50vh] md:h-[53vh]
                    sm:h-[58vh] h-[60vh] rounded-xl hover:shadow hover:shadow-indigo-400/90 ease-out cursor-pointer  overflow-hidden relative">
                        <img src={data.trainerImg} alt="trainer image"
                            className="w-full h-full object-cover" />
                        <div className="w-full h-autobg-gray-900/70 absolute bottom-0 left-0 py-4
                        px-2 flex items-center justify-center flex-col">
                            <h1 className="text-xl text-white font-bold">
                                {data.name}
                            </h1>
                            <p className='text-sm font-bold text-gray-200'> {data.role}</p>
                        </div>
                    </div>
                ))}
                </div>
                <SecondaryLink link="/trainers" className="lg:w-[15%] md:w-[50%] sm:w-[75%]  w-[85%] justify-center">View ALL
                <MoveRight className='w-4 h-4'/></SecondaryLink>
            </div>
        </>
    )
}

export default Trainers
