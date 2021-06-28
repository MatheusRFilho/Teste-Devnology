import moment from 'moment';
import { useEffect, useState } from 'react';
import api from '../../config/api';
import NavBar from '../../globalComponents/NavBar/Navbar';
import './style.css';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getVehiclesAvailableToSell();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const getVehiclesAvailableToSell = async () => {
    const { data } = await api.get('available-to-sell');
    setVehicles(data);
  };

  return (
    <>
      <NavBar activeItem={'vehicles'}></NavBar>

      <div className="vehicles">
        <a href="/new-vehicle" className="new-vehicle">
          Novo Veículo
        </a>
        <h2>Veículos Disponiveis para vendas</h2>
      </div>

      <div className="itens">
        {vehicles.map((item) => {
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
              <div className="card-container">
                <h3 className="card-title">Informações sobre a operação</h3>
                <p className="card-text">
                  Data da Compra: {moment(item.date).format('DD/MM/YYYY')}
                </p>
                <p className="card-text">Valor da Compra: R$ {item.value}</p>
              </div>

              <div className="sell-button-container">
                <a href={`/sell/${item.vehicle.id}`} className="sell-button">
                  Vender
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Vehicles;
