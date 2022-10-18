import { FaChevronDown } from "react-icons/fa";


export function ButtonLogin () {
  return (
    <>
     <img className="rounded h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png" alt="logo" />
    <p className="text-gray-100 text-sm ml-2">Diego ferreira</p>
    <div className="sm:ml-2 text-white relative">
         <FaChevronDown color="#f29400" />
    </div>
    </>
  )
  
}