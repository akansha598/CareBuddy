import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Admin from "../models/adminModel.js";
import User from "../models/userModel.js"; 

export const getAllAdmins = async (req, res, next) => {};

export const signupAdmin = async (req, res, next) => {
    const { name, email, age, gender, profession, password } = req.body;

    if (!name || !email || !age || !gender || !profession || !password) {
        return res.status(400).json('All fields are required!');
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newAdmin = new Admin({
        name,
        email,
        age,
        gender,
        profession,
        password: hashedPassword
    });

    const newUser = new User({
        name,
        email,
        password: hashedPassword
    });

    try {
        await newAdmin.save();
        await newUser.save();
        res.status(201).json('Account created successfully!');
    } 
    catch (err) {
        console.error('Error creating account:', err);
        if (err.code && err.code === 11000) { 
            return res.status(409).json('User already exists!');
        }
        res.status(500).json('Server error!');
    }   
};
