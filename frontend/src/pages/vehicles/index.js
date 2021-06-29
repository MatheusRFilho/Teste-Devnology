import moment from 'moment';
import { useEffect, useState } from 'react';
import api from '../../config/api';
import NavBar from '../../globalComponents/NavBar/Navbar';
import './style.css';
import Modal from 'react-modal';

import { BsX } from 'react-icons/bs';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    getVehiclesAvailableToSell();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  function openModal(item) {
    setVehicle(item);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const getVehiclesAvailableToSell = async () => {
    const { data } = await api.get('available-to-sell');
    setVehicles(data);
  };

  const handleSubmit = async () => {
    console.log('banana');
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
                <button
                  type="button"
                  onClick={() => openModal(item.vehicle)}
                  className="sell-button"
                >
                  Vender
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className="close-button-container">
          <button onClick={closeModal} className="close-button">
            <BsX size="20" />
          </button>
        </div>
        <div>
          <p className="modal-title">
            Tem certeza que deseja vender o veiculo {vehicle.model} da placa{' '}
            {vehicle.plate}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-two-itens">
            <div className="form-one-item">
              <label>Data da venda:</label>
              <input type="date" />
            </div>
            <div className="form-one-item">
              <label>Valor da venda:</label>
              <input typr="number" />
            </div>
          </div>
          <div className="form-button-modal">
            <button type="submit" className="form-button">
              {' '}
              Realizar Venda{' '}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default Vehicles;
