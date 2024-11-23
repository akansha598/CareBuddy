import express from 'express';
import {getAllUsers, signup, signin, signout, getUserInfo} from '../controllers/userController.js';

const router=express.Router();

router.get("/",getAllUsers);
router.post("/signup",signup);
router.post("/signin",signin);
router.post("/signout",signout);
router.get("/getInfo",getUserInfo);

export default router;  