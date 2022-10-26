import { FaTrash } from "react-icons/fa";

export function Suplementosli (){
    
  return(
    <>
     <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
     <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-300 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-700">Lista de Suplementos</p>
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
                                <th className="font-normal text-left pl-12">Princípio Ativo</th>
                                <th className="font-normal text-left pl-8">Categoria</th>
                                
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">CARNITINA</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">Carnitina</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">Suplemento Nutricional</p>
                                   
                                </td>
                                
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-300 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100">Editar</p>
                            </button>
                                </td>
                              
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-purple-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100"><FaTrash/></p>
                            </button>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">GLUCONATO DE ZINCO</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">Zinco</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">Suplemento Mineral</p>
                                   
                                </td>
                                
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-300 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100">Editar</p>
                            </button>
                                </td>
                              
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-purple-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100"><FaTrash/></p>
                            </button>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">LEVOCARNIN 1G</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">Carnitina</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">Suplemento Nutricional</p>
                                   
                                </td>
                                
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-300 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100">Editar</p>
                            </button>
                                </td>
                              
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-purple-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100"><FaTrash/></p>
                            </button>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">ZINCO</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">Zinco</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">Suplemento Mineral</p>
                                   
                                </td>
                                
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-300 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100">Editar</p>
                            </button>
                                </td>
                              
                                <td className="pl-8">
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