import { useQuery, gql } from '@apollo/client';
import { FaTrash } from "react-icons/fa";
import { useGetSubscribersQuery } from '../../graphql/generated';
import { Subscriber } from '../Dashboard';


export function PacientesLi (){
    const { data } = useGetSubscribersQuery()
  return(
    <>
     <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
     <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-300 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-700">Lista de Pacientes</p>
                        <div>
                        <input className=" focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-200 p-10 py-2" type="text" placeholder="Faca uma pesquisar" />
                  
                           
                        </div>
                    </div>
                </div>
     <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-lg leading-none text-gray-700">
                                <th className="font-normal text-left pl-4">Nome</th>
                                <th className="font-normal text-left pl-12">Sexo</th>
                                <th className="font-normal text-left pl-8">Nascimento</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            
                        {data?.subscribers.map(subscribers => {
                            return (
                                <Subscriber
                                        key={subscribers.id}
                                        name={subscribers.name}
                                        telefone={subscribers.telefone}
                                        sexo={subscribers.sexo}
                                        datadenascimento={subscribers.datadenascimento}
                                    />
                               
                            )
                           })}
                           
  
                        </tbody>
                    </table>
                </div>

     </div>
    </>
  )
}