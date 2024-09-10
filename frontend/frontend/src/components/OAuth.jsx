import React from 'react'
import {AiFillGoogleCircle} from 'react-icons/ai';

export default function OAuth() {

  const handleGoogleClick =()=>{}
  return (
    <button type='submit' onClick={handleGoogleClick} className='flex items-center justify-center bg-[#6531e0] text-white text-lg outline rounded-full p-2 px-5 hover:text-white hover:bg-[#6531e0]'>
      <AiFillGoogleCircle className='w-6 h-6 mr-2' />
      Continue with Google
    </button>       
  )
}
