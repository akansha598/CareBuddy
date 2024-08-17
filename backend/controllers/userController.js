import User from "../Models/userModel.js";
import bcryptjs from 'bcryptjs';

export const getAllUsers = async(req,res,next) =>{}

export const signup = async(req,res,next) =>{
    //console.log(req.body);
    const {name,email,username,password}=req.body;
    if(!name || !username || !email || !password || name==='' || username==='' || password==='' || email==='')
    res.status(499)
        .json('All fields are required!');
    const hashedPassword=bcryptjs.hashSync(password,10);
    const newUser=new User({
        name,
        email,
        username,        
        password:hashedPassword
    });
    try{
        await newUser.save();
        res.status(200)
           .json('Account created successfully!');
    }
    catch(err){
        res.status(402)
           .json('User already exists!');
    }
}