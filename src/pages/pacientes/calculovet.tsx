import { useQuery, gql } from '@apollo/client';
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Calculovet from '../../components/Tab/calculovet';
import { Consultali } from "../../components/User/consulta";




export default function Pacientecal () {

  return (
   <>
 <Header/>
 <div className="flex flex-no-wrap">
            <Sidebar/>
            
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
               <Calculovet/>
            </div>
        </div>
 </>
  )
}