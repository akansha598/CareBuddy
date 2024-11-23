import Booking from '../models/bookingModel.js';

export const createBooking = async (req, res) => {
    try {
        //console.log("abc");
        const { professionEmail, userEmail, userAddress, dateFrom, dateTo, specialRequests } = req.body;

        if (!professionEmail || !userEmail || !userAddress || !dateFrom || !dateTo) {
            return res.status(400).json({ error: 'All fields are required!' });
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
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error!' });
    }
};


