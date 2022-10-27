import React from "react";
export default function Calculovet() {
  return (
    <>
      <div className="flex flex-wrap">
      <div className="px-4 md:px-10 py-4 md:py-4 bg-gray-300 rounded-tl-lg rounded-tr-lg">
         <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-700">Cáculo VET</p>
                        <div>
                    
                        </div>
                    </div>
                </div>
        <div className="w-full">
        
          <div className="relative flex flex-col min-w-0 break-words bg-gray w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className="">
                <div className="relative p-6 flex-auto border-t border-gray-400">
                <form action="" className="text-gray-700">
                <div className=" bg-gray-300 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-4 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                
                <div className="rounded ">
               
                <div className="bg-gray-300 py-2 pl-2">
                
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Peso (kg)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                
               
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300">
                <div className="bg-gray-300 py-2 pl-2">
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Estatura (m)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                
                </div> 
                <div className="container my-4 bg-gray-300 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Fatores
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Fat. Ativ. Física (F.A.)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Fat. Injúria (F.I.)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
               
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300">
                <div className=" py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-4 pb-2">
                Kcal/Kg Peso
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Kcal/Kg Peso (Atual)
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    VET por Kcal/Kg Peso
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300">
                <div className=" py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Harris-Benedict (1919)
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    GEB
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    GEB * F.A.
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    GEB * F.A. * F.I.
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Ireton - Jones (1991)
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    VET
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                
                
                
                </div>
                </div>
                </div> 
                <div className="container my-4 bg-gray-300 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Curreri
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    %SCQ
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    VET
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
               
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300">
                <div className=" py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-4 pb-2">
                FAO - 85
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    GEB
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    GEB*F.A.
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300">
                <div className=" py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                DRI
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    NAF
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    VET
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                
                
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300">
                <div className="bg-gray-300 py-2 pl-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Método METS
                    </label>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Atividade
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Tempo
                    </label>
                    <input type="time" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    VET
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                </div>
                
                
                </div>
                </div>
                </div> 

            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-6 gap-8 bg-gray-300 mt-2">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2 px-2">
                Média
                    </label>
                    <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    H.B GEB
                    </label>
                    <input type="checkbox" className="" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    H.B GEB+FA
                    </label>
                    <input type="checkbox" className="" />
                </div>
                
               
                <div className="text-gray-800 px-2">
                <label htmlFor="text" className=" dark:text-gray-500 text-sm font-bold leading-tight tracking-normal mb-2">
                VET
                    </label>
                    <input id="text" className="dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center py-2 text-sm border-gray-300 rounded border shadow" />
                    
                </div>
                </div>
                </div>
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2 px-2">
                Média
                    </label>
                    
                
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    H.B GEB+FA+F
                    </label>
                    <input type="checkbox" className="" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Kcal/Kg Peso
                    </label>
                    <input type="checkbox" className="" />
                </div>
                
                
                </div>
                </div>
                <div className="rounded border-gray-300 ">
                <div className="bg-gray-300 pb-8 pl-2 px-2">
                <label htmlFor="text" className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2 px-2">
                Média
                    </label>
                    
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Ireton
                    </label>
                    <input type="checkbox" className="" />
                </div>
                <div className="flex flex-col pb-2 px-2">
                    <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    FAO GEB
                    </label>
                    <input type="checkbox" className="" />
                </div>
               
                </div>
                </div>
               
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
               
            </div> 
            {/* Remove class [ h-24 ] when adding a card block */}
                
            {/* Remove class [ h-24 ] when adding a card block */}
            
           
                
       



                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                <button className="bg-orange-500 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Cancelar</button>
                <button className="bg-green-300 hover:text-gray-100 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Salvar</button>
                </div>
                </form>
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-00">
                <div className="bg-gray-300 py-2 px-2">
                <div className="dark:text-gray-500 text-lg font-bold leading-tight tracking-normal mb-2">
                Níveis de atividade Física
                    </div>
                <div className="flex flex-col px-2 pb-2">
                    <div className=" text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    SEDENTÁRIO OU LEVE
                    </div>
                    <p className="text-gray-500">
                    Indivíduos que têm ocupações que não demandam muito esforço físico, não caminham por longa distância, em geral usam veículos motorizados para transporte, não se exercitam ou não praticam algum esporte regularmente, gastam maior parte de seu tempo sentados ou deitados, com pouco de deslocamento corporal (por exemplo, conversando, assistindo TV, lendo, ouvindo rádio, usando computadores)
                    </p>
                </div>
                </div>
                

                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-00">
                <div className="bg-gray-300 py-2 px-2">
                
                <div className="flex flex-col px-2 pb-2">
                    <div className=" text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    ATIVO OU ATIVIDADE MODERADA
                    </div>
                    <p className="text-gray-500">
                    Indivíduos que têm ocupações que não são extenuantes em termos de demanda energética, mas gastam mais energia do que o descrito para o estilo de vida sedentário. Podem ser pessoas sedentárias que regularmente gastam certa quantidade de tempo em atividades moderadas ou vigorosas, como parte de sua rotina diária. Por exemplo, a realização de cerca de 1h diária de exercícios moderados ou vigorosos, como corrida, ciclismo ou danças aeróbicas.
                    </p>
                </div>
                </div>
                

                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}

                </div> 
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-00">
                <div className="bg-gray-300 py-2 px-2">
                
                <div className="flex flex-col px-2 pb-2">
                    <div className=" text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    VIGOROSO OU ATIVIDADE VIGOROSA
                    </div>
                    <p className="text-gray-500">
                    Indivíduos que se empenham regularmente em trabalhos extenuantes ou atividades de lazer extenuantes durante várias horas diárias. Exemplos são indivíduos com ocupações não sedentárias e que nadam, correm, pedalam ou dançam pelo menos duas horas por dia.
                    </p>
                </div>
                </div>
                

                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}

                </div> 
                

                </div>
                </div>
               
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}