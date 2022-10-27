import Image from 'next/image'
import { FaPencilAlt, FaTrashAlt, FaEye } from 'react-icons/fa'

interface ConsultaProps{
    name: string;
    description: string;
  }

export function Condultali (props: ConsultaProps) {
  return (
    
<div className="container mx-auto h-full">
           <ul>
            <li>
           
            {/* Code block starts */}
            <div className="w-full bg-gray-300 dark:bg-gray-800 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-10 shadow rounded-t">
                <div className="flex items-center mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
                    
                    <div className="ml-2">
                        <h2 className=" dark:text-gray-500 text-sm font-bold">{props.name}</h2>
                        <p className="font-normal text-xs text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-700">{props.description}</p>
                    </div>
                </div>
                <div>
                <button className="font-normal bg-orange-500 hover:bg-green-500 dark:text-indigo-600 focus:outline-none transition duration-150 ease-in-out rounded text-indigo-600 px-6 mr-3 py-2 text-sm"><FaEye /></button>
                    <button className="font-normal bg-green-500 hover:bg-orange-500 dark:text-indigo-600 focus:outline-none transition duration-150 ease-in-out rounded text-indigo-600 px-6 py-2 text-sm"><FaPencilAlt /></button>
                    <button className="ml-2 sm:ml-3 font-normal focus:outline-none bg-purple-700 hover:bg-green-500 transition duration-150 ease-in-out hover:bg-indigo-600 dark:bg-indigo-600 rounded text-white px-6 py-2 text-sm"><FaTrashAlt /></button>
                </div>
            </div>
            {/* Code block ends */}
        
            </li>
           </ul>
            
        </div>
  )
}
