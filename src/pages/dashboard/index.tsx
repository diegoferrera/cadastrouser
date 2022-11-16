
import { useQuery, gql } from '@apollo/client';
import Link from "next/link";
import { useState } from "react";
import { FaHandPeace, FaUserAlt, FaCalendarAlt } from "react-icons/fa";
import { Subscriber } from '../../components/Dashboard';
import { Header } from "../../components/Header";
import Modal from "../../components/User/newpaciente";
import { useGetSubscribersQuery } from '../../graphql/generated';


export default function Dashboard () {
    const { data } = useGetSubscribersQuery()
    
  return (
    <>
    <Header/>
    <div className="px-10 pt-2 pb-32">
      {/* Code block starts */}
      <div>
            {/* Code block starts */}
            <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4">
                <div>
                    <h4 className="text-4xl font-bold leading-tight text-orange-500">Olá, Socorro!<span className="text-green-500"> Bom dia </span></h4>
                    <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-400 text-xl mt-3">
                        <li className="flex items-center mr-4">
                            <div className="mr-2">
                            <FaHandPeace size={24} color="#00B37E"/>
                            </div>
                            <span className="leading-tight pt-2">Confira suas consultas</span>
                        </li>
                       
                    </ul>
                    <h4 className="mt-4 text-lg bg-red-500 rounded text-gray-100 font-bold leading-tight p-2">Arquivos carregados: Serapração de perfil de paciente, suplementos, alimentos.</h4>
                    <ul className="text-gray-700">
                       <li className="font-bold">Sincronizando:</li>
                       <li> - Subpáginas e Questionários e pagina inicial <span className="text-green-500">Sincronizando questionários</span></li>
                       <li> - Bioimpedância <span className="text-green-500">Finalizado</span> </li>
                       <li> - Agenda com usuário de secretaria: <span className="text-green-500">Finalizado</span></li>
                       <li> - Divisão de Perfil do paciente <span className="text-green-500">Finalizado</span></li>
                        <li className="font-bold bg-green-500 text-gray-100 p-2"> - Usar o sistema enquanto carrega os arquivos no servidor afeta o funcionamento do seu software</li>   

                    </ul>
                </div>
                <div className="flex mt-6 md:mt-0">
                    <Modal/>
                    <Link href="#">
                    <button  className=" flex transition bg-purple-700 focus:outline-none duration-150 ease-in-out hover:bg-purple-500 rounded text-white px-6 py-4 text-lg font-bold"><FaCalendarAlt size={22} className="mr-2"/> Agenda</button>
                    </Link>
                </div>
                {/* Code block ends */}
            </div>
        </div>
        
        <div className="w-full sm:px-6">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-300 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-700">Pacientes</p>
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
                                <th className="font-normal text-left pl-12">Nascimento</th>
                               
                                
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

            <div>
            

        </div>

        

            
        
    </div>
    
    
    </>
  )
}

