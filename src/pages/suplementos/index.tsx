import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Suplementosli } from "../../components/Suplemento";




export default function Suplementos () {
  return (
   <>
 <Header/>
 <div className="flex flex-no-wrap">
            <Sidebar/>
            
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
            <h4 className="mt-4 text-lg bg-red-500 rounded text-gray-100 font-bold leading-tight text">Alerta do servidor Vercel, o carregamento é feito uma uníca vez</h4>
               <Suplementosli/>
            </div>
        </div>
 </>
  )
}