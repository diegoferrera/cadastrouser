import { Header } from "../../components/Header";

import Sidebarpaciente from "../../components/Sidebar/paciente";
import { Consultali } from "../../components/User/consulta";




export default function Iniciar () {
  return (
   <>
 <Header/>
 <div className="flex flex-no-wrap">
            <Sidebarpaciente />
            
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
               <Consultali/>
            </div>
        </div>
 </>
  )
}