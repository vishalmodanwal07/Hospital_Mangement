import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    } ,
    diseases :{
        type : [String],
        required : true
    },
    allergies : {
        type : [String],
        required : true
    },
    roomNumber :{
        type : Number,
        required : true
    },
    bedNumber :{
        type : Number,
        required : true
    },
    floorNumber :{
        type : Number,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        enum : ["Male" , "Female" , "Other"],
        required : true
    },
    contactInfo :{
        type : String,
        required : true
    },
    emergencyContact :{
        type : String,
        required : true
    },
    
} , {timestamps : true});


export const Patient = mongoose.model('Patient' , PatientSchema);