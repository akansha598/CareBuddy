import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function MyBookings() {
  const [bookings, setBookings] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser.email);

  const loadBookings = async () => {
    try {
      const response = await fetch(`/api/display/bookings?email=${encodeURIComponent(currentUser.email)}`);
      const data = await response.json();

      if (response.ok) {
        setBookings(data.bookings || []); 
      } else {
        setError(data.error || 'Failed to fetch bookings');
      }
    } catch (err) {
      setError('Something went wrong while fetching bookings.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser?.email) {
      loadBookings();
    }
  }, [currentUser?.email]);

  if (loading) {
    return <p>Loading bookings...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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