import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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
