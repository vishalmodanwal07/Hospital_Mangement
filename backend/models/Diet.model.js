import mongoose from "mongoose";

const DietSchema =new mongoose.Schema({
    patientId :{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Patient',
        required: true, 
    },
    name: {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Patient',
        required : true,
    } ,
    morning: {
        meal: {
             type: String,
             },
        ingredients: [String],
        specialInstructions: { type: String },
    },
    evening: {
        meal: { type: String },
        ingredients: [String],
        specialInstructions: { type: String },
    },
    night: {
        meal: { type: String },
        ingredients: [String],
        specialInstructions: { type: String },
    },
} , {timestamps: true});

export const Diet = mongoose.model('Diet' , DietSchema);