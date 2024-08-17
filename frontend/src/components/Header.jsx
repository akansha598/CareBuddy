import React from 'react'
import family from '../assets/family.png';
import {Link, useNavigate} from 'react-router-dom';

export default function Header() {

  const currentUser= null;

  return (
    <section className='flex items-center justify-around border-gray-200 border-b py-3 full-screen-bg'>
      <Link to='/'>
        <div className='flex items-center gap-2'>
          <img src={family} height={40} width={40} alt="logo" />
          <span className='text-xl font-extrabold'>CareBuddy</span>
        </div>
      </Link>

      <ul className='flex gap-14 items-center'>
        <Link to='/'>
          <li className='hidden font-bold sm:inline hover:text-[#6531e0] text-lg'>Home</li>
        </Link>
        <Link to='/about'>
          <li className='hidden font-bold sm:inline hover:text-[#6531e0] text-lg'>About</li>
        </Link>
        <Link to='/about'>
          <li className='hidden font-bold sm:inline hover:text-[#6531e0] text-lg'>Stories</li>
        </Link>
        <Link to='/about'>
          <li className='hidden font-bold sm:inline hover:text-[#6531e0] text-lg'>Events</li>
        </Link>
        <Link to='/about'>
          <li className='hidden font-bold sm:inline hover:text-[#6531e0] text-lg'>Contact Us</li>
        </Link>
        {
          currentUser ? (
            <button onClick={handleSignOut} className='text-[#6531e0] text-lg outline rounded-xl p-1 px-4 pb-1 hover:text-white hover:bg-[#6531e0]'>Sign out</button>
          ) : (
            <Link to='/sign-in'>
              <button className='text-[#6531e0] text-lg font-semibold outline rounded-xl p-1 px-4 hover:text-white hover:bg-[#6531e0]'>Sign In</button>
            </Link>
          )
        }
      </ul>
    </section>
  )
}
