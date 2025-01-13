import { Router } from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";
const router = Router();
//only manager can access this route
router.route('/manager').get( verifyToken , authorizeRoles("Manager"), (req , res) => {
     res.json({message : "welcome Manager"});
})


//both manager and pantry can access this route
router.route('/pantry').get(verifyToken ,authorizeRoles("Manager" , "Pantry"),  (req , res) => {
    res.json({message : "welcome Pantry"});
})


//all can access this route
router.route('/delivery').get(verifyToken , authorizeRoles("Manager" , "Pantry" , "Delivery") ,   (req , res) => {
    res.json({message : "welcome Delivery"});
})

export const protectedRoutes = router;