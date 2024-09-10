import mongoose from 'mongoose';

const bookingSchema=new mongoose.Schema({
    professionEmail: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userAddress: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'ongoing', 'completed', 'cancelled'],
        default: 'pending'
    },
    dateFrom: {
        type: Date, 
        required: true 
    },
    dateTo: {
        type: Date, 
        required: true 
    },
    specialRequests: {
        type: String
    },
});

const Booking=mongoose.model('Booking',bookingSchema);

export default Booking;