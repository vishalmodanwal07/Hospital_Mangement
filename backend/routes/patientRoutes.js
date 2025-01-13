import {Router} from 'express';
import {getAllPatients ,  getPatientById ,addPatient ,updatePatient , deletePatient} from '../controllers/patientController.js'

const router = Router();

router.route('/').get(getAllPatients);
router.route('/:id').get( getPatientById);
router.route('/').post(addPatient);
router.route('/:id').post(updatePatient);
router.route('/:id').delete(deletePatient);



export const patientRoutes = router;