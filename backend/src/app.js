import express, { Router } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

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

//  const route =Router();
//  app.use("/api/auth" , (req , res)=>{
//     res.send("hello from auth");
//  })

 export default app;