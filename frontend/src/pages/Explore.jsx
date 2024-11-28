import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; 
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons"; 


function Explore() {
  const { currentUser } = useSelector((state) => state.user);
  const [babysitters, setBabysitters] = useState([]);
  const [caretakers, setCaretakers] = useState([]);
  const navigate = useNavigate();
  const defaultRating = 3;

  const loadBabysittersData = async () => {
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
      console.error('Failed to fetch babysitters:', error);
    }
  };

  // Function to load caretakers data from API
  const loadCaretakersData = async () => {
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
      console.error('Failed to fetch caretakers:', error);
    }
  };

  // useEffect to load both babysitter and caretaker data when the component mounts
  useEffect(() => {
    loadBabysittersData();
    loadCaretakersData();
  }, []);

  const handleBooking = (person, profession) => {
    navigate("/booking", { state: { person, profession } });
  };

  return (
    <div className="flex flex-col justify-start items-center mt-3">
      <div className="w-full">
        <h2 className="text-4xl font-bold flex flex-col items-center mt-3 text-white bg-black p-2 m-2">
          Baby-Sitters
        </h2>
        <div className="flex flex-row flex-wrap justify-start m-5">
          {babysitters.map((data) => (
            <div className="w-[430px] card m-3 p-3 border border-gray-300 rounded-lg bg-slate-100 flex" key={data.id}>
              <div className="flex flex-row">
                <div className="w-[150px] m-3">
                  <img
                    className="img-fluid rounded-start border rounded-lg"
                    style={{ height: "180px", width: "100%", objectFit: "cover" }}
                    src={data.profilePic}
                    alt="Card image cap"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-between p-2 m-3">
                  <div className="card-body">
                    <h5 className="card-title text-2xl font-bold">{data.name}</h5>
                    <p className="card-text text-gray-600">
                      Age: {data.age} <br />
                      Gender: {data.gender === 'M' ? 'Male' : 'Female'} <br />
                      Charge: ${data.charge} <br />
                      Phone: {data.phone} <br />
                      Email: {data.email} <br />
                      Rating:
                      <span className="text-yellow-500">
                        {Array.from({ length: 5 }, (_, index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={index < defaultRating ? faStar : faStarEmpty} 
                          />
                        ))}
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-end items-end mt-5">
                    {currentUser ? (
                      <button
                        onClick={() => handleBooking(data, "babysitter")}
                        className="text-white text-lg font-semibold outline rounded-xl p-1 px-4 bg-primary hover:text-primary hover:bg-white"
                      >
                        Book Now
                      </button>
                    ) : (
                      <Link to="/sign-in">
                        <button
                          className="text-white text-lg font-semibold outline rounded-xl p-1 px-4 bg-primary hover:text-primary hover:bg-white"
                        >
                          View Details
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

      <div className="w-full">
        <h2 className="text-4xl font-bold flex flex-col items-center mt-3 text-white bg-black p-2 m-2">
          Care-Takers
        </h2>
        <div className="flex justify-end items-end mt-5 mr-5">
          {currentUser ? (
            <Link to="/indexMl">
              <button
                className="text-white text-lg font-semibold outline rounded-xl p-1 px-4 bg-primary hover:text-primary hover:bg-white"
              >
                Get the best Suggestions!
              </button>
            </Link>
          ) : (
            <Link to="/sign-in">
              <button
                className="text-white text-lg font-semibold outline rounded-xl p-1 px-4 bg-primary hover:text-primary hover:bg-white"
              >
                View Details
              </button>
            </Link>
          )}
        </div>
        <div className="flex flex-row flex-wrap justify-start m-5">
          {caretakers.map((data) => (
            <div className="w-[430px] card m-3 p-3 border border-gray-300 rounded-lg bg-slate-100 flex" key={data.id}>
              <div className="flex flex-row">
                <div className="w-[150px] m-3">
                  <img
                    className="img-fluid rounded-start border rounded-lg"
                    style={{ height: "180px", width: "100%", objectFit: "cover" }}
                    src={data.profilePic}
                    alt="Card image cap"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-between p-2 m-3">
                  <div className="card-body">
                    <h5 className="card-title text-2xl font-bold">{data.name}</h5>
                    <p className="card-text text-gray-600">
                      Age: {data.age} <br />
                      Gender: {data.gender === 'M' ? 'Male' : 'Female'} <br />
                      Charge: ${data.charge} <br />
                      Phone: {data.phone} <br />
                      Email: {data.email} <br />
                      Rating:
                      <span className="text-yellow-500">
                        {Array.from({ length: 5 }, (_, index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={index < defaultRating ? faStar : faStarEmpty} // Check if filled or empty star
                          />
                        ))}
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-end items-end mt-5">
                    {currentUser ? (
                      <button
                        onClick={() => handleBooking(data, "caretaker")}
                        className="text-white text-lg font-semibold outline rounded-xl p-1 px-4 bg-primary hover:text-primary hover:bg-white"
                      >
                        Book Now
                      </button>
                    ) : (
                      <Link to="/sign-in">
                        <button
                          className="text-white text-lg font-semibold outline rounded-xl p-1 px-4 bg-primary hover:text-primary hover:bg-white"
                        >
                          View Details
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