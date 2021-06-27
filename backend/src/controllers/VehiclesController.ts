import { Request, Response } from 'express';
import moment from 'moment';
import { getRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { Vehicles } from '../models/Vehicles';
import { History } from '../models/History';

class VehiclesController {
  async create(request: Request, response: Response) {
    const {
      brand,
      buy_date,
      buy_value,
      model,
      color,
      chassi,
      plate,
      year_of_fabrication,
      type_of_operation,
      isAvailable,
    } = request.body;

    const vehiclesRepository = getRepository(Vehicles);
    const historyRepository = getRepository(History);

    const isvaliddate = moment(buy_date).isValid();

    if (!isvaliddate) {
      throw new AppError('buy date is invalid!');
    }
    const type = type_of_operation ? type_of_operation : 'buy';
    let isAvailableAuxliar: boolean;
    if (type === 'buy') {
      isAvailableAuxliar = true;
    } else {
      isAvailableAuxliar = false;
    }
    const vehicle = vehiclesRepository.create({
      brand,
      model,
      chassi,
      color,
      plate,
      year_of_fabrication,
      isAvailable: isAvailableAuxliar,
    });
    await vehiclesRepository.save(vehicle);

    const vehicle_id = vehicle.id;
    const date = buy_date;
    const value = buy_value;

    let history;
    if (isAvailable === false) {
      history = historyRepository.create({
        vehicle_id: vehicle_id,
        date,
        value,
        type,
        commision: (value * 10) / 100,
      });
    } else {
      history = historyRepository.create({
        vehicle_id: vehicle_id,
        date,
        value,
        type,
      });
    }

    await historyRepository.save(history);

    return response.json(vehicle).status(200);
  }

  async execute(request: Request, response: Response) {
    const vehiclesRepository = getRepository(Vehicles);

    const vehicles = await vehiclesRepository.find();

    return response.json(vehicles);
  }

  async getById(request: Request, response: Response) {
    const { id } = request.params;

    const vehiclesRepository = getRepository(Vehicles);

    const vehicles = await vehiclesRepository.find({
      id,
    });
    return response.json(vehicles);
  }

  async edit(request: Request, response: Response) {
    const { id } = request.params;
    const editInfos = request.body;

    const vehiclesRepository = getRepository(Vehicles);

    await vehiclesRepository.update(id, editInfos);

    return response.send('Veiculo atualizado com sucesso').status(200);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const vehiclesRepository = getRepository(Vehicles);

    await vehiclesRepository.delete(id);

    return response.send('Veiculo Deletado com sucesso').status(200);
  }
}

export { VehiclesController };
