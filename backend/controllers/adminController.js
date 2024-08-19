import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Admin from "../models/adminModel.js";

export const getAllAdmins = async(req,res,next) =>{}

export const signupAdmin = async(req,res,next) =>{
    //console.log(req.body);
    const {name,email,age,gender,profession,password}=req.body;
    if(!name || !email || !age || !gender || !profession || !password || name==='' || password==='' || email===''|| age==='' || gender==='' || profession==='')
    res.status(499)
        .json('All fields are required!');
    const hashedPassword=bcryptjs.hashSync(password,10);
    const newAdmin=new Admin({
        name,
        email,
        age,
        gender,
        profession,     
        password:hashedPassword
    });
    try{
        await newAdmin.save();
        res.status(200)
           .json('Account created successfully!');
    }
    catch(err){
        res.status(402)
           .json('User already exists!');
    }
}