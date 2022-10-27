
import { Header } from "../../components/Header";

import Calculovet from '../../components/Tab/calculovet';
import Sidebarpaciente from "../../components/Sidebar/paciente";




export default function Pacientecal () {

  return (
   <>
 <Header/>
 <div className="flex flex-no-wrap">
            <Sidebarpaciente />
            
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
               <Calculovet/>
            </div>
        </div>
 </>
  )
}