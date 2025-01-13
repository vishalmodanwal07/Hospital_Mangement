import express, { Router } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {authRoutes} from '../routes/authRoutes.js'
import { protectedRoutes } from '../routes/userRoutes.js';

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

 export default app;