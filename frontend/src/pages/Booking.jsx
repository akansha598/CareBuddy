import React, { useState } from "react"; // Import useState
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { toast } from "react-toastify";

// BookingForm Component
function BookingForm() {
  const [formData, setFormData] = useState({
    professionEmail: "",
    userEmail: "",
    userAddress: "",
    dateFrom: "",
    dateTo: "",
    specialRequests: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the form data to send
    const bookingData = {
      professionEmail: formData.professionEmail,
      userEmail: formData.userEmail,
      userAddress: formData.userAddress,
      dateFrom: formData.dateFrom,
      dateTo: formData.dateTo,
      specialRequests: formData.specialRequests,
    };
  
    try {
      // Send a POST request to the booking API
      const response = await fetch("/api/booking/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData), // Send form data as JSON
      });
  
      if (!response.ok) {
        // If the response is not ok, handle error
        throw new Error("Booking creation failed");
      }
  
      const result = await response.json(); // Parse JSON response
      console.log("Booking created successfully:", result);
  
      // Optionally reset the form
      setFormData({
        professionEmail: "",
        userEmail: "",
        userAddress: "",
        dateFrom: "",
        dateTo: "",
        specialRequests: "",
      });
  
      // Optionally, show success message or redirect
      toast.success("Booking created successfully!");
      navigate('/payment');
  
    } catch (error) {
      console.error("Error:", error);
      toast.warning("Failed to create booking. Please try again.");
    }
  };
  

  return (
    <div className="mt-10 w-full card p-5 border border-gray-300 rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-5">Book This Professional</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700">Profession Email</label>
            <input
              type="email"
              name="professionEmail"
              value={formData.professionEmail}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">User Email</label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">User Address</label>
            <input
              type="text"
              name="userAddress"
              value={formData.userAddress}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date From</label>
            <input
              type="date"
              name="dateFrom"
              value={formData.dateFrom}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date To</label>
            <input
              type="date"
              name="dateTo"
              value={formData.dateTo}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="col-span-2 mb-4">
            <label className="block text-gray-700">Special Requests</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-primary text-white p-3 rounded-lg">
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
}

// BookingPage Component
function BookingPage() {
  const { state } = useLocation(); // Access the passed state
  const { person, profession } = state; // Destructure person and profession from state

  return (
    <div className="flex justify-center">
      <div className="w-[1000px] items-center m-10">
        <div className="w-full card p-5 border border-gray-300 rounded-lg bg-slate-100">
          {/* Flexbox to position text and image side by side */}
          <div className="flex flex-row justify-between items-start">
            {/* Left side: text content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-5">
                {person.name} ({profession === "babysitter" ? "Babysitter" : "Caretaker"})
              </h2>
              <div className="flex flex-col justify-start items-start mb-5">
                <p>Age: {person.age}</p>
                <p>Gender: {person.gender === "M" ? "Male" : "Female"}</p>
                <p>Charge: ${person.charge}</p>
                <p>Phone: {person.phone}</p>
                <p>Email: {person.email}</p>
                <p>
                  Rating:
                  <span className="text-yellow-500">
                    {Array.from({ length: 5 }, (_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={index < person.rating ? faStarSolid : faStarEmpty}
                      />
                    ))}
                  </span>
                </p>
              </div>
            </div>

            {/* Right side: Image */}
            <div className="w-[200px] flex flex-col justify-between mr-10">
              <img
                className="img-fluid rounded-start border rounded-lg"
                style={{ height: "180px", width: "100%", objectFit: "cover" }}
                src="https://passport-photo.online/images/cms/prepare_light_b364e3ec37.webp?quality=80&format=webp&width=1920"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <BookingForm />
      </div>
    </div>
  );
}

export default BookingPage;
