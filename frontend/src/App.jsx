import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SignUpAdmin from './pages/SignUpAdmin.jsx';
import Explore from './pages/Explore.jsx';
import Contact from './pages/Contact.jsx';
import Booking from './pages/Booking.jsx';
import Payment from './pages/Payment.jsx';
import MyBookings from './pages/MyBookings.jsx';
import IndexMl from './pages/indexMl.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/explore" element={<Explore />} />          
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-up-admin' element={<SignUpAdmin />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/myBookings' element={<MyBookings />} />
          <Route path='/indexMl' element={<IndexMl/>} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}