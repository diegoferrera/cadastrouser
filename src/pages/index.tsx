import { FaGoogle } from "react-icons/fa";
import { Logo } from "../components/Header/Logo";
import { SignInButton } from "../components/SignInButton";

export default function Home() {
  return (
    <> 
           <div className="bg-gray-100 px-16 pb-16 pt-10 w-full min-h-screen">
           
              <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
                  <div className="text-color w-full md:w-1/3 pt-16 lg:pt-2 xl:pt-12">
                      <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-100 font-extrabold f-f-l">Faça seu login na plataforma</h1>
                     
                      <div className="lg:flex">
                      <button className="bg-gray-100 uppercase p-4 text-gray-500  h-14 text-sm flex items-center justify-center gap-2 rounded font-bold mt-4 hover:opacity-90 hover:text-gray-700">
                        <FaGoogle size={24}/>
                          Login com o Google</button>
                     
                      </div>
                  </div>
                  <h1 className="text-green-300 text-9xl w-full mt-8 md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0">ONCO<span className="font-bold">NUTRI</span></h1>
                 
              </div>
          </div>

          
          </>
  )
}
