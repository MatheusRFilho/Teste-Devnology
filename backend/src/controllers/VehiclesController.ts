import { Request, Response } from 'express';
import moment from 'moment';
import { getRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { Vehicles } from '../models/Vehicles';

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
    } = request.body;

    const vehiclesRepository = getRepository(Vehicles);

    const isvaliddate = moment(buy_date).isValid();

    if (!isvaliddate) {
      throw new AppError('buy date is invalid!');
    }

    const vehicle = vehiclesRepository.create({
      brand,
      model,
      buy_date,
      buy_value,
      chassi,
      color,
      plate,
      year_of_fabrication,
    });

    await vehiclesRepository.save(vehicle);

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

    const vehicle = await vehiclesRepository.update(id, editInfos);

    return response.send('Veiculo atualizado com sucesso').status(200);
  }
}

export { VehiclesController };
