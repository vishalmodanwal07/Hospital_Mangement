import { User } from "../models/User.model.js";
import { ApiError } from "../src/utils/ApiError.js";
import { ApiResponse } from "../src/utils/ApiResponce.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = async(req , res)=>{
    try {
        const {username , email , password , role} = req.body;
        if(
            [ username , email , password , role].some((field)=> field?.trim() === "")
           ){
            throw new ApiError(400 , "all fileds are required")
           }
           //checking user exit or not
        const existedUser = await User.findOne({$or: [{ username } , { email }]});
        if(existedUser){
                        throw new ApiError(409 , "user with email or username already exist");
                    };
        const hashedPassword = await bcrypt.hash(password , 10);
        const user = new User({username , email , password: hashedPassword , role});
        await user.save();
        res
        .status(201)
        .json(
            new ApiResponse(200, user , `user created successfully with username ${username}`)
        )
    } catch (error) {
        throw new ApiError(500 , error?.message || "something went wrong in user registration" );
    }


}

export const login = async(req , res)=>{
   try {
     const {email , password} = req.body;
     if(!email){
        throw new ApiError(400 , "username or email are required");
     }
     const user = await User.findOne({email});
     if(!user){
         throw new ApiError(404 , `user with email ${email} not found`);
     }
     const isValidPassword = await bcrypt.compare(password , user.password);
     if(!isValidPassword){
        throw new ApiError(401 , "invalid password");
     }
     const token = jwt.sign({id: user._id , role: user.role} , process.env.JWT_SECRET , {expiresIn : "2d"})
     res
     .status(200)
     .json(
        new ApiResponse(200 , token , "login successful")
     )
      } catch (error) {
      throw new ApiError(500 , error?.message || "something went wrong in user login" );
   }
}