import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import family from '../assets/family.png';

export default function SignUpAdmin() {
  const [role, setRole] = useState('');
  const [gender, setGender] = useState('');

  function handleChange(e) {
    console.log(e.target.value);
  }

  function handleRoleChange(e) {
    setRole(e.target.value);
  }


  function handleGenderSelect(selectedGender) {
    setGender(selectedGender);
  }

  return (
    <div >
      <div className='flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 '>
      <div className='w-full max-w-md mx-4 sm:mx-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg mt-5 mb-5'>
        <form className='flex flex-col gap-4'>
          <div className='flex items-center justify-center gap-2 pb-4'>
            <img src={family} height={60} width={60} alt="logo" />
            <span className='text-[#6531e0] text-3xl font-extrabold'>CareBuddy</span>
          </div>
          <input type="text" size={40} placeholder='Full Name' className='border border-slate-600 p-3 rounded-lg' id='name' onChange={handleChange} />
          <input type="email" placeholder='E-mail address' className='border border-slate-600 p-3 rounded-lg' id='email' onChange={handleChange} />
          <input type="password" placeholder='Password' className='border border-slate-600 p-3 rounded-lg' id='password' onChange={handleChange} />
          <input type="password" placeholder='Re-type Password' className='border border-slate-600 p-3 rounded-lg' id='pwd' onChange={handleChange} />
          <input type="number" placeholder='Enter your age' className='border border-slate-600 p-3 rounded-lg' id='age' onChange={handleChange} />
          <input type="number" placeholder='Experience' className='border border-slate-600 p-3 rounded-lg' id='experience' onChange={handleChange} />
          <input type="number" placeholder='Expected Salary' className='border border-slate-600 p-3 rounded-lg' id='salary' onChange={handleChange} />
          <input type="number" placeholder='Enter your Phone-no.' className='border border-slate-600 p-3 rounded-lg' id='phone-no' onChange={handleChange} />


          {/* Custom Gender Dropdown */}
          <div className="relative">
            <button
              className='border border-slate-600 p-3 rounded-lg w-full text-left'
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('gender-dropdown').classList.toggle('hidden');
              }}
            >
              {gender ? gender : 'Select Gender'}
            </button>
            <div id="gender-dropdown" className='absolute z-10 mt-1 bg-white border border-slate-600 rounded-lg w-full hidden'>
              <div
                className='p-2 hover:bg-primary cursor-pointer'
                onClick={() => handleGenderSelect('Male')}
              >
                Male
              </div>
              <div
                className='p-2 hover:bg-primary cursor-pointer'
                onClick={() => handleGenderSelect('Female')}
              >
                Female
              </div>
              <div
                className='p-2 hover:bg-primary cursor-pointer'
                onClick={() => handleGenderSelect('Other')}
              >
                Other
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-semibold'>Sign up as:</label>
            <div className='flex items-center gap-4'>
              <label>
                <input
                  type="radio"
                  value="Caretaker"
                  checked={role === 'Caretaker'}
                  onChange={handleRoleChange}
                  className='mr-2 '
                />
                Caretaker
              </label>
              <label>
                <input
                  type="radio"
                  value="Babysitter"
                  checked={role === 'Babysitter'}
                  onChange={handleRoleChange}
                  className='mr-2'
                />
                Babysitter
              </label>
            </div>
          </div>

          <div className='flex gap-4 items-center'>
            <input type="checkbox" id='privacy' />
            <label className='text-sm'>I would like to receive communications from<br /> CareBuddy according to the Privacy Policy.**</label>
          </div>
          <button type='submit' className='bg-[#6531e0] text-white text-lg outline rounded-full p-2 px-5 hover:text-white hover:bg-[#6531e0]'>Sign Up</button>
          <OAuth />
          <div className='flex flex-col items-center gap-2 mt-4'>
            <div className='flex gap-2 items-center'>
              <p className='text-slate-500 text-sm'>Already have an account?</p>
              <Link to='/sign-in'>
                <span className='text-[#6531e0] text-sm hover:underline'>Sign in</span>
              </Link>
            </div>
            <Link to='/sign-up'>
              <span className='text-[#6531e0] text-sm hover:underline'>Sign up as Customer</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
    
  );
}