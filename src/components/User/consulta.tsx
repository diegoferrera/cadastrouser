import { FaCheck, FaTrash } from "react-icons/fa";

export function Consultali (){
  return(
    <>
     <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
     <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-300 rounded-tl-lg rounded-tr-lg">
     <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="mx-4 mb-4">
                      <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">
                      Motivo da Consulta
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-500"
                      />
                    </div>


                    <div className="mx-4 mb-4">
                      <label htmlFor="country" className="block text-lg font-medium text-gray-500">
                          Tipo de Paciente
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 p-8 block w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-gray-500"
                      >
                        <option>Normal</option>
                        <option>Atleta</option>
                        <option>Gestante</option>
                        <option>Câncer</option>
                       
                      </select>
                    </div>
                    

                  
                   
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-gray-100 shadow-sm bg-green-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Nova Consulta
                  </button>
                </div>
              </div>
            </form>
          </div>
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-700">
                        
                        </p>
                      
                    <div>
                        
                           
                        </div>
                    </div>
                </div>
     <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-lg leading-none text-gray-700">
                                <th className="font-normal text-left pl-4">Motivo da consulta</th>
                                <th className="font-normal text-left pl-8">Data / Hora</th>
                                
                               
                                
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">MG</p>
                                          
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">03/10/22 </p>
                                    
                                </td>
                               
                                
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-300 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100">Continuar Consulta</p>
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
                                            <p className="font-medium text-base">MG</p>
                                          
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">04/10/22 </p>
                                    
                                </td>
                               
                                
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-300 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100">Continuar Consulta</p>
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
                                            <p className="font-medium text-base">MG</p>
                                          
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">06/10/22 </p>
                                    
                                </td>
                               
                                
                                <td className="pl-8">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-300 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100">Continuar Consulta</p>
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