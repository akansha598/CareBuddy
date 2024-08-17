import User from "../Models/userModel.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

export const signin = async(req,res,next) =>{
    const {email,username,password}=req.body;
    if(!username || !email || !password || username==='' || password==='' || email==='')
    res.status(499)
        .json('All fields are required!');
    try{
        const validUser=await User.findOne({email});
        //console.log(validUser);
        if(!validUser)
        return res.status(404)
                  .json('User not found!');
        const validPassword=bcryptjs.compareSync(password,validUser.password);
        if(!validPassword)
        return res.status(401)
                  .json('Wrong credentials!');        
        const token=jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        //console.log(token);
        const {password:pass, ...rest}=validUser._doc;
        res.status(200)
           .cookie('access_token',token,{
            httpOnly:true,
           })
           .json(rest);
    }
    catch(err){
        res.status(401)
           .json('Signin Unsuccessfull!');
    }
}