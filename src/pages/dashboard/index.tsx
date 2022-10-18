
import { useState } from "react";
import { FaHandPeace, FaUserAlt, FaCalendarAlt } from "react-icons/fa";
import { Header } from "../../components/Header";

export default function Dashboard() {
    const [show, setShow] = useState(null)
  return (
    <>
    <Header/>
    <div className="px-10 pt-2 pb-32">
      {/* Code block starts */}
      <div>
            {/* Code block starts */}
            <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4">
                <div>
                    <h4 className="text-4xl font-bold leading-tight text-gray-800 dark:text-orange-500">Olá, Socorro</h4>
                    <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-100 dark:text-gray-400 text-xl mt-3">
                        <li className="flex items-center mr-4">
                            <div className="mr-2">
                            <FaHandPeace size={24} color="#00B37E"/>
                            </div>
                            <span className="leading-tight pt-2">Confira suas consultas</span>
                        </li>
                       
                    </ul>
                </div>
                <div className="flex mt-6 md:mt-0">
                    <button className=" flex mr-3 bg-green-300 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-green-500 text-indigo-700 dark:text-gray-100 px-6 py-4 text-lg font-bold"> <FaUserAlt size={22} className="mr-2"/> Novo Paciente</button>
                    <button  className=" flex transition bg-purple-700 focus:outline-none duration-150 ease-in-out hover:bg-purple-500 rounded text-white px-6 py-4 text-lg font-bold"><FaCalendarAlt size={22} className="mr-2"/> Agenda</button>
                </div>
                {/* Code block ends */}
            </div>
        </div>
        
        <div className="w-full sm:px-6">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-300 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-700">Pacientes</p>
                        <div>
                        <input className=" focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-200 p-10 py-2" type="text" placeholder="Faca uma pesquisar" />
                  
                           
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-lg leading-none text-gray-700">
                                <th className="font-normal text-left pl-4">Nome</th>
                                <th className="font-normal text-left pl-12">Sexo</th>
                                <th className="font-normal text-left pl-12">Nascimento</th>
                                <th className="font-normal text-left pl-20">Consultas</th>
                                
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Diego ferreira Batista</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">86 998263658</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-base font-medium leading-none text-gray-800">Masculino</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                        <div className="w-20 h-3 bg-green-progress rounded-full" />
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium text-base">28/11/1993</p>
                                   
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium text-base">4</p>
                             
                                </td>
                                <td className="pl-20">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-300 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100">Iniciar Consulta</p>
                            </button>
                                </td>
                              
                                <td className="pl-20">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-purple-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100">Deletar</p>
                            </button>
                                </td>
                            </tr>
                           
                           
  
                        </tbody>
                    </table>
                </div>
            </div>
       
    

        
    </div>
    </>
  )
}

