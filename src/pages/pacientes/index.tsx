import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { PacientesLi } from "../../components/User/pacientes";



export default function Pacientes () {
  return (
   <>
 <Header/>
 <div className="flex flex-no-wrap">
            <Sidebar/>
            
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
               <PacientesLi/>
            </div>
        </div>
 </>
  )
}