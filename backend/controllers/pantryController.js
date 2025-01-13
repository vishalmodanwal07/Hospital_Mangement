import {PantryStaff} from '../models/Pantrystaff.model.js';
import { ApiError } from '../src/utils/ApiError.js';
import { ApiResponse } from '../src/utils/ApiResponce.js';

//add a new staff member
export const addStaff = async (req, res) => {
    const {name , contactInfo , role ,location} = req.body;
    if(!name ||  !contactInfo || !role || !location){
        throw new ApiError(400, "Please fill all the fields");
    }
    try {
        const newStaff = new PantryStaff({
            name,
            contactInfo,
            role,
            location,
          });
          const staff = await newStaff.save();
          res
          .status(201)
          .json( new ApiResponse(200 , staff , "Staff member added successfully") );
    } catch (error) {
        throw new ApiError(500 , error?.message || "Internal Server Error");
    }
};

//get all staff members

export const getAllStaff = async (req, res) => {
    try {
        const staff = await PantryStaff.find();
        res
        .status(200)
        .json(new ApiResponse(200, staff, "Staff members retrieved successfully"));
    } catch (error) {
        throw new ApiError(500, error?.message || "Internal Server Error");
    }
};


//specific staff member details
export const getStaffById = async (req, res) => {
   try {
     const { id } = req.params.id;
     const staff = await PantryStaff.findById(id);
     res
     .status(200)
     .json(new ApiResponse(200, staff, "Staff member details retrieved successfully"));
   } catch (error) {
    throw new ApiError(500 , error?.message || "Internal Server Error");
   }

};


// Update pantry staff details
export const updateStaff = async (req, res) => {
    try {
      const updatedStaff = await PantryStaff.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedStaff) {
        throw new ApiError(404, "Staff member not found");
      }
      res
      .status(200)
      .json(new ApiResponse(200, updatedStaff, "Staff member updated successfully"));
  
     
    } catch (error) {
     throw new ApiError(500 , error?.message || "Internal Server Error");
    }
  };

  // Delete a pantry staff member
export const deleteStaff = async (req, res) => {
    try {
      const deletedStaff = await PantryStaff.findByIdAndDelete(req.params.id);
      if (!deletedStaff) {
        throw new ApiError(404, "Staff member not found");
      }
      res
      .status(200)
      .json(new ApiResponse(200, deletedStaff, "Staff member deleted successfully"));
    } catch (error) {
      throw new ApiError(500, error?.message || "Internal Server Error");
  };
};