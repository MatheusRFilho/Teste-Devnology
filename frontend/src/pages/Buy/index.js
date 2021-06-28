import { useState } from 'react';
import api from '../../config/api';
import NavBar from '../../globalComponents/NavBar/Navbar';
import './style.css';

const BuyNewVehicle = () => {
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [plate, setPlate] = useState('');
  const [chassi, setChassi] = useState('');
  const [buyValue, setBuyValue] = useState('');
  const [yearOfFabrication, setYearOfFabrication] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async () => {
    const object = {
      model: model,
      brand: brand,
      color: color,
      plate: plate,
      chassi: chassi,
      buy_value: buyValue,
      year_of_fabrication: yearOfFabrication,
      buy_date: date,
    };

    await api.post('vehicles', object);
  };

  const handleModel = (event) => {
    setModel(event.target.value);
  };

  const handleBrand = (event) => {
    setBrand(event.target.value);
  };

  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const handlePlate = (event) => {
    setPlate(event.target.value);
  };

  const handleChassi = (event) => {
    setChassi(event.target.value);
  };

  const handleYearOfFabrication = (event) => {
    setYearOfFabrication(event.target.value);
  };

  const handleValue = (event) => {
    setBuyValue(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <>
      <NavBar activeItem={'vehicles'}></NavBar>

      <div className="form-container">
        <h2>Cadastrando a compra de um novo veículo</h2>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-two-itens">
            <div className="form-one-item">
              <label>Modelo</label>
              <input
                type="text"
                value={model}
                onChange={handleModel}
                placeholder="Digite Aqui"
              />
            </div>

            <div className="form-one-item">
              <label>Marca</label>
              <input
                type="text"
                value={brand}
                onChange={handleBrand}
                placeholder="Digite Aqui"
              />
            </div>
          </div>
          <div className="form-two-itens">
            <div className="form-one-item">
              <label>Cor</label>
              <input
                type="text"
                value={color}
                onChange={handleColor}
                placeholder="Digite Aqui"
              />
            </div>
            <div className="form-one-item">
              <label>Placa</label>
              <input
                type="text"
                value={plate}
                onChange={handlePlate}
                placeholder="Digite Aqui"
              />
            </div>
          </div>
          <div className="form-two-itens">
            <div className="form-one-item">
              <label>Chassi</label>
              <input
                type="text"
                value={chassi}
                onChange={handleChassi}
                placeholder="Digite Aqui"
              />
            </div>
            <div className="form-one-item">
              <label>Ano de Fabricação</label>
              <input
                type="text"
                value={yearOfFabrication}
                onChange={handleYearOfFabrication}
                placeholder="Digite Aqui"
              />
            </div>
          </div>
          <div className="form-two-itens">
            <div className="form-one-item">
              <label>Valor da compra</label>
              <input
                type="value"
                value={buyValue}
                onChange={handleValue}
                placeholder="Digite Aqui"
              />
            </div>
            <div className="form-one-item">
              <label>Dia da compra</label>
              <input
                type="date"
                value={date}
                onChange={handleDate}
                placeholder="Digite Aqui"
              />
            </div>
          </div>
          <button type="submit" className="form-button">
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
};

export default BuyNewVehicle;
