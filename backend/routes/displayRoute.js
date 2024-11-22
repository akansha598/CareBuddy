import express from 'express';
import {displayCaretakers, displayBabysitters, displayAdmins, displayUserBookings} from '../controllers/displayController.js';

const router=express.Router();

router.get("/admins",displayAdmins);
router.get("/caretaker",displayCaretakers);
router.get("/babysitter",displayBabysitters);
router.get("/bookings",displayUserBookings);

export default router;  