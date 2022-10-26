import { Header } from "../../components/Header";

import Sidebarpaciente from "../../components/Sidebar/paciente";
import TabsRender from "../../components/Tab";






export default function Iniciar () {
  return (
   <>
 <Header/>
 <div className="flex flex-no-wrap">
            <Sidebarpaciente />
            
            <div className="container mx-auto md:w-4/5 w-11/12 px-6">
            <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
                <TabsRender/>
              </div>
            </div>
        </div>
 </>
  )
}