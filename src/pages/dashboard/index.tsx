
import { FaPlayCircle, FaHandPeace, FaUserAlt, FaCalendarAlt } from "react-icons/fa";
import { Header } from "../../components/Header";

export default function Dashboard() {
  return (
    <>
    <Header/>
    <div className="px-10 pt-2 pb-32">
      {/* Code block starts */}
      <div>
            {/* Code block starts */}
            <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4">
                <div>
                    <h4 className="text-4xl font-bold leading-tight text-gray-800 dark:text-orange-500">Olá, Socorro</h4>
                    <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-100 dark:text-gray-400 text-xl mt-3">
                        <li className="flex items-center mr-4">
                            <div className="mr-2">
                            <FaHandPeace size={24} color="#00B37E"/>
                            </div>
                            <span className="leading-tight pt-2">Confira suas consultas</span>
                        </li>
                       
                      
                       
                    </ul>
                </div>
                <div className="flex mt-6 md:mt-0">
                    <button className=" flex mr-3 bg-green-300 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-green-300 text-indigo-700 dark:text-gray-100 px-6 py-4 text-lg font-bold"> <FaUserAlt size={22} className="mr-2"/> Novo Paciente</button>
                    <button  className=" flex transition bg-purple-500 focus:outline-none duration-150 ease-in-out hover:bg-purple-700 rounded text-white px-6 py-4 text-lg font-bold"><FaCalendarAlt size={22} className="mr-2"/> Agenda</button>
                </div>
                {/* Code block ends */}
            </div>
        </div>
        <div className="container bg-blur mx-auto rounded-lg h-full">
            {/* Code block starts */}
            <div className="bg-white dark:bg-gray-800 py-8 flex sm:flex-row items-start sm:items-center justify-between px-5 sm:px-10 shadow">
                <div className="flex items-center  sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
                    
                    <div className="ml-2">
                        <h2 className="text-gray-800 dark:text-gray-100 text-2xl font-bold">Empreendedor</h2>
                        <p className="font-normal text-base text-gray-100 dark:text-gray-400 ">Aula 2</p>
                    </div>
                </div>
                <div>
                    <button className="font-bold flex dark:hover:text-green-300 dark:text-indigo-600 focus:outline-none transition duration-150 ease-in-out rounded text-indigo-600 px-6 py-2 text-lg ">CONTINUAR ASSISTINDO <FaPlayCircle className="pl-2" color="#f29400" size={28} /></button>

                </div>
            </div>
            {/* Code block ends */}
        </div>

        
    </div>
    </>
  )
}

