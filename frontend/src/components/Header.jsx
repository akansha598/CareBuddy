import React from 'react';
import family from '../assets/family.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutSuccess } from '../redux/user/userSlice.js';
import { toast } from 'react-toastify';
import DarkMode from './DarkMode.jsx';

export default function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        return toast.error(data);
      }
      dispatch(signOutSuccess());
      toast.success(data);
      navigate('/sign-in');
    } catch (err) {
      return toast.error('Internet not connected!');
    }
  };

  const handleOrderPopup = () => {
    // Logic to handle the order popup
    console.log('Book Now button clicked');
  };

  return (
    <section className="flex items-center justify-between px-8 py-3 bg-white shadow-md">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={family} height={40} width={40} alt="logo" />
          <span className="text-[#6531e0] text-2xl font-extrabold">CareBuddy</span>
        </div>
      </Link>

      <ul className="flex gap-8 items-center">
        <Link to="/">
          <li className="font-bold hover:text-[#6531e0] text-lg">Home</li>
        </Link>
        <Link to="/about">
          <li className="font-bold hover:text-[#6531e0] text-lg">About</li>
        </Link>
        <Link to="/stories">
          <li className="font-bold hover:text-[#6531e0] text-lg">Stories</li>
        </Link>
        <Link to="/explore">
          <li className="font-bold hover:text-[#6531e0] text-lg">Explore</li>
        </Link>
        <Link to="/contact">
          <li className="font-bold hover:text-[#6531e0] text-lg">Contact Us</li>
        </Link>

        {currentUser ? (
          <button
            onClick={handleSignOut}
            className="text-white text-lg font-semibold outline rounded-xl p-1 px-4 bg-primary hover:text-primary hover:bg-white"
          >
            Sign out
          </button>
        ) : (
          <Link to="/sign-in">
            <button className="text-white text-lg font-semibold outline rounded-xl p-1 px-4 bg-primary hover:text-primary hover:bg-white">
              Sign In
            </button>
          </Link>
        )}
        
        <div>
          <DarkMode />
        </div>
        
      </ul>
    </section>
  );
}
