import { Delivery } from "../models/Deliveries.model.js";
import { Diet } from "../models/Diet.model.js";
import { PantryStaff } from "../models/Pantrystaff.model.js";
import { ApiError } from "../src/utils/ApiError.js";
import { ApiResponse } from "../src/utils/ApiResponce.js";


//create a new delivery task
export const createDelivery = async (req, res) => {
    const { dietPlanId, assignedTo, deliveryStatus, notes } = req.body;
    if(!dietPlanId || !assignedTo || !deliveryStatus ) {
        throw new ApiError(400, "Please provide required fields");
}
try {
    const dietPlan = await Diet.findById(dietPlanId);
    if(!dietPlan) {
        throw new ApiError(404, "Diet plan not found");
    }
    const staff = await PantryStaff.findById(assignedTo);
    if(!staff) {
        throw new ApiError(404, "Staff not found");
    }
     // Create a new delivery task
     const newDelivery = new Delivery({
        dietPlanId,
        assignedTo,
        deliveryStatus: deliveryStatus || 'pending',
        deliveryTimestamp: deliveryStatus === 'delivered' ? new Date() : null,
        notes,
      });
    await newDelivery.save();
    res
    .status(201)
    .json(new ApiResponse(201 , newDelivery , "Delivery task created successfully"));

} catch (error) {
    throw new ApiError(500 , error?.message || "Internal Server Error");
}
};

//get all delivery tasks
export const getAllDeliveries = async (req, res) => {
    try {
        const deliveries = await Delivery.find().populate('dietPlanId' , 'morning evening night ')
        .populate('assignedTo' , 'name contactInfo role');
        res
        .status(200)
        .json(new ApiResponse(200 , deliveries , "All delivery tasks retrieved successfully"));
    } catch (error) {
        throw new ApiError(500 , error?.message || "Internal");
    }
};

// Get a delivery task by ID
export const getDeliveryById = async (req, res) => {
    try {
      const delivery = await Delivery.findById(req.params.id)
        .populate('dietPlanId', 'morning evening night')
        .populate('assignedTo', 'name contactInfo role');
  
      if (!delivery) {
        throw new ApiError(404, "Delivery task not found");
      }
      res
      .status(200)
      .json(new ApiResponse(200, delivery, "Delivery task retrieved successfully"));
    } catch (error) {
      throw new ApiError(500, error?.message || "Internal Server Error");
    }
  };

  // Update delivery status
export const updateDeliveryStatus = async (req, res) => {
    const { deliveryStatus, notes } = req.body;
    if(!deliveryStatus){
        throw new ApiError(400, "Delivery status is required");
    }
    try {
      const delivery = await Delivery.findById(req.params.id);
  
      if (!delivery) {
        throw new ApiError(404, "Delivery task not found");
      }
  
      delivery.deliveryStatus = deliveryStatus || delivery.deliveryStatus;
      delivery.notes = notes || delivery.notes;
  
      if (deliveryStatus === 'delivered') {
        delivery.deliveryTimestamp = new Date();
      }
  
      await delivery.save();
      res
      .status(200)
      .json(new ApiResponse(200, delivery, "Delivery status updated successfully"));
    } catch (error) {
     throw new ApiError(500, error?.message || "Internal Server Error");
    }
  };

  // Delete a delivery task
export const deleteDelivery = async (req, res) => {
    try {
      const delivery = await Delivery.findByIdAndDelete(req.params.id);
  
      if (!delivery) {
        throw new ApiError(404, "Delivery task not found");
      }
  
      res
      .status(200)
      .json(new ApiResponse(200, delivery, "Delivery task deleted successfully"));
    } catch (error) {
     throw new ApiError(500, error?.message || "Internal Server Error");
    }
  };