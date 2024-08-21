import Booking from '../models/bookingModel.js';

export const createBooking = async (req, res) => {
    try {
        const { professionEmail, userEmail, userAddress, dateFrom, dateTo, specialRequests } = req.body;

        if (!professionEmail || !userEmail || !userAddress || !dateFrom || !dateTo) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const newBooking = new Booking({
            professionEmail,
            userEmail,
            userAddress,
            dateFrom,
            dateTo,
            specialRequests
        });

        await newBooking.save();
        res.status(201).json({ message: 'Booking created successfully!', booking: newBooking });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
};

export const displayMyBookings = async (req, res) => {
    try {
        const userEmail = req.user.email;
        const bookings = await Booking.find({ userEmail });
        res.status(200).json({ bookings });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
};