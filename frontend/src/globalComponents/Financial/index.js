import { useEffect, useState } from 'react';
import api from '../../config/api';
import moment from 'moment';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import './style.css';

const FinancialItem = () => {
  const [today, setToday] = useState(moment());
  const [todayFormated, setTodayFormated] = useState(
    moment().format('MM/YYYY'),
  );

  const [type, setType] = useState('');
  const [totalBuy, setTotalBuy] = useState('');
  const [totalSell, setTotalSell] = useState('');
  const [value, setValue] = useState('');
  const [commission, setCommission] = useState('');

  useEffect(() => {
    getInjuryProfit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todayFormated]);

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function decDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  const handleDecreaseDay = () => {
    const newDate = decDays(today, 30);
    setToday(newDate);
    setTodayFormated(moment(newDate).format('MM/YYYY'));
  };

  const handleAddDay = () => {
    const newDate = addDays(today, 30);
    setToday(newDate);
    setTodayFormated(moment(newDate).format('MM/YYYY'));
  };

  const getInjuryProfit = async () => {
    try {
      const { data } = await api.get(`history/${todayFormated}`);
      setType(data.type);
      setCommission(data.commision);
      console.log(data);
      setTotalBuy(data.totalBuy);
      setTotalSell(data.totalSell);
      setValue(data.value);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <button type="button" className="button" onClick={handleDecreaseDay}>
            <FiArrowLeft />
          </button>
          <p className="formatedDate">{todayFormated}</p>
          <button type="button" className="button" onClick={handleAddDay}>
            <FiArrowRight />
          </button>
        </div>
      </div>

      <div className="content">
        <h2>Informações sobre situação atual do mês:</h2>
        <div className="row">
          <p>Status Financeiro atual: {type}</p>
          <p>Valor: {value}</p>
        </div>
        <h2>Informações sobre compra e venda do mês:</h2>
        <div className="row">
          <p>Valor em Compras: {totalBuy} </p>
          <p>Valor em Vendas: {totalSell}</p>
          <p>Valor em comissões: {commission}</p>
        </div>
      </div>
    </>
  );
};

export default FinancialItem;
