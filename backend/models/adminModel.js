import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: "https://imgcdn.stablediffusionweb.com/2024/6/12/4d688bcf-f53b-42b6-a98d-3254619f3b58.jpg"
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    charge: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['M', 'F'] 
    },
    profession: {
        type: String,
        required: true,
        enum: ['caretaker', 'babysitter'] 
    },
    rating: {
        type: Number,
        default: 0
    }
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
