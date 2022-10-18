import { FaChevronDown } from "react-icons/fa";
import Image from 'next/image'

export function ButtonLogin () {
  return (
    <>
     <div>
    
     <Image
      src="/bl_1.png"
      alt="Picture of the author"
      width={55}
      height={55}
    />
     </div>
    <p className="text-gray-100 text-sm ml-2">Socorro Coêlho</p>
    <div className="sm:ml-2 text-white relative">
         <FaChevronDown color="#f29400" />
    </div>
    </>
  )
  
}