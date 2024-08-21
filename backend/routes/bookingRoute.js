import express from 'express';
import {displayMyBookings} from '../controllers/bookingController.js';

const router=express.Router();

router.get("/displayBookings",displayMyBookings);
router.post("/create",createBooking);

export default router;  