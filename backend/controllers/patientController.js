import {Patient} from '../models/Patient.model.js';
import { ApiError } from '../src/utils/ApiError.js';
import { ApiResponse } from '../src/utils/ApiResponce.js';

//get all patients

export const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res
        .status(200)
        .json(
            new ApiResponse(200,  patients ,  "Patients retrieved successfully")
        )
    } catch (error) {
        throw new ApiError(500 , error?.message || "Internal Server Error");
        }

};


//get patient by id
export const getPatientById = async (req, res) => {
    try {
        const patientId = req.params.id;
        if(!patientId){
            throw new ApiError(400, "Patient id is required");
        }
        const patient = await Patient.findById(patientId);
        res
        .status(200)
        .json(
            new ApiResponse(200, patient, "Patient retrieved successfully")
        )
    } catch (error) {
        throw new ApiError(500 , error?.message || "Internal Server Error");
    }
}


//add a new patient
export const addPatient = async (req, res) => {
    const { name, diseases, allergies, roomNumber, bedNumber, floorNumber, age, gender, contactInfo, emergencyContact, notes } = req.body;
    if(!name || !diseases ||  !allergies || !roomNumber || !bedNumber || !floorNumber || !age || !gender || !contactInfo){
        throw new ApiError(400, "Some important  fields (name, diseases, allergies, roomNumber, bedNumber, floorNumber, age, gender, contactInfo) are required");
    }
    try {
        const newPatient = new Patient({
            name,
            diseases,
            allergies,
            roomNumber,
            bedNumber,
            floorNumber,
            age,
            gender,
            contactInfo,
            emergencyContact,
            notes,
        })
        await newPatient.save();
        res
        .status(201)
        .json(
            new ApiResponse(201,  newPatient , "Patient added successfully")
        )
    } catch (error) {
        throw new ApiError(500 , error?.message || "Internal Server Error");
    }
}


//update paitent 
export const updatePatient = async (req, res) => {
    try {
        const patientId = req.params.id;
        const updatePatient = await Patient.findByIdAndUpdate(patientId, req.body, { new: true });
        if(!updatePatient){
            throw new ApiError(404, "Patient not found");
        }
        res
        .status(200)
        .json(new ApiResponse(200 , updatePatient , " patient updated successfully"))
    } catch (error) {
        
    }
};


export const deletePatient = async (req, res) => {
     try {
        const patientId = req.params.id;
        const deletePatient = await Patient.findByIdAndDelete(patientId);
        if(!deletePatient){
         throw new ApiError(404, "Patient not found");
     }
     res
     .status(200)
     .json(new ApiResponse(200 , deletePatient , "Patient deleted successfully"))
    } catch (error) {
        throw new ApiError(500 , error?.message || "Internal Server Error");
     }
}