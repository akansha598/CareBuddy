import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import AOS from "aos";
import "aos/dist/aos.css";
import Subscribe from '../components/Subscribe';
import Testimonials from '../components/Testimonials';

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
      <Hero />
      <Products />
      <Subscribe />
      <Testimonials />
    </div>
  );
}
