import express from 'express';
import {displayCaretakers, displayBabysitters} from '../controllers/displayController.js';

const router=express.Router();

router.get("/caretaker",displayCaretakers);
router.post("/babysitter",displayBabysitters);

export default router;  