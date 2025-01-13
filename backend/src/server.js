 import dotenv from 'dotenv';
 import app from './app.js';
import connectDB from '../config/db.js';

dotenv.config();
 
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {console.log(`server is running at port ${process.env.PORT}`)});
})
.catch((err)=>console.log("mongodb connection fail" , err));
