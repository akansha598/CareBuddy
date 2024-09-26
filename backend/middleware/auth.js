import jwt from 'jsonwebtoken';
import User from "../models/userModel.js";

// export const verifyToken = async (req, res, next) => {
//     try {
//         //console.log("abc");
//         const token = req.cookies.access_token;  
//         console.log(token);
//         if (!token) {
//             return res.status(401).json('Access Denied: No Token Provided!');
//         }

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);  

//         const validUser = await User.findById(decoded.id);  
//         if (!validUser) {
//             return res.status(404).json('User not found!');
//         }

//         req.user = validUser; 
//         next(); 
//     } 
//     catch (err) {
//         res.status(403).json('Invalid Token!');
//     }
// };
export const verifyToken = async (req, res, next) => {
    try {
        console.log(req.user);
        console.log("Cookies:", req.cookies);  
        const token = req.cookies.access_token;  
        console.log("Token:", token);  

        if (!token) {
            return res.status(401).json('Access Denied: No Token Provided!');
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);  

        const validUser = await User.findById(decoded.id);  
        if (!validUser) {
            return res.status(404).json('User not found!');
        }

        req.user = validUser; 
        next(); 
    } 
    catch (err) {
        res.status(403).json('Invalid Token!');
    }
};
