import {Router} from 'express';
import { createDiet , getPatientDiet  , getAllDiets , updateDiet , deleteDiet} from '../controllers/dietController.js';
const router = Router();
router.route('/').post(createDiet);
router.route('/:patientId').get(getPatientDiet);
router.route('/').get(getAllDiets);
router.route('/:patientId').patch(updateDiet);
router.route('/:patientId').delete(deleteDiet);

export const dietRoutes = router;