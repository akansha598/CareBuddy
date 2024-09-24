import { Link, useNavigate } from 'react-router-dom';
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const BannerImg = {
  backgroundImage: "url('https://t4.ftcdn.net/jpg/05/00/76/75/360_F_500767502_AdezwSUsyb04l79RpV6zubKulRnIHpd0.jpg')",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

function Explore() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const { currentUser } = useSelector((state) => state.user);
  const [babysitters, setBabysitters] = useState([]);
  const [caretakers, setCaretakers] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("/api/display/babysitter", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const babysitterData = await response.json();
      console.log('babysitter:', babysitterData);

      setBabysitters(babysitterData.data);

    } catch (error) {
      console.error('Failed to fetch:', error);
    }
  };

  const loadData1 = async () => {
    try {
      let response = await fetch("/api/display/caretaker", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const caretakerData = await response.json();
      console.log('caretaker:', caretakerData);

      setCaretakers(caretakerData.data);

    } catch (error) {
      console.error('Failed to fetch:', error);
    }
  };

  useEffect(() => {
    loadData();
    loadData1();
  }, []);

  return (
    <div className='flex flex-col justify-start items-center mt-3'>
      <div className=' w-full '>
        <h2 style={BannerImg} className="text-4xl font-bold flex flex-col items-center mt-3 text-white border-gray-300 rounded-lg bg-black p-2 m-2" data-aos="zoom-in">
          Baby-Sitters
        </h2>
        <div className="flex flex-row flex-wrap justify-start m-5">
          {babysitters.map((data) => (
            <div className="w-[450px] card m-3 p-3 border border-gray-300 rounded-lg bg-slate-100 flex" key={data._id}>
              <div className="flex flex-row">
                {/* Image on the left */}
                <div className=" w-[150px] m-3">
                  <img
                    className=" img-fluid rounded-start border rounded-lg"
                    style={{ height: "180px", width: "100%", objectFit: "cover" }}
                    src="https://passport-photo.online/images/cms/prepare_light_b364e3ec37.webp?quality=80&format=webp&width=1920"
                    alt="Card image cap"
                  />
                </div>

                {/* Details on the right */}
                <div className="w-2/3 flex flex-col justify-between p-2 m-3">
                  <div className="card-body">
                    <h5 className="card-title text-2xl font-bold">{data.name}</h5>
                    <p className="card-text text-gray-600">
                      Age: {data.age} <br />
                      Gender: {data.gender === 'M' ? 'Male' : 'Female'} <br />
                      Charge: ${data.charge} <br />
                      Phone-no.: {data.phone} <br />
                      Email: {data.email} <br />
                      Rating:
                      <span className="text-yellow-500">
                        {Array.from({ length: 5 }, (_, index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={index < data.rating ? faStar : faStarEmpty}
                          />
                        ))}
                      </span>
                    </p>
                  </div>

                  {/* Button at the bottom */}
                  <div className='flex justify-end items-end mt-5'>
                    {currentUser ? (
                      <button
                        className="text-white text-lg font-semibold outline rounded-xl p-1 px-4 bg-primary hover:text-primary hover:bg-white"
                      >
                        Book Now
                      </button>
                    ) : (
                      <Link to="/sign-in">
                        <button
                          className="text-white text-lg font-semibold outline rounded-xl p-1 px-4 bg-primary hover:text-primary hover:bg-white"
                        >
                          View details
                        </button>
                      </Link>

                    )}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className=' w-full'>
      <h2 style={BannerImg} className="text-4xl font-bold flex flex-col items-center mt-3 text-white border-gray-300 rounded-lg bg-black p-2 m-2" data-aos="zoom-in">
          Care-Takers
        </h2>
        <div className="flex flex-row flex-wrap justify-start m-5">
          {caretakers.map((data) => (
            <div className="w-[450px] card m-3 p-3 border border-gray-300 rounded-lg bg-slate-100 flex" key={data._id}>
              <div className="flex flex-row">
                {/* Image on the left */}
                <div className="w-[150px] m-3">
                  <img
                    className="img-fluid rounded-start border rounded-lg"
                    style={{ height: "180px", width: "100%", objectFit: "cover" }}
                    src="https://passport-photo.online/images/cms/prepare_light_b364e3ec37.webp?quality=80&format=webp&width=1920"
                    alt="Card image cap"
                  />
                </div>

                {/* Details on the right */}
                <div className="w-2/3 flex flex-col justify-between p-2 m-3">
                  <div className="card-body">
                    <h5 className="card-title text-2xl font-bold">{data.name}</h5>
                    <p className="card-text text-gray-600">
                      Age: {data.age} <br />
                      Gender: {data.gender === 'M' ? 'Male' : 'Female'} <br />
                      Charge: ${data.charge} <br />
                      Phone-no.: {data.phone} <br />
                      Email: {data.email} <br />
                      Rating:
                      <span className="text-yellow-500">
                        {Array.from({ length: 5 }, (_, index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={index < data.rating ? faStar : faStarEmpty}
                          />
                        ))}
                      </span>
                    </p>
                  </div>

                  {/* Button at the bottom */}
                  <div className='flex justify-end items-end mt-5'>
                    {currentUser ? (
                      <button
                        className="text-white text-lg font-semibold outline rounded-xl p-1 px-4 bg-primary hover:text-primary hover:bg-white"
                      >
                        Book Now
                      </button>
                    ) : (
                      <Link to="/sign-in">
                        <button
                          className="text-white text-lg font-semibold outline rounded-xl p-1 px-4 bg-primary hover:text-primary hover:bg-white"
                        >
                          View details
                        </button>
                      </Link>

                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
