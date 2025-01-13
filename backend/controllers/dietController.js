import {Diet} from "../models/Diet.model.js";
import { Patient } from "../models/Patient.model.js";
import { ApiError } from "../src/utils/ApiError.js";
import { ApiResponse } from "../src/utils/ApiResponce.js";
export const createDiet = async (req, res) => {
    const { patientId, morning, evening, night } = req.body;
    const patient = await Patient.findById(patientId);
    if (!patient) {
       throw new ApiError(404, "Patient not found");
    }
    try {
        const diet = new Diet({
            patientId,
            morning,
            evening,
            night,
        });
       const savedDiet = await diet.save();
        res
        .status(201)
        .json(new ApiResponse(201, savedDiet , "Diet created successfully"));
    } catch (error) {
        throw new ApiError(400, error.message);
    }
};


//get a diet for a patient
export const getPatientDiet = async (req, res) => {
    try {
        const { patientId } = req.params;
        const diets = await Diet.find({ patientId }).populate(("patientId", "name"));
        if (!diets || diets.length === 0) {
            return res.status(404).json({ message: "No diet charts found for this patient." });
        }

        res
        .status(200)
        .json(new ApiResponse(200 , diets , "Diet plan for patient found successfully"));
    } catch (error) {
        throw new ApiError(404, error.message);
        
    }
}

//get all diets for a patients

export const getAllDiets = async (req, res) => {
    try {
       const diets = await Diet.find().populate("patientId" , "name age gender");
       res 
       .status(200)
       .json(new ApiResponse(200 , diets , "All diets found successfully"));
    } catch (error) {
        throw new ApiError(404, error.message);
    }
};


//update a diet chart

export const updateDiet = async (req, res) => {
    const {patientId}= req.params;
    const { morning, evening, night } = req.body;
    try {
       const updatedDiet = await Diet.findByIdAndUpdate(patientId, { morning, evening, night }, { new: true });
       if(!updateDiet){
        throw new ApiError(404, "Diet not found");
       }
       res
       .status(200)
       .json(new ApiResponse(200 , updatedDiet , "Diet updated successfully"));
    } catch (error) {
        throw new ApiError(404, error.message || " failed to update diet");
    }
};


//delete diet

export const deleteDiet = async (req, res) => {
    const { patientId } = req.params;
    try {
        const deletedDiet = await Diet.findByIdAndDelete(patientId);
        if(!deletedDiet){
            throw new ApiError(404, "Diet not found for this patient");
        }
        res
        .status(200)
        .json(new ApiResponse(200 , deletedDiet , "Diet deleted successfully"));
    } catch (error) {
        
    }
}