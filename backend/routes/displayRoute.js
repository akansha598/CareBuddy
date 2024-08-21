import express from 'express';
import {displayCaretakers, displayBabysitters} from '../controllers/displayController.js';

const router=express.Router();

router.get("/caretaker",displayCaretakers);
router.get("/babysitter",displayBabysitters);

export default router;  