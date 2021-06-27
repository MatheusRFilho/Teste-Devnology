import { Request, Response } from 'express';
import moment from 'moment';
import { getRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { History } from '../models/History';

class HistoryController {
  async execute(request: Request, response: Response) {
    const { type } = request.params;

    const historyRepository = getRepository(History);

    const history = await historyRepository.find({
      type,
    });
    return response.json(history);
  }
}

export { HistoryController };
