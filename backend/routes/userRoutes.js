import { Router } from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";
import {Patient} from "../models/Patient.model.js";
import {PantryStaff} from "../models/Pantrystaff.model.js";
import {Delivery} from "../models/Deliveries.model.js";
const router = Router();
//only manager can access this route
router.route('/manager').get(verifyToken, authorizeRoles("Manager"), async (req, res) => {
    try {
        // Fetch data from the database
        const patients = await Patient.find(); // Patient is your model for patient data
        const staff = await PantryStaff.find(); // Staff is your model for staff data

        res.json({
            message: "Welcome Manager",
            data: {
                patients,
                staff
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching data",
            error: error.message
        });
    }
});


//both manager and pantry can access this route
router.route('/pantry').get(verifyToken, authorizeRoles("Manager", "Pantry"), async (req, res) => {
    try {
        // Fetch pantry-related data from the database
        const pantryData = await Pantry.find(); // Assuming Pantry is your model for pantry-related data

        res.json({
            message: "Welcome Pantry",
            data: pantryData
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching pantry data",
            error: error.message
        });
    }
});



//all can access this route
router.route('/delivery').get(verifyToken, authorizeRoles("Manager", "Pantry", "Delivery"), async (req, res) => {
    try {
        // Fetch delivery-related data from the database
        const deliveryData = await Delivery.find(); // Assuming Delivery is your model for delivery-related data

        res.json({
            message: "Welcome Delivery",
            data: deliveryData
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching delivery data",
            error: error.message
        });
    }
});


export const protectedRoutes = router;