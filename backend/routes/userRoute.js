import express from 'express';
import { getAllUsers, signup} from '../Controllers/userController.js';
//import { loginValidator, signupValidator, validate } from '../Utils/validators.js';

const router=express.Router();

router.get("/",getAllUsers);
router.post("/signup",signup);
// router.post("/signin",signin);
// router.post("/signout",signout);
// router.post("/google",google);

export default router;  