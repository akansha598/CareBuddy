import express from 'express';
import { displayMyBookings, createBooking } from '../controllers/bookingController.js';
import { verifyToken } from '../middleware/auth.js';  

const router = express.Router();

router.get("/displayBookings", verifyToken, displayMyBookings);
router.post("/create", verifyToken, createBooking);  

export default router;
