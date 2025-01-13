import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username :{
        type: String,
        unique : true,
        required: true,
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['Manager', 'Pantry' , 'Delivery'],
        required : true
    }
} , {timestamps: true});

export const User = mongoose.model('User' , UserSchema);