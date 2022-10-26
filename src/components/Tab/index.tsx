import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
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
                Peso / Estatura / Pregas
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
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
                 Circunferências / Diâmetros
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
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
                 Bioimpedância
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-gray w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="relative p-6 flex-auto border-t border-gray-400">
                <form action="" className="text-gray-700">
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="bg-gray-300 py-8 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Estatura
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Estatura (m)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Alt. do Joelho (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Est. p/ Joelho (cm
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300">
                <div className="bg-gray-300 py-8 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Peso
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Peso atual(kg)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Peso Usual(kg)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Peso Saúdavel(kg)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300">
                <div className="bg-gray-300 py-8 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Observação
                    </label>
                <div className="flex flex-col pb-2 px-2">
                   <textarea className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-52 flex items-center py-2 text-sm border-gray-300 rounded border shadow">

                   </textarea>
                   
                </div>
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                
                </div> 

            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 bg-gray-300 mt-2">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2 px-2">
                Pregas Cutâneas (mm)
                    </label>
                    <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Tricipital
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Axiliar Média
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Abdominal
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Coxa
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Panturilha
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Axiliar Média
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="text-gray-800 px-2">
                <label htmlFor="text" className=" dark:text-gray-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    % Gordura
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                    
                </div>
                </div>
                </div>
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-orange-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Protocolo:
                    </label>
                    <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Subescapular
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Supra Ilíaca
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Peitoral
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Bíceps
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Somatório das dobras
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                
                <div className="text-gray-800">
                <label htmlFor="text" className=" dark:text-gray-500 text-sm font-bold leading-tight tracking-normal mb-2">
                   Resultado
                    </label>
                    <input id="text" className="dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700  bg-white font-normal w-full h-10 flex items-center pl-3 text-sm bg-orange-500 rounded border shadow" />
                    
                </div>
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
               
            </div> 
            {/* Remove class [ h-24 ] when adding a card block */}
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300">
                <div className="bg-gray-300 py-8 px-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Circunferências
                    </label>
                <div className="flex flex-col px-2 pb-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Braço (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal ww-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col px-2 pb-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Prega Tricipital (mm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal ww-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col px-2 pb-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Muscular do Braço (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col px-2 pb-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Abdômen (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col px-2 pb-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Cintura (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col px-2 pb-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Quadril (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    
                </div>
                <div className="flex flex-col px-2 pb-2">
                <label htmlFor="text" className=" dark:text-gray-500 text-sm font-bold leading-tight tracking-normal mb-2">
                Relação Cintura/Quadril
                    </label>
                    <input id="text" className="dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700  bg-white font-normal w-full h-10 flex items-center pl-3 text-sm bg-orange-500 rounded border shadow" />
                    
                </div>
                <div className="flex flex-col px-2 pb-2">
                <label htmlFor="text" className=" dark:text-gray-500 text-sm font-bold leading-tight tracking-normal mb-2">
                Índice de Coincidade
                    </label>
                    <input id="text" className="dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700  bg-white font-normal w-full h-10 flex items-center pl-3 text-sm bg-orange-500 rounded border shadow" />
                    
                </div>
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300">
                <div className="bg-gray-300 py-8 px-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Classificação Nutricional
                    </label>
                <div className="flex flex-col pb-2">
                
                    <input id="text" className="dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700  bg-white font-normal w-full h-10 flex items-center pl-3 text-sm bg-gray-400 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2">
                
                    <input id="text" className="dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700  bg-white font-normal w-full h-10 flex items-center pl-3 text-sm bg-gray-400 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2">
                
                    <input id="text" className="dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700  bg-white font-normal w-full h-10 flex items-center pl-3 text-sm bg-green-500 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2 mt-4">
                    Classificação de Risco DCV
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-green-500 font-normal ww-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-400 font-normal ww-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}

            </div> 
            {/* Remove class [ h-24 ] when adding a card block */}
            
           
                
       



                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-purple-700 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Relatórios</button>
                <button className="bg-orange-500 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Gráficos</button>
                <button className="bg-green-300 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Salvar</button>
                </div>
                </form>
                
                </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="relative p-6 flex-auto border-t border-gray-400">
                <form action="" className="text-gray-700">
                
            {/* Remove class [ h-24 ] when adding a card block */}
                <div className="bg-gray-300 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                
                <div className="rounded">
                <div className="bg-gray-300 py-8 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Circunferências
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Pescoço (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Tórax (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Ombros (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Abdomen (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Cintura (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Quadril (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                <div className="rounded">
                <div className="bg-gray-300 py-8 pl-2">
                
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Punho (cm)
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        E
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Braço (cm)
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        E
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Braço contraído (cm
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        E
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Antebraço (cm)
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        E
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Coxa glúteo (cm)
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        E
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Coxa medial (cm
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        E
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Perna (cm)
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        E
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Tornozelo (cm)
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        E
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                
                
               
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                <div className="rounded">
                <div className="bg-gray-300 py-8 pl-2">
                
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Punho (cm)
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        D
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Braço (cm)
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        D
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Braço contraído (cm
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        D
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Antebraço (cm)
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        D
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Coxa glúteo (cm)
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        D
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Coxa medial (cm
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        D
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Perna (cm)
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        D
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Tornozelo (cm)
                    </label>
                    <div className="border border-gray-500 rounded flex">
                                    <div className="px-4 py-3 text-gray-500 flex items-center border-r border-gray-500">
                                        D
                                    </div>
                                    <input type="text" className=" border py-3 w-full text-sm focus:outline-none text-gray-500"  />
                                </div>
                </div>
                
                
               
                </div>
                </div>
                

            </div> 
            {/* Remove class [ h-24 ] when adding a card block */}
            {/* Remove class [ h-24 ] when adding a card block */}
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                
                <div className="rounded">
                <div className="bg-gray-300 py-8 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Diâmetros
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Biestilóide punho (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Biepicondiliano úmero (cm
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Biepicondiliano fêmur (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Biacromial (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Torácico transverso (cm)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                
                

            </div> 
            {/* Remove class [ h-24 ] when adding a card block */}
            
                
                
       



                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-purple-700 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Relatórios</button>
                <button className="bg-orange-500 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Gráficos</button>
                <button className="bg-green-300 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Salvar</button>
                </div>
                </form>
                    </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <form action="" className="text-gray-700">
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2 px-2">
                Bioimpedância
                    </label>
                    <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Percentual de Massa Livre de Gordura (FFM) (%)
                    </label>
                    <input id="text" className="pl-2 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" placeholder="EX: 00.00%"/>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Quantidade em kg de Massa Livre de Gordura (FFM): 
                    </label>
                    <input id="text" className="pl-2 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" placeholder="EX: 00.00KG"/>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Quantidade em kg de Massa Magra (LBM): 
                    </label>
                    <input id="text" className="pl-2 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" placeholder="EX: 00.00KG"/>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Percentual de Massa Gordura (FM) (%)
                    </label>
                    <input id="text" className="pl-2 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" placeholder="EX: 00.00KG"/>
                </div>
                
                
                
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
               
                <div className="flex flex-col pb-2 px-2 pt-6">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Quantidade em kg de Massa Gordura (FM):

                    </label>
                    <input id="text" className="pl-2 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" placeholder="EX: 00.00%"/>
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                      Resistência:
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                      Reatância:
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Ângulo de fase:
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
               
               
               
                
                
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}

            </div> 
            {/* Remove class [ h-24 ] when adding a card block */}
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
                {/* Peso / Altura*/}
                <div className="rounded">
                <div className="bg-gray-300 py-8 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Resultado
                    </label>
                
                
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    IMC
                    </label>
                    <input id="text" className="text-gray-200 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-orange-500 font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                </div>
                </div>
                
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
              
            </div> 
            {/* Remove class [ h-24 ] when adding a card block */}
            
              
                
       



                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button className="bg-purple-700 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Relatórios</button>
                <button className="bg-orange-500 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Gráficos</button>
                <button className="bg-green-300 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Salvar</button>
                </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      return <Tabs color="gray" />;
    </>
  );
}