import Admin from "../models/adminModel.js";

export const displayCaretakers = async (req, res) => {
    try {
        const caretakers = await Admin.find({ profession: 'caretaker' }).exec();
        res.status(200).json({
            success: true,
            data: caretakers
        });
    } 
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving caretakers!',
            error: err.message
        });
    }
}

export const displayBabysitters = async (req, res) => {
    try {
        const babysitters = await Admin.find({ profession: 'babysitter' }).exec();
        res.status(200).json({
            success: true,
            data: babysitters
        });
    } 
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving babysitters',
            error: err.message
        });
    }
};