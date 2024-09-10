import React from "react";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg",
    title: "Aryan Kapoor",
    rating: 5.0,
    color: "care-taker",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "https://c.stocksy.com/a/4wV500/z9/1314404.jpg",
    title: "Rohan Mehta",
    rating: 4.5,
    color: "baby-sitter",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "https://www.indianbeauties.info/wp-content/uploads/2018/12/DRD2thZUMAAO0q8.jpg",
    title: "Riya Verma",
    rating: 4.7,
    color: "baby-sitter",
    aosDelay: "400",
  },
  {
    id: 4,
    img: "https://assets.gqindia.com/photos/5f9039547f0af5175e0fafbe/master/w_1280%2Cc_limit/Indian%252520women%252520businesswomen%252520Vinati%252520Saraf%252520Mutreja.jpg",
    title: "Mira Gupta",
    rating: 4.4,
    color: "Care-taker",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12 ml-20">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Our TOP RATED Attendants for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Helpers
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          We take pride in showcasing some of our most highly reviewed caregivers
          </p>
        </div>
        {/* Body section */}
        <div className="ml-5">
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card section */}
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="w-[250px] p-4 m-4 bg-white rounded-lg shadow-md text-center"
            >
              <img
                src={data.img}
                alt={data.title}
                className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
              />
              <div className="mt-4">
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-primary text-white py-2 px-5 rounded-md">
            View All
          </button>
        </div>
        </div>
        
        {/* View all button */}
        
      </div>
    </div>
  );
};

export default Products;
