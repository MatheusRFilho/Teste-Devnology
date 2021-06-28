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

  const [operation, setOperation] = useState('sell');
  const [showOperations, setShowOperations] = useState([]);

  useEffect(() => {
    getInjuryProfit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todayFormated]);

  useEffect(() => {
    handleOperations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operation]);

  const handleOperations = async () => {
    const { data } = await api.get(`history/${operation}`);
    setShowOperations(data);
  };

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
      setTotalBuy(data.totalBuy);
      setTotalSell(data.totalSell);
      setValue(data.value);
    } catch (error) {
      console.log(error);
    }
  };

  const changeType = (text) => {
    setOperation(text);
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
        <h2 className="title">Informações sobre situação atual do mês:</h2>
        <div className="row">
          <p className="text">
            <strong>Status Financeiro atual:</strong> {type}
          </p>
          <p className="text">
            <strong>Valor: </strong>
            R$ {value}
          </p>
        </div>
        <h2 className="title">Informações sobre compra e venda do mês:</h2>
        <div className="row">
          <p className="text">
            <strong>Valor em Compras: </strong>
            R$ {totalBuy}
          </p>
          <p className="text">
            <strong>Valor em Vendas: </strong>
            R$ {totalSell}
          </p>
          <p className="text">
            <strong>Valor em comissões: </strong>
            R$ {commission}
          </p>
        </div>
      </div>

      <div className="history">
        <h2>Histórico de compra e venda da empresa</h2>

        {operation === 'buy' ? (
          <div className="history-buttons">
            <button
              className="history-button"
              onClick={() => changeType('sell')}
            >
              Vendas
            </button>
            <button
              className="history-button-active"
              onClick={() => changeType('buy')}
            >
              Compras
            </button>
          </div>
        ) : (
          <div className="history-buttons">
            <button
              className="history-button-active"
              onClick={() => changeType('sell')}
            >
              Vendas
            </button>
            <button
              className="history-button"
              onClick={() => changeType('buy')}
            >
              Compras
            </button>
          </div>
        )}
      </div>
      <div className="itens">
        {showOperations.map((item) => {
          return (
            <div className="card">
              <div className="card-container">
                <h3 className="card-title">Informações sobre o veículo</h3>
                <p className="card-text">Marca: {item.vehicle.brand}</p>
                <p className="card-text">Modelo: {item.vehicle.model}</p>
                <p className="card-text">Cor: {item.vehicle.color}</p>
                <p className="card-text">Chassi: {item.vehicle.chassi}</p>
                <p className="card-text">Placa: {item.vehicle.plate}</p>
                <p className="card-text">
                  Ano de Fabricação: {item.vehicle.year_of_fabrication}
                </p>
              </div>

              {item.type === 'buy' ? (
                <div className="card-container">
                  <h3 className="card-title">Informações sobre a operação</h3>
                  <p className="card-text">
                    Data da Compra: {moment(item.date).format('DD/MM/YYYY')}
                  </p>
                  <p className="card-text">Valor da Compra: R$ {item.value}</p>
                </div>
              ) : (
                <div className="card-container">
                  <h3 className="card-title">Informações sobre a operação</h3>
                  <p className="card-text">
                    Data da Venda: {moment(item.date).format('DD/MM/YYYY')}
                  </p>
                  <p className="card-text">Valor da Venda: R$ {item.value}</p>
                  <p className="card-text">
                    Comissão da Venda: R$ {item.commision}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FinancialItem;
