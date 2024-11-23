import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import AOS from "aos";
import "aos/dist/aos.css";
import Subscribe from '../components/Subscribe';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Hero/>
      <Products/>
      <Subscribe/>
      <Testimonials/>
      <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/74a4beaa-b90d-4583-b003-a95cbabf0bdf">ChatBot</iframe>
    </div>
  )
}
