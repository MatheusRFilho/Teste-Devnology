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

router.post('/sell/:id', vehiclesController.sell);

router.get('/history/:type', historyController.execute);
router.get(
  '/history/:month/:year',
  historyController.get_profit_injury_by_month,
);
router.get('/available-to-sell', historyController.available_to_sell);

export { router };
