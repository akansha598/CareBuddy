import express from 'express';
import {displayCaretakers, displayBabysitters, displayAdmins} from '../controllers/displayController.js';

const router=express.Router();

router.get("/admins",displayAdmins);
router.get("/caretaker",displayCaretakers);
router.get("/babysitter",displayBabysitters);

export default router;  