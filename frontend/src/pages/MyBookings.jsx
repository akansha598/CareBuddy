import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function MyBookings() {
  const [bookings, setBookings] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const { currentUser } = useSelector((state) => state.user);
  //console.log(currentUser);

  useEffect(() => {
    const loadBookings = async () => {
      if (!currentUser?.email) return;
  
      try {
        //console.log(currentUser.email);
        const response = await fetch(`/api/display/bookings?userEmail=${currentUser.email}`);

        const data = await response.json();
        console.log(data);
  
        if (response.ok) {
          setBookings(data.bookings || []); 
        } else {
          console.error('Response error:', data.error || response.status);
          setError(data.error || 'Failed to fetch bookings');
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


  return (
    <div>
      <h1>My Bookings</h1>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              <p>
                <strong>Booking ID:</strong> {booking._id}
              </p>
              <p>
                <strong>Babysitter Email:</strong> {booking.professionEmail}
              </p>
              <p>
                <strong>Address:</strong> {booking.userAddress}
              </p>
              <p>
                <strong>Status:</strong> {booking.status}
              </p>
              <p>
                <strong>From:</strong> {new Date(booking.dateFrom).toLocaleDateString()}
              </p>
              <p>
                <strong>To:</strong> {new Date(booking.dateTo).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
}

export default MyBookings;