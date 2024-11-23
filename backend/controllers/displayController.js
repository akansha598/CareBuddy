import Admin from "../models/adminModel.js";
import Booking from "../models/bookingModel.js";

export const displayAdmins =async(req,res)=>{
    try {
        const admins = await Admin.find();
        res.status(200).json({
            success: true,
            data: admins
        });
    } 
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving admins!',
            error: err.message
        });
    }
}

export const displayCaretakers = async (req, res) => {
    try {
        const caretakers = await Admin.find({ profession: 'caretaker' }).exec();
        res.status(200).json({
            success: true,
            data: caretakers
        });
    } 
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving caretakers!',
            error: err.message
        });
    }
}

export const displayBabysitters = async (req, res) => {
    try {
        const babysitters = await Admin.find({ profession: 'babysitter' }).exec();
        res.status(200).json({
            success: true,
            data: babysitters
        });
    } 
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving babysitters',
            error: err.message
        });
    }
};

export const displayUserBookings = async (req, res) => {
    //console.log(req.query.userEmail);
    const email=req.query.userEmail;

  if (!email) {
    return res.status(400).json({ error: 'Email query parameter is required!' });
  }
  try {
    const bookings = await Booking.find({ userEmail: email });
    if (bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this email!' });
    }
    res.status(200).json(bookings);
  } catch (err) {
    console.error('Error retrieving user bookings:', err);
    res.status(500).json({ error: 'Internal server error!' });
  }
}