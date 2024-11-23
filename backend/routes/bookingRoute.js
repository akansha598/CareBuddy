import express from 'express';
import {  createBooking } from '../controllers/bookingController.js';
import { verifyToken } from '../middleware/auth.js';  

const router = express.Router();

router.post("/create", verifyToken, createBooking);  

export default router;
