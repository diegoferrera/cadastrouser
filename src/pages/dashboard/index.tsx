
import { useQuery, gql } from '@apollo/client';
import Link from "next/link";
import { useState } from "react";
import { FaHandPeace, FaUserAlt, FaCalendarAlt } from "react-icons/fa";
import { Subscriber } from '../../components/Dashboard';
import { Header } from "../../components/Header";
import Modal from "../../components/User/newpaciente";

const GET_SUBSCRIBERS_QUERY = gql`
query {
    subscribers(orderBy: createdAt_DESC, stage: DRAFT) {
    id
    name
    email
    telefone
    sexo
    datadenascimento
  }
}
`
interface GetSubscribersQueryResponse {
    subscribers: {
    id: string
    name: string
    email: string
    telefone: string
    sexo: string
    datadenascimento: string
       
    } []
}

export default function Dashboard () {
    const { data } = useQuery<GetSubscribersQueryResponse>(GET_SUBSCRIBERS_QUERY)
    
  return (
    <>
    <Header/>
    <div className="px-10 pt-2 pb-32">
      {/* Code block starts */}
      <div>
            {/* Code block starts */}
            <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4">
                <div>
                    <h4 className="text-4xl font-bold leading-tight text-orange-500">Olá, Socorro</h4>
                    <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-400 text-xl mt-3">
                        <li className="flex items-center mr-4">
                            <div className="mr-2">
                            <FaHandPeace size={24} color="#00B37E"/>
                            </div>
                            <span className="leading-tight pt-2">Confira suas consultas</span>
                        </li>
                       
                    </ul>
                    <h4 className="mt-4 text-lg bg-red-500 rounded text-gray-100 font-bold leading-tight text">Alerta do servidor, reconhecimento de arquivo de oncologia está sendo sincronizando.</h4>
                </div>
                <div className="flex mt-6 md:mt-0">
                    <Modal/>
                    <Link href="/agenda">
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
            <div className="container flex justify-center mx-auto pt-12">
                <div>
                    <p className="xl:text-5xl text-2xl text-gray-500 text-center font-black pb-3">Relatório</p>
                   
                </div>

            </div>

        </div>

        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="rounded flex bg-gray-300 flex-col justify-start items-start p-8 border-green-300 border-l-8 ">
            <div>
          
          </div>
            <div className="md:mt-3">
            <p className="text-gray-400  lg:text-2xl text-2xl font-extrabold leading-9">Quantidade de atendimentos</p>
            </div>
            <div className="md:mt-3">
            <p className="lg:text-base text-sm leading-normal text-gray-600">Carregando...</p>


            </div>
           
            
            </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="rounded flex bg-gray-300 flex-col justify-start items-start p-8 border-green-300 border-l-8 ">
            <div>
          
          </div>
            <div className="md:mt-3">
            <p className="text-gray-400  lg:text-2xl text-2xl font-extrabold leading-9">Total de atendimento do mês</p>
            </div>
            <div className="md:mt-3">
            <p className="lg:text-base text-sm leading-normal text-gray-600">Carregando...</p>


            </div>
           
            
            </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="rounded flex bg-gray-300 flex-col justify-start items-start p-8 border-green-300 border-l-8 ">
            <div>
          
          </div>
            <div className="md:mt-3">
            <p className="text-gray-400  lg:text-2xl text-2xl font-extrabold leading-9">Pacientes sob intervenção nutricional</p>
            </div>
            <div className="md:mt-3">
            <p className="lg:text-base text-sm leading-normal text-gray-600">Carregando...</p>


            </div>
           
            
            </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="rounded flex bg-gray-300 flex-col justify-start items-start p-8 border-green-300 border-l-8 ">
            <div>
          
          </div>
            <div className="md:mt-3">
            <p className="text-gray-400  lg:text-2xl text-2xl font-extrabold leading-9">Quantidade pacientes Eutróficos</p>
            </div>
            <div className="md:mt-3">
            <p className="lg:text-base text-sm leading-normal text-gray-600">Carregando...</p>


            </div>
           
            
            </div>
                </div>
            </div>
    
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="rounded flex bg-gray-300 flex-col justify-start items-start p-8 border-green-300 border-l-8 ">
            <div>
          
          </div>
            <div className="md:mt-3">
            <p className="text-gray-400  lg:text-2xl text-2xl font-extrabold leading-9">Quant. pacientes Risco de Desnutrição</p>
            </div>
            <div className="md:mt-3">
            <p className="lg:text-base text-sm leading-normal text-gray-600">Carregando...</p>


            </div>
           
            
            </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="rounded flex bg-gray-300 flex-col justify-start items-start p-8 border-green-300 border-l-8 ">
            <div>
          
          </div>
            <div className="md:mt-3">
            <p className="text-gray-400  lg:text-2xl text-2xl font-extrabold leading-9">Quantidade paciente desnutridos</p>
            </div>
            <div className="md:mt-3">
            <p className="lg:text-base text-sm leading-normal text-gray-600">Carregando...</p>


            </div>
           
            
            </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="rounded flex bg-gray-300 flex-col justify-start items-start p-8 border-green-300 border-l-8 ">
            <div>
          
          </div>
            <div className="md:mt-3">
            <p className="text-gray-400  lg:text-2xl text-2xl font-extrabold leading-9">Quantidade paciente desnutridos</p>
            </div>
            <div className="md:mt-3">
            <p className="lg:text-base text-sm leading-normal text-gray-600">Carregando...</p>


            </div>
           
            
            </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded">
                <div className="rounded flex bg-gray-300 flex-col justify-start items-start p-8 border-green-300 border-l-8 ">
            <div>
          
          </div>
            <div className="md:mt-3">
            <p className="text-gray-400  lg:text-2xl text-2xl font-extrabold leading-9">Quantidade paciente Sarcopênicos</p>
            </div>
            <div className="md:mt-3">
            <p className="lg:text-base text-sm leading-normal text-gray-600">Carregando...</p>


            </div>
           
            
            </div>
                </div>
            </div>

            
        
    </div>
    
    
    </>
  )
}

