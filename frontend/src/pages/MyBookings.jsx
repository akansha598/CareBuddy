import { faStar } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { currentUser } = useSelector((state) => state.user);
  console.log("Current User:", currentUser);

  useEffect(() => {
    const loadBookings = async () => {
      if (!currentUser?.email) return;

      try {
        console.log("Fetching bookings for:", currentUser.email);
        const response = await fetch(`/api/user/getInfo?userEmail=${currentUser.email}`);
        const Booking = await response.json();
        console.log("API Response:", Booking);

        if (response.ok) {
          // Adjust based on actual response structure
          const bookingData = Array.isArray(Booking) ? Booking : [Booking];
          setBookings(bookingData);
        } else {
          console.error('Response error:', Booking.error || response.status);
          setError(Booking.error || 'Failed to fetch bookings');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Something went wrong while fetching bookings.');
      } finally {
        setLoading(false);
      }
    };

    loadBookings();
  }, [currentUser?.email]);

  useEffect(() => {
    console.log("Updated Bookings:", bookings);
  }, [bookings]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (bookings.length === 0) {
    return <div className="text-center">No bookings found.</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="w-[1000px] items-center m-10">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="w-full card p-5 border border-gray-300 rounded-lg bg-slate-100 mb-5"
          >
            <div className="flex flex-row justify-between items-start">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-5">Booking Details</h2>
                <div className="flex flex-col justify-start items-start mb-5">
                  <p>
                    <strong> Name:</strong> {booking.name}
                  </p>
                  <p>
                    <strong>Profession Email:</strong> {booking.email}
                  </p>
                  <p>
                    <strong>Charge:</strong> {booking.charge}
                  </p>
                  <p>
                    <strong>Contact Number:</strong> {booking.phone}
                  </p>
                  <p>
                    <strong>Gender:</strong> {booking.gender === 'M' ? 'Male' : booking.gender === 'F' ? 'Female' : 'Other'}
                  </p>
                  <p>
                    <strong>Age:</strong> {booking.age}
                  </p>
                  <p>
                    <strong>Profession:</strong> {booking.profession}
                  </p>
                 <strong>
                 Rating:<span className="text-yellow-500">
                        {Array.from({ length: 5 }, (_, index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={index < booking.rating ? faStar : faStarEmpty}
                          />
                        ))}
                      </span>
                  </strong>
                      
                </div>
              </div>
              <div className="w-[200px] flex flex-col justify-between mr-10">
                <img
                  className="img-fluid rounded-start border rounded-lg"
                  style={{ height: '180px', width: '100%', objectFit: 'cover' }}
                  src={booking.profilePic}
                  alt="User"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;
