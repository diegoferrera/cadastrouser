import Image from 'next/image'

export function Condultali () {
  return (
    
<div className="container mx-auto h-full">
            {/* Code block starts */}
            <div className="dark:bg-gray-700 my-2 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-10 shadow rounded-t hover:border-l border-l-orange-500">
                <div className="flex items-center mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
                    <div className="relative w-12 h-12 rounded">
                    <Image
                        
                        src="https://tuk-cdn.s3.amazonaws.com/assets/components/card_headings/ch_1.png"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover inset-0 absolute rounded"
                    />
                    </div>
                    <div className="ml-2">
                        <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold">Duvida sobre empreender</h2>
                        <p className="font-normal text-xs text-gray-300 dark:text-gray-400 cursor-pointe">Diego ferreira</p>
                    </div>
                </div>
                <div>
                    <button className="font-normal dark:bg-gray-300 dark:hover:bg-orange-500 dark:text-indigo-600 focus:outline-none transition duration-150 ease-in-out rounded text-indigo-600 px-6 py-2 text-sm">Visualizar</button>
                    
                </div>
            </div>
            {/* Code block ends */}

            <div className="max-w-8xl mx-auto container py-10">
                <ul className="flex justify-center items-center">
                    <li>
                        <span className="p-1 flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-orange-500 hover:text-indigo-700 focus:outline-none mr-1 sm:mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </span>
                    </li>
                    <li>
                        <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">1</span>
                    </li>
                    <li>
                        <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">2</span>
                    </li>
                    <li>
                        <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white rounded transition duration-150 ease-in-out text-base leading-tight font-bold shadow px-3 py-2 focus:outline-none">...</span>
                    </li>
                    <li>
                        <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">6</span>
                    </li>
                    <li>
                        <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">7</span>
                    </li>
                    <li>
                        <span className="flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-orange-500 hover:text-indigo-700 p-1 focus:outline-none ml-1 sm:ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
            
        </div>
  )
}
