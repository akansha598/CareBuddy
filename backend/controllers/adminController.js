import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Admin from "../models/adminModel.js";
import User from "../models/userModel.js"; 

export const getAllAdmins = async (req, res, next) => {};

export const signupAdmin = async (req, res, next) => {
    const { name, email, age, gender, phone, charge, profession, password } = req.body;

    if (!name || !email || !age || !gender || !profession || !password) {
        return res.status(400).json('All fields are required!');
    }

    // Generate random profile picture URL based on gender
    let profilePic;
    try {
        const apiUrl = `https://randomuser.me/api/?gender=${gender.toLowerCase()}`;
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            profilePic = data.results[0].picture.large;
        } else {
            throw new Error('Failed to fetch profile picture');
        }
    } catch (error) {
        console.error('Error fetching profile picture:', error);
        profilePic = "https://imgcdn.stablediffusionweb.com/2024/6/12/4d688bcf-f53b-42b6-a98d-3254619f3b58.jpg"; // fallback default
    }

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create new admin and user instances
    const newAdmin = new Admin({
        name,
        email,
        age,
        gender,
        phone,
        charge,
        profession,
        password: hashedPassword,
        profilePic
    });

    const newUser = new User({
        name,
        email,
        password: hashedPassword
    });

    try {
        // Save admin and user
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

