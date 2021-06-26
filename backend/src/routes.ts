import { Router } from 'express';
import { VehiclesController } from './controllers/VehiclesController';
const router = Router();

const vehiclesController = new VehiclesController();

router.post('/vehicles', vehiclesController.create);
router.get('/vehicles', vehiclesController.execute);
router.get('/vehicles/:id', vehiclesController.getById);
router.put('/vehicles/:id', vehiclesController.edit);

export { router };
