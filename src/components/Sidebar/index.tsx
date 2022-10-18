import { Lessong } from "../Lessong";


export function Sidebar () {
  return (
    <div className="w-[348px] p-6 bg-gray-700 border-l border-gray-600 m shadow ">
    <div>
    <span className="block p-4 mb-6 text-xl font-bold  text-left  lg:border-0 lg:border-b lg:border-gray-500 lg:bg-transparent">
                Cronogramas de Estudo    
    </span>

        <Lessong/>
    </div>
    
</div>
  )
}