import { Router } from 'express';
import { VehiclesController } from './controllers/VehiclesController';
const router = Router();

const vehiclesController = new VehiclesController();

router.post('/vehicles', vehiclesController.create);

export { router };
