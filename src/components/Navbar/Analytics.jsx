import React from 'react'

const Analytics = () => {
    return (
        <>
            <div class="grid grid-cols-2 gap-4 px-4 
             sm:grid-cols-4 sm:px-8 border-green-500 mb-48 mt-10" >
            

                <div class="flex items-center bg-white border  hover:bg-green-600 ease-out duration-700 cursor-pointer rounded-sm overflow-hidden shadow">
                    <div class="p-4 bg-green-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                        </path>
                    </svg></div>
                    <div class="px-4 text-gray-800">
                        <h3 class="text-sm tracking-wider">Joined Members</h3>
                        <p class="text-3xl">0</p>
                    </div>
                </div>
                <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow
                 hover:bg-blue-600 ease-out duration-700 cursor-pointer">
                    <div class="p-4 bg-blue-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
                        </path>
                    </svg></div>
                    <div class="px-4 text-gray-700">
                        <h3 class="text-sm tracking-wider">Combat Events</h3>
                        <p class="text-3xl">0</p>
                    </div>
                </div>
                                
                <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow
                 hover:bg-purple-600 ease-out duration-700 cursor-pointer">
                    <div class="p-4 bg-indigo-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z">
                        </path>
                    </svg></div>
                    <div class="px-4 text-gray-700">
                        <h3 class="text-sm tracking-wider">Matches</h3>
                        <p class="text-3xl">0</p>
                    </div>
                </div>
                <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow
                 hover:bg-red-600 ease-out duration-900 cursor-pointer">
                    <div class="p-4 bg-red-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4">
                        </path>
                    </svg></div>
                    <div class="px-4 text-gray-700">
                        <h3 class="text-sm tracking-wider">Total Classes</h3>
                        <p class="text-3xl">0</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics
