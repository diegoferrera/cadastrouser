import React from "react";
import { FaCheck } from "react-icons/fa";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
      <div className="px-4 md:px-10 py-4 md:py-4 bg-gray-300 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-700">Prescrição Dietética Oral</p>
                        <div>
                       
                  
                           
                        </div>
                    </div>
                </div>
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-gray bg-" + color + "-400"
                    : "text-" + color + "-100 bg-green-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Desjejum
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-gray bg-" + color + "-400"
                    : "text-" + color + "-100 bg-green-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Colação
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-gray-500 bg-" + color + "-400"
                    : "text-" + color + "-100 bg-green-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Almoço
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-gray-500 bg-" + color + "-400"
                    : "text-" + color + "-100 bg-green-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 L.Tarde
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-gray-500 bg-" + color + "-400"
                    : "text-" + color + "-100 bg-green-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Jantar
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 6
                    ? "text-gray-500 bg-" + color + "-400"
                    : "text-" + color + "-100 bg-green-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Ceia
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 7
                    ? "text-gray-500 bg-" + color + "-400"
                    : "text-" + color + "-100 bg-green-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                L.Extra 1
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 8
                    ? "text-gray-500 bg-" + color + "-400"
                    : "text-" + color + "-100 bg-green-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                L.Extra 2
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 9
                    ? "text-gray-500 bg-" + color + "-400"
                    : "text-" + color + "-100 bg-green-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(8);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                L.Extra 3
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 10
                    ? "text-gray-500 bg-" + color + "-400"
                    : "text-" + color + "-100 bg-green-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(9);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Resumo
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-gray w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="relative p-2 flex-auto border-t border-gray-400">
                <form action="" className="text-gray-700">
                <div className="bg-gray-300 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="pl-4 dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Refeição
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    <input id="text" className="pl-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" placeholder="Desjejum" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Horário
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    
                    <input type="time" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Local
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                
                </div> 

                    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 bg-gray-300 mt-4">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
               
                    <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Alimento
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Medida
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Quantidade
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" placeholder="1"/>
                </div>
                
              
                </div>
                </div>
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-orange-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Cardápio
                    </label>
                    <div className="flex flex-col pb-2 px-2">
                    <select id="sexo" name="sexo" autoComplete="country-name" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500">
                        <option>Cardápio 1</option>
                        <option>Cardápio 2</option>
                        <option>Cardápio 3</option>
                        <option>Cardápio 4</option>
                        <option>Cardápio 5</option>
                       
                      </select>
                    
                </div>
               
           
            
                
              
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
               
                    </div> 
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-purple-700 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Tabela</button>
                <button className="bg-orange-500 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Cardapios</button>
                <button className="bg-green-300 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Salvar</button>
                    </div>
           
                </form>
                 {/* Remove class [ h-24 ] when adding a card block */}
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-lg leading-none text-gray-700">
                                <th className="font-bold text-left pl-4"></th>
                                <th className="font-bold text-left pl-8">Total</th>
                                <th className="font-bold text-left pl-8">Total em %</th>
                                <th className="font-bold text-left pl-8">Total/Kg</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Proteína</p>
                                          
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g </p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0g</p>
                                   
                                </td>
                                
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Carboidrato</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base"> 0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Gordura</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Vet</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                       
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 %</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                          
                           
                           
  
                        </tbody>
                    </table>
                </div>
            {/* Remove class [ h-24 ] when adding a card block */}
                </div>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="relative p-2 flex-auto border-t border-gray-400">
                <form action="" className="text-gray-700">
                <div className="bg-gray-300 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="pl-4 dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Refeição
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="pl-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" placeholder="Colação" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Horário
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    
                    <input type="time" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Local
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                
                </div> 

                    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 bg-gray-300 mt-4">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
               
                    <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Alimento
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Medida
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Quantidade
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" placeholder="1"/>
                </div>
                
              
                </div>
                </div>
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-orange-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Cardápio
                    </label>
                    <div className="flex flex-col pb-2 px-2">
                    <select id="sexo" name="sexo" autoComplete="country-name" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500">
                        <option>Cardápio 1</option>
                        <option>Cardápio 2</option>
                        <option>Cardápio 3</option>
                        <option>Cardápio 4</option>
                        <option>Cardápio 5</option>
                       
                      </select>
                    
                </div>
               
           
            
                
              
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
               
                    </div> 
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-purple-700 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Tabela</button>
                <button className="bg-orange-500 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Cardapios</button>
                <button className="bg-green-300 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Salvar</button>
                    </div>
           
                </form>
                 {/* Remove class [ h-24 ] when adding a card block */}
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-lg leading-none text-gray-700">
                                <th className="font-bold text-left pl-4"></th>
                                <th className="font-bold text-left pl-8">Total</th>
                                <th className="font-bold text-left pl-8">Total em %</th>
                                <th className="font-bold text-left pl-8">Total/Kg</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Proteína</p>
                                          
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g </p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0g</p>
                                   
                                </td>
                                
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Carboidrato</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base"> 0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Gordura</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Vet</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                       
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 %</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                          
                           
                           
  
                        </tbody>
                    </table>
                </div>
                    </div>
                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="relative p-2 flex-auto border-t border-gray-400">
                <form action="" className="text-gray-700">
                <div className="bg-gray-300 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                
                    </label>
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="pl-4 dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Refeição
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="pl-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" placeholder="Almoço" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Horário
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    
                    <input type="time" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Local
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                
                </div> 

                    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 bg-gray-300 mt-4">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
               
                    <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Alimento
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Medida
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Quantidade
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" placeholder="1"/>
                </div>
                
              
                </div>
                </div>
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-orange-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Cardápio
                    </label>
                    <div className="flex flex-col pb-2 px-2">
                    <select id="sexo" name="sexo" autoComplete="country-name" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500">
                        <option>Cardápio 1</option>
                        <option>Cardápio 2</option>
                        <option>Cardápio 3</option>
                        <option>Cardápio 4</option>
                        <option>Cardápio 5</option>
                       
                      </select>
                    
                </div>
               
           
            
                
              
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
               
                    </div> 
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-purple-700 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Tabela</button>
                <button className="bg-orange-500 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Cardapios</button>
                <button className="bg-green-300 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Salvar</button>
                    </div>
           
                </form>
                 {/* Remove class [ h-24 ] when adding a card block */}
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-lg leading-none text-gray-700">
                                <th className="font-bold text-left pl-4"></th>
                                <th className="font-bold text-left pl-8">Total</th>
                                <th className="font-bold text-left pl-8">Total em %</th>
                                <th className="font-bold text-left pl-8">Total/Kg</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Proteína</p>
                                          
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g </p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0g</p>
                                   
                                </td>
                                
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Carboidrato</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base"> 0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Gordura</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Vet</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                       
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 %</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                          
                           
                           
  
                        </tbody>
                    </table>
                </div>
            {/* Remove class [ h-24 ] when adding a card block */}
                </div>
                </div>

                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                <div className="relative p-2 flex-auto border-t border-gray-400">
                <form action="" className="text-gray-700">
                <div className="bg-gray-300 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="pl-4 dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Refeição
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="pl-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" placeholder="L.Tarde" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Horário
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    
                    <input type="time" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Local
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                
                </div> 

                    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 bg-gray-300 mt-4">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
               
                    <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Alimento
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Medida
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Quantidade
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" placeholder="1"/>
                </div>
                
              
                </div>
                </div>
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-orange-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Cardápio
                    </label>
                    <div className="flex flex-col pb-2 px-2">
                    <select id="sexo" name="sexo" autoComplete="country-name" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500">
                        <option>Cardápio 1</option>
                        <option>Cardápio 2</option>
                        <option>Cardápio 3</option>
                        <option>Cardápio 4</option>
                        <option>Cardápio 5</option>
                       
                      </select>
                    
                </div>
               
           
            
                
              
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
               
                    </div> 
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-purple-700 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Tabela</button>
                <button className="bg-orange-500 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Cardapios</button>
                <button className="bg-green-300 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Salvar</button>
                    </div>
           
                </form>
                 {/* Remove class [ h-24 ] when adding a card block */}
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-lg leading-none text-gray-700">
                                <th className="font-bold text-left pl-4"></th>
                                <th className="font-bold text-left pl-8">Total</th>
                                <th className="font-bold text-left pl-8">Total em %</th>
                                <th className="font-bold text-left pl-8">Total/Kg</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Proteína</p>
                                          
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g </p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0g</p>
                                   
                                </td>
                                
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Carboidrato</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base"> 0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Gordura</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Vet</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                       
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 %</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                          
                           
                           
  
                        </tbody>
                    </table>
                </div>
                    </div>
                </div>

                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                <div className="relative p-2 flex-auto border-t border-gray-400">
                <form action="" className="text-gray-700">
                <div className="bg-gray-300 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="pl-4 dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Refeição
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="pl-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" placeholder="Jantar" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Horário
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    
                    <input type="time" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Local
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                
                </div> 

                    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 bg-gray-300 mt-4">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
               
                    <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Alimento
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Medida
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Quantidade
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" placeholder="1"/>
                </div>
                
              
                </div>
                </div>
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-orange-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Cardápio
                    </label>
                    <div className="flex flex-col pb-2 px-2">
                    <select id="sexo" name="sexo" autoComplete="country-name" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500">
                        <option>Cardápio 1</option>
                        <option>Cardápio 2</option>
                        <option>Cardápio 3</option>
                        <option>Cardápio 4</option>
                        <option>Cardápio 5</option>
                       
                      </select>
                    
                </div>
               
           
            
                
              
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
               
                    </div> 
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-purple-700 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Tabela</button>
                <button className="bg-orange-500 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Cardapios</button>
                <button className="bg-green-300 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Salvar</button>
                    </div>
           
                </form>
                 {/* Remove class [ h-24 ] when adding a card block */}
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-lg leading-none text-gray-700">
                                <th className="font-bold text-left pl-4"></th>
                                <th className="font-bold text-left pl-8">Total</th>
                                <th className="font-bold text-left pl-8">Total em %</th>
                                <th className="font-bold text-left pl-8">Total/Kg</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Proteína</p>
                                          
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g </p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0g</p>
                                   
                                </td>
                                
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Carboidrato</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base"> 0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Gordura</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Vet</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                       
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 %</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                          
                           
                           
  
                        </tbody>
                    </table>
                </div>
                    </div>
                </div>

                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                <div className="relative p-2 flex-auto border-t border-gray-400">
                <form action="" className="text-gray-700">
                <div className="bg-gray-300 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="pl-4 dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Refeição
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="pl-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" placeholder="CEIA" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Horário
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    
                    <input type="time" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Local
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                
                </div> 

                    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 bg-gray-300 mt-4">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
               
                    <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Alimento
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Medida
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Quantidade
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" placeholder="1"/>
                </div>
                
              
                </div>
                </div>
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-orange-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Cardápio
                    </label>
                    <div className="flex flex-col pb-2 px-2">
                    <select id="sexo" name="sexo" autoComplete="country-name" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500">
                        <option>Cardápio 1</option>
                        <option>Cardápio 2</option>
                        <option>Cardápio 3</option>
                        <option>Cardápio 4</option>
                        <option>Cardápio 5</option>
                       
                      </select>
                    
                </div>
               
           
            
                
              
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
               
                    </div> 
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-purple-700 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Tabela</button>
                <button className="bg-orange-500 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Cardapios</button>
                <button className="bg-green-300 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Salvar</button>
                    </div>
           
                </form>
                 {/* Remove class [ h-24 ] when adding a card block */}
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-lg leading-none text-gray-700">
                                <th className="font-bold text-left pl-4"></th>
                                <th className="font-bold text-left pl-8">Total</th>
                                <th className="font-bold text-left pl-8">Total em %</th>
                                <th className="font-bold text-left pl-8">Total/Kg</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Proteína</p>
                                          
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g </p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0g</p>
                                   
                                </td>
                                
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Carboidrato</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base"> 0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Gordura</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Vet</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                       
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 %</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                          
                           
                           
  
                        </tbody>
                    </table>
                </div>
                    </div>
                </div>

                <div className={openTab === 7 ? "block" : "hidden"} id="link7">
                <div className="relative p-2 flex-auto border-t border-gray-400">
                <form action="" className="text-gray-700">
                <div className="bg-gray-300 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="pl-4 dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Refeição
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="pl-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" placeholder="L.EXTRA" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Horário
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    
                    <input type="time" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Local
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                
                </div> 

                    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 bg-gray-300 mt-4">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
               
                    <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Alimento
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Medida
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Quantidade
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" placeholder="1"/>
                </div>
                
              
                </div>
                </div>
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-orange-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Cardápio
                    </label>
                    <div className="flex flex-col pb-2 px-2">
                    <select id="sexo" name="sexo" autoComplete="country-name" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500">
                        <option>Cardápio 1</option>
                        <option>Cardápio 2</option>
                        <option>Cardápio 3</option>
                        <option>Cardápio 4</option>
                        <option>Cardápio 5</option>
                       
                      </select>
                    
                </div>
               
           
            
                
              
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
               
                    </div> 
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-purple-700 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Tabela</button>
                <button className="bg-orange-500 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Cardapios</button>
                <button className="bg-green-300 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Salvar</button>
                    </div>
           
                </form>
                 {/* Remove class [ h-24 ] when adding a card block */}
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-lg leading-none text-gray-700">
                                <th className="font-bold text-left pl-4"></th>
                                <th className="font-bold text-left pl-8">Total</th>
                                <th className="font-bold text-left pl-8">Total em %</th>
                                <th className="font-bold text-left pl-8">Total/Kg</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Proteína</p>
                                          
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g </p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0g</p>
                                   
                                </td>
                                
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Carboidrato</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base"> 0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Gordura</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Vet</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                       
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 %</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                          
                           
                           
  
                        </tbody>
                    </table>
                </div>
                    </div>
                </div>
                <div className={openTab === 8 ? "block" : "hidden"} id="link8">
                <div className="relative p-2 flex-auto border-t border-gray-400">
                <form action="" className="text-gray-700">
                <div className="bg-gray-300 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="pl-4 dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Refeição
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="pl-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" placeholder="L.EXTRA 2" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Horário
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    
                    <input type="time" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Local
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                
                </div> 

                    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 bg-gray-300 mt-4">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
               
                    <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Alimento
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Medida
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Quantidade
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" placeholder="1"/>
                </div>
                
              
                </div>
                </div>
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-orange-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Cardápio
                    </label>
                    <div className="flex flex-col pb-2 px-2">
                    <select id="sexo" name="sexo" autoComplete="country-name" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500">
                        <option>Cardápio 1</option>
                        <option>Cardápio 2</option>
                        <option>Cardápio 3</option>
                        <option>Cardápio 4</option>
                        <option>Cardápio 5</option>
                       
                      </select>
                    
                </div>
               
           
            
                
              
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
               
                    </div> 
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-purple-700 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Tabela</button>
                <button className="bg-orange-500 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Cardapios</button>
                <button className="bg-green-300 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Salvar</button>
                    </div>
           
                </form>
                 {/* Remove class [ h-24 ] when adding a card block */}
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-lg leading-none text-gray-700">
                                <th className="font-bold text-left pl-4"></th>
                                <th className="font-bold text-left pl-8">Total</th>
                                <th className="font-bold text-left pl-8">Total em %</th>
                                <th className="font-bold text-left pl-8">Total/Kg</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Proteína</p>
                                          
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g </p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0g</p>
                                   
                                </td>
                                
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Carboidrato</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base"> 0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Gordura</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Vet</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                       
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 %</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                          
                           
                           
  
                        </tbody>
                    </table>
                </div>
                    </div>
                </div>

                <div className={openTab === 9 ? "block" : "hidden"} id="link9">
                <div className="relative p-2 flex-auto border-t border-gray-400">
                <form action="" className="text-gray-700">
                <div className="bg-gray-300 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="pl-4 dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Refeição
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="pl-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" placeholder="L.EXTRA 3" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Horário
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    
                    <input type="time" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Local
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
        
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                
                </div> 

                    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 bg-gray-300 mt-4">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
               
                    <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Alimento
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Medida
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Quantidade
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm pl-2 border-gray-300 rounded border shadow" placeholder="1"/>
                </div>
                
              
                </div>
                </div>
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-orange-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Cardápio
                    </label>
                    <div className="flex flex-col pb-2 px-2">
                    <select id="sexo" name="sexo" autoComplete="country-name" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500">
                        <option>Cardápio 1</option>
                        <option>Cardápio 2</option>
                        <option>Cardápio 3</option>
                        <option>Cardápio 4</option>
                        <option>Cardápio 5</option>
                       
                      </select>
                    
                </div>
               
           
            
                
              
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
               
                    </div> 
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-purple-700 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Tabela</button>
                <button className="bg-orange-500 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Cardapios</button>
                <button className="bg-green-300 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Salvar</button>
                    </div>
           
                </form>
                 {/* Remove class [ h-24 ] when adding a card block */}
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-lg leading-none text-gray-700">
                                <th className="font-bold text-left pl-4"></th>
                                <th className="font-bold text-left pl-8">Total</th>
                                <th className="font-bold text-left pl-8">Total em %</th>
                                <th className="font-bold text-left pl-8">Total/Kg</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Proteína</p>
                                          
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g </p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0g</p>
                                   
                                </td>
                                
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Carboidrato</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base"> 0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-300 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Gordura</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0%</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">Vet</p>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="text-base font-medium leading-none text-gray-800">0 g</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                       
                                    </div>
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 %</p>
                                   
                                </td>
                                <td className="pl-8">
                                    <p className="font-medium text-base">0 g</p>
                             
                                </td>
                                
                            </tr>
                          
                           
                           
  
                        </tbody>
                    </table>
                </div>
                    </div>
                </div>

                <div className={openTab === 10 ? "block" : "hidden"} id="link10">
                <div className="relative p-2 flex-auto border-t border-gray-400">
               
                 {/* Remove class [ h-24 ] when adding a card block */}
                
                    </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Avaliacao() {
  return (
    <>
      return <Tabs color="gray" />;
    </>
  );
}