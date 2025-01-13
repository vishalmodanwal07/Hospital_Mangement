import mongoose from "mongoose";

const PantrySchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    contactInfo :{
        type:String,
        required:true
    },
    role :{
        type:String,
        enum :['Preparation' , 'Delivery'],
        required:true
    },
    location:{ type:String,
               required:true
             },
})

export const PantryStaff = mongoose.model('pantryStaff',PantrySchema);