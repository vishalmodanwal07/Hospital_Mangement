import { Router } from "express";
import { getAllStaff , getStaffById, addStaff , updateStaff, deleteStaff } from "../controllers/pantryController.js"
const router = Router();
router.route("/").post(addStaff);
router.route("/").get(getAllStaff);
router.route("/:id").get(getStaffById);
router.route("/:id").put(updateStaff);
router.route("/:id").delete(deleteStaff);

export const pantryRoutes = router;