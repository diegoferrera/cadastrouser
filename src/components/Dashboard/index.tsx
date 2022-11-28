import { useSubscription } from "@apollo/client";
import Link from "next/link";
import { useDeleteSubscriberMutation } from "../../graphql/generated";


interface SubscriberProps{
  name: string;
  telefone: string;
  datadenascimento: string;
  sexo: string;

}

export function Subscriber(props: SubscriberProps){
const [deleteUser] = useDeleteSubscriberMutation()



    
  return (
    <>
    
    
      
                            <tr className="h-20 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 border-b border-t border-gray-300">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        
                                        <div className="pl-0">
                                            <p className="font-medium text-base">{props.name}</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">{props.telefone}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-base font-medium leading-none text-gray-800">{props.sexo}</p>
                                    
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium text-base">{props.datadenascimento}</p>
                                   
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium text-base"></p>
                             
                                </td>
                                <td className="pl-12">
                                <Link href="#" passHref>
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-300 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-gray-100">Iniciar Consulta</p>
                                </button>
                                </Link>
                                </td>
                              
                                <td className="pl-20">
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-purple-700 hover:bg-indigo-600 focus:outline-none rounded">
                                Deletar
                            </button>
                                </td>
                            </tr>
                            
                            
                           
                           
  
    </>
  )
}