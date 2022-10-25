import React from "react";
import { FaUserAlt } from "react-icons/fa";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
    
      <button
        className="flex mr-3 bg-green-300 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-green-500 text-indigo-700 dark:text-gray-100 px-6 py-4 text-lg font-bold"
        type="button"
        onClick={() => setShowModal(true)}
      >
       <FaUserAlt size={22} className="mr-2"/> Nova Consulta
      </button>
      {showModal ? (
        <>
          <div
            className="bg-gray-400 bg-opacity-80 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="bg-gray-100 relative w-3/4 mx-20 max-w-full rounded">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex text-gray-500 items-start justify-between p-5 border-b border-solid border-gray-400 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  Cadastrar Paciente
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-gray-500 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-green-500 h-6 w-6 text-4xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                <form action="" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                <input type="text" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500" placeholder="Nome completo"/>
                <input type="text" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500" placeholder="Telefone 1"/>
                <input type="email" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500" placeholder="Email"/>
                <input type="text" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500" placeholder="Sexo"/>
                <input type="Date" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500" placeholder="Data de Nascimento"/>
                <input type="text" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500" placeholder="Endereço"/>
                <input type="text" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500" placeholder="Convênio"/>
                
                
                </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-green-300 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}