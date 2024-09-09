import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';
import Label from "../../components/Label/Label";
import Input from '../../components/Form/Input';
import SecondaryBtn from '../../components/Button/SecondaryBtn';
const BMI = () => {
    //Logic
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBMI] = useState(null);

    //Function to calculate BMI
    const calculateBMI = () => {
        const bmi = (weight / ((height * height)/10000).toFixed(2));
        setBMI(bmi);
    }


    return (
        <>


            <div className="w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10 1g:px-24 md:px-16 sm:px-6 px-4">

                <div className="w-full h-auto flex items-center justify-center flex-col">

                    <h6 className="lg:text-lg md:text-lf sm:text-base text-base font-medium

text-gray-200 flex items-center gap-x-2 bg-black/20 rounded-t-md py-2 px-4">

                        <Dumbbell className="w-4 h-4 -rotate-45text-indigo-600" />

                        Calculate Body MASS Volumn With BMi

                    </h6>

                    <div className="w-full h-auto flex items-end justify-center bg-black/20 rounded-md 1g:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 1g:px-0 md:px-0 sm:px-2 px-4 flex-wrap mt-9">
                        <div className='lg:w-[30%] md:w-[40%] sm:w-[50%] w-full h-auto p-2' >
                            <Label htmlfor="weight ">Weight (Kg)</Label>
                            <input type=" text " name='weight' id='weight'
                                placeholder='Enter your weight here'
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div className='lg:w-[30%] md:w-[40%] sm:w-[50%] w-full h-auto p-2' >
                            <Label htmlfor="weight ">Age (Kg)</Label>
                            <input type=" number " name='weight' id='weight'
                                placeholder='Enter your Age here'
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                        </div>
                        <div className='lg:w-[30%] md:w-[40%] sm:w-[50%] w-full h-autop-2' >
                            <Label htmlfor="weight ">Height (cm)</Label>
                            <input type=" text " name='Height' id='Height'
                                placeholder='Enter your Height here'
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div className='lg:w-[25%] md:w-[35%] sm:w-[50%] w-full h-auto p-2' >
                            <SecondaryBtn type="submit"
                                className="w-full h-11 justify-center"
                                onClick={calculateBMI}>
                                Calculate Body Index

                            </SecondaryBtn>
                        </div>
                    </div>
                    {/* Dsiplay BMI */}
                    {bmi !== null &&(
                    <div className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <p className='text-indigo-600'>
                    Your Averge Body Mass Volume is Around:- <span className='font-bold'>{bmi}</span></p> </div> )}


                </div>

            </div>

        </>
    );
};

export default BMI;
