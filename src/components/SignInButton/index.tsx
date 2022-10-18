import { FaGoogle } from 'react-icons/fa'

import { signIn, signOut, useSession } from 'next-auth/react'

export function SignInButton () {
  const {data: session} = useSession(); 

    console.log(session);

  return session ? (
    <button className="bg-orange-500 uppercase p-4 text-gray-100  h-14 text-sm flex items-center justify-center gap-2 rounded font-bold mt-4 hover:opacity-90 hover:text-gray-700"
    onClick={() => signOut()}
    >
    <FaGoogle size={24}/>
      {session.user.name}
    </button>
    
  ) :( 
  <button
  className="bg-orange-500 uppercase p-4 text-gray-100  h-14 text-sm flex items-center justify-center gap-2 rounded font-bold mt-4 hover:opacity-90 hover:text-gray-700"
  onClick={() => signIn('google')}
  >
  <FaGoogle size={24}/>
  Login com o Google</button> );
}