import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    isInstitution:{
        type: Boolean,
        default: false
    },
    reg
});

const studentModel = mongoose.model('student', studentSchema);

export default studentModel;