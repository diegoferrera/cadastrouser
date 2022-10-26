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
               <Suplementosli/>
            </div>
        </div>
 </>
  )
}