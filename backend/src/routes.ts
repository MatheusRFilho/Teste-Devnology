import { Router } from 'express';
import { VehiclesController } from './controllers/VehiclesController';
import { HistoryController } from './controllers/HistoryController';
const router = Router();

const vehiclesController = new VehiclesController();
const historyController = new HistoryController();

//Crude Basico de veiculos
router.post('/vehicles', vehiclesController.create);
router.get('/vehicles', vehiclesController.execute);
router.get('/vehicles/:id', vehiclesController.getById);
router.put('/vehicles/:id', vehiclesController.edit);
router.delete('/vehicles/:id', vehiclesController.delete);

router.get('/history/:type', historyController.execute);

export { router };
