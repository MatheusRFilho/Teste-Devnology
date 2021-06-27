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

  async get_profit_injury_by_month(request: Request, response: Response) {
    const { month, year } = request.params;

    let nextYear: number;
    let nextMonth: number;
    if (month === '12') {
      nextMonth = 1;
      nextYear = parseInt(year) + 1;
    } else {
      nextMonth = parseInt(month) + 1;
      nextYear = parseInt(year);
    }
    const dateStart = new Date(`${year}-${month}-01`);
    const dateEnd = new Date(`${nextYear}-${nextMonth}-01`);
    const historyRepository = getRepository(History);
    const history = await historyRepository.find();
    let aux = 0;
    let auxCommision = 0;
    let totalBuy = 0;
    let totalSell = 0;
    history.map((item) => {
      if (
        dateStart.getTime() < item.date.getTime() &&
        dateEnd.getTime() > item.date.getTime()
      ) {
        if (item.type === 'buy') {
          aux = aux - item.value;
          totalBuy = totalBuy + item.value;
        } else {
          aux = aux + item.value;
          totalSell = totalSell + item.value;
          auxCommision = auxCommision + item.commision;
        }
      }
    });
    let type: string;
    if (aux > 0) {
      type = 'Lucro';
    } else if (aux < 0) {
      type = 'Prejuizo';
      aux = aux * -1;
    } else {
      type = 'indiferente';
    }

    return response.json({
      value: aux,
      type: type,
      commision: auxCommision,
      totalBuy: totalBuy,
      totalSell: totalSell,
    });
  }
}

export { HistoryController };
