import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoute.js';
import adminRoutes from './routes/adminRoute.js';
import bookingRoutes from './routes/bookingRoute.js';
import displayRoutes from './routes/displayRoute.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
        .then(()=>{ console.log("Database connected!!"); })
        .catch((err)=>{ console.log(err) }); 

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, ()=>{
    console.log('Server is running on port 3000!!');
});

app.get("/test",(req,res,next)=>{
    return res.send("Hello");
});

app.use("/api/user",userRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/booking",bookingRoutes);
app.use("/api/admin",displayRoutes);