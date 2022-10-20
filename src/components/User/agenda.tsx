import { FaCheck, FaTrash } from "react-icons/fa";

export function Agendali (){
  return(
    <>
     <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
     <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-300 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-700">Agenda</p>
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
                                <th className="font-normal text-left pl-8">Data da consulta</th>
                                <th className="font-normal text-left pl-8">Telefone</th>
                                <th className="font-normal text-left pl-8">Confirmação</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Diego ferreira Batista</p>
                                          
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">28/11/1993 </p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">86 998263658</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">Agenda</p>
                                   
                                </td>
                                
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-300 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100"><FaCheck/></p>
                            </button>
                                </td>
                              
                                <td className="pl-2">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-purple-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100"><FaTrash/></p>
                            </button>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Fernanda Teresina Brito</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">86 99836-7648</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">22/13/1994</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base"> 86 99836-7648</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">Agendado</p>
                                </td>
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-300 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100"><FaCheck/></p>
                            </button>
                                </td>
                              
                                <td className="pl-2">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-purple-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100"><FaTrash/></p>
                            </button>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Fernando oliveira Brito</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">86 9887-2648</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">Feminino</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">10/09/1992</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">Agendado</p>
                             
                                </td>
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-300 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100"><FaCheck/></p>
                            </button>
                                </td>
                              
                                <td className="pl-2">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-purple-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100"><FaTrash/></p>
                            </button>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Rafael junho Brito</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">86 94546-6638</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">Feminino</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                        <div className="w-20 h-3 bg-green-progress rounded-full" />
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">10/05/2000</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">Agendado</p>
                             
                                </td>
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-300 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100"><FaCheck/></p>
                            </button>
                                </td>
                              
                                <td className="pl-2">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-purple-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100"><FaTrash/></p>
                            </button>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Bruna Teresina Brito</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">86 99836-7648</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">Feminino</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">10/08/1984</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">Agendado</p>
                             
                                </td>
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-300 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100"><FaCheck/></p>
                            </button>
                                </td>
                              
                                <td className="pl-2">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-purple-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100"><FaTrash/></p>
                            </button>
                                </td>
                            </tr>
                           
                           
  
                        </tbody>
                    </table>
                </div>

     </div>
    </>
  )
}