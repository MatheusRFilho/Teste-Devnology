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

    return response.send('OK').status(200);
  }

  async execute(request: Request, response: Response) {
    const vehiclesRepository = getRepository(Vehicles);

    const vehicles = await vehiclesRepository.find();

    return response.json(vehicles);
  }
}

export { VehiclesController };
