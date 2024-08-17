import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SignUpAdmin from './pages/SignUpAdmin.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />          
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-up-admin' element={<SignUpAdmin />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}