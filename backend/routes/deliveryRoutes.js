import { Router } from "express";
import { createDelivery,
    getAllDeliveries,
    getDeliveryById,
    updateDeliveryStatus,
    deleteDelivery,} from "../controllers/deliveryController.js";

const router = Router();
router.route("/").post(createDelivery);
router.route("/").get(getAllDeliveries);
router.route("/:id").get(getDeliveryById);
router.route("/:id").put(updateDeliveryStatus);
router.route("/:id").delete(deleteDelivery);


export const deliveryRoutes = router;