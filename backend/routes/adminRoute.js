import express from 'express';
import {getAllAdmins, signupAdmin} from '../controllers/adminController.js';

const router=express.Router();

router.get("/",getAllAdmins);
router.post("/signup",signupAdmin);

export default router;  