import { useMutation, gql } from '@apollo/client';
import React, { useState, FormEvent } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from 'next/router'

const CREATE_SUBSCRIBER_MUTATION = gql`
mutation CreateSubscriber($name: String!, $email: String!, $telefone: String, $endereco: String, $convenio: String, $sexo: String, $datadenascimento: String) {
  createSubscriber(
    data: {name: $name, email: $email, telefone: $telefone, endereco: $endereco, convenio: $convenio, sexo: $sexo, datadenascimento: $datadenascimento}
  ) {
    id
  }
}
`

export default function Modal() {
  const router = useRouter()


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [datadenascimento, setDatanascimento] = useState('');
  const [convenio, setConvenio] = useState('');
  const [sexo, setSexo] = useState('');
  const [showModal, setShowModal] = React.useState(false);
  
  const [createSubscriber] = useMutation(CREATE_SUBSCRIBER_MUTATION)


  function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    createSubscriber({
      variables: {
        name,
        email,
        telefone,
        endereco,
        datadenascimento,
        convenio,
        sexo,
      }
    })

  }
  return (
    <>
    
      <button
        className="flex mr-3 bg-green-300 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-green-500 text-indigo-700 dark:text-gray-100 px-6 py-4 text-lg font-bold"
        type="button"
        onClick={() => setShowModal(true)}
      >
       <FaUserAlt size={22} className="mr-2"/> Novo Paciente
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
                <form onSubmit={handleSubscribe} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                <div className="flex flex-col">
                <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Nome Completo
                    </label>
                <input type="text" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500" placeholder="Nome completo" onChange={event => setName(event.target.value)}/>
                </div>
                <div className="flex flex-col">
                <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Telefone de contato
                    </label>
                <input type="text" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500" placeholder="Telefone"onChange={event => setTelefone(event.target.value)}/>
                </div>
                <div className="flex flex-col">
                <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Email
                    </label>
                <input type="email" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500" placeholder="Email"onChange={event => setEmail(event.target.value)}/>
                </div>
                <div className="flex flex-col">
                <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Data de nascimento
                    </label>
                <input type="Date" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500" placeholder="Data de Nascimento"onChange={event => setDatanascimento(event.target.value)}/>
                </div>
                <div className="flex flex-col">
                <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Endereço
                    </label>
                <input type="text" className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500" placeholder="Endereço"onChange={event => setEndereco(event.target.value)}/>
                </div>
                <div className="flex flex-col">
                <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Convenio
                    </label>
                <select id="sexo" name="sexo" autoComplete="country-name"
                className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500" onChange={event => setConvenio(event.target.value)}>
                        <option>Particular</option>
                        <option>Iapep</option>
                        <option>Unimed</option>
                       
                      </select>
                      </div>
                      <div className="flex flex-col">
                      <label htmlFor="text" className="text-gray-800 dark:text-green-500 text-sm font-bold leading-tight tracking-normal mb-2">
                    Sexo
                    </label>
                <select id="sexo" name="sexo" autoComplete="country-name"
                className="bg-gray-300 rounded border border-gray-400 px5 h-14 text-gray-500" onChange={event => setSexo(event.target.value)}>
                        <option>Masculilo</option>
                        <option>Feminino</option>
                       
                      </select>
                      </div>
                
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
                    type="submit"
                    
                  >
                    Salvar
                  </button>
                  
                </div>
                </form>
                </div>
                {/*footer*/}
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}