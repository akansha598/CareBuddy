import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [displayBookings, setDisplayBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const loadBookings = async () => {
      if (!currentUser?.email) return;

      try {
        const response = await fetch(`/api/display/bookings?userEmail=${currentUser.email}`);
        const data = await response.json();

        if (response.ok) {
          const bookingData = Array.isArray(data) ? data : [data];
          // Sort latest bookings first
          const sortedBookings = bookingData.sort(
            (a, b) => new Date(b.dateFrom) - new Date(a.dateFrom)
          );
          setBookings(sortedBookings);
        } else {
          setError(data.error || "Failed to fetch bookings");
        }
      } catch (err) {
        setError("Error fetching bookings");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadBookings();
  }, [currentUser?.email]);

  useEffect(() => {
    const fetchProfessionalBookings = async () => {
      if (!bookings.length) return;

      try {
        const professionEmails = bookings
          .map((booking) => booking.professionEmail)
          .filter(Boolean);

        const fetchPromises = professionEmails.map((email) =>
          fetch(`/api/user/getInfo?userEmail=${email}`).then((res) =>
            res.ok ? res.json() : Promise.reject(`Failed for ${email}`)
          )
        );

        const results = await Promise.all(fetchPromises);
        setDisplayBookings(results.flat());
      } catch (err) {
        setError("Error fetching professional bookings");
        console.error("Error:", err);
      }
    };

    fetchProfessionalBookings();
  }, [bookings]);

  const combinedBookings = bookings.map((booking, index) => {
    const displayBooking = displayBookings[index];
    return displayBooking ? { ...booking, ...displayBooking } : booking;
  });

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!combinedBookings.length) return <div className="text-center">No bookings found.</div>;

  return (
    <div className="flex justify-center">
      <div className="w-[1000px] items-center m-10">
        {combinedBookings.map((booking, index) => (
          <div
            key={booking._id || index}
            className="w-full card p-5 border border-gray-300 rounded-lg bg-slate-100 mb-5"
          >
            <div className="flex flex-row justify-between items-start">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-5">Booking Details</h2>
                <div className="flex flex-col justify-start items-start mb-5">
                  {booking.name && (
                    <>
                      <p><strong>Name:</strong> {booking.name}</p>
                      <p><strong>Charge:</strong> {booking.charge}</p>
                      <p><strong>Contact Number:</strong> {booking.phone}</p>
                      <p><strong>Email:</strong> {booking.email}</p>
                      <p>
                        <strong>Gender:</strong>{" "}
                        {booking.gender === "M" ? "Male" : booking.gender === "F" ? "Female" : "Other"}
                      </p>
                      <p><strong>Age:</strong> {booking.age}</p>
                      <p><strong>Profession:</strong> {booking.profession}</p>
                      <p>
                        <strong>Booking Dates:</strong>{" "}
                        {`From ${new Date(booking.dateFrom).toLocaleDateString()} to ${new Date(booking.dateTo).toLocaleDateString()}`}
                      </p>
                      <strong>
                        Rating:
                        <span className="text-yellow-500 ml-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <FontAwesomeIcon
                              key={i}
                              icon={i < 3 ? faStarSolid : faStarEmpty}
                            />
                          ))}
                        </span>
                      </strong>
                    </>
                  )}
                </div>
              </div>
              {booking.profilePic && (
                <div className="w-[200px] flex flex-col justify-between mr-10">
                  <img
                    className="img-fluid rounded-start border rounded-lg"
                    style={{ height: "270px", width: "100%", objectFit: "cover" }}
                    src={booking.profilePic}
                    alt="User"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;
