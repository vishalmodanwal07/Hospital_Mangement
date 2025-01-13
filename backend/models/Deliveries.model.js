import mongoose from "mongoose";

const DeliverySchema = new mongoose.Schema({
    dietPlanId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'DietPlan',
    },
    assignedTo :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'PantryStaff'
    },
    deliveryStatus : {
        type : String,
        enum : ['pending', 'delivered'],
    },
    deliveryTimestamp :{
        type : Date
    },
    notes : {
        type : String
    }
} , {timestamps: true});

export const Delivery = mongoose.model('Delivery', DeliverySchema);