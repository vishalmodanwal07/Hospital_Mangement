import express, { Router } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {authRoutes} from '../routes/authRoutes.js'
import { protectedRoutes } from '../routes/userRoutes.js';
import { patientRoutes } from '../routes/patientRoutes.js';
import {  dietRoutes } from '../routes/dietRoutes.js';
import { pantryRoutes } from '../routes/pantryRoutes.js';
import { deliveryRoutes } from '../routes/deliveryRoutes.js';

const app = express();
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials : true
    }
));
 app.use(express.json());  // for parsing application/json
 app.use(express.urlencoded()) // data accept from url
 app.use(cookieParser());

 //routes


 app.use("/api/auth" , authRoutes );
 app.use("/api/users" , protectedRoutes);
 app.use("/api/patient" , patientRoutes);
app.use ("/api/diets" , dietRoutes);
app.use('/api/pantry', pantryRoutes);
app.use('/api/delivery' , deliveryRoutes);
 export default app;