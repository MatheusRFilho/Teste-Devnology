import { useState } from 'react';
import api from '../../config/api';
import NavBar from '../../globalComponents/NavBar/Navbar';
import './style.css';
import { useHistory } from 'react-router-dom';

const BuyNewVehicle = () => {
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [plate, setPlate] = useState('');
  const [chassi, setChassi] = useState('');
  const [buyValue, setBuyValue] = useState('');
  const [yearOfFabrication, setYearOfFabrication] = useState('');
  const [date, setDate] = useState('');

  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
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
      history.push('/vehicles');
    } catch (error) {
      console.log(error);
    }
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
                required
              />
            </div>

            <div className="form-one-item">
              <label>Marca</label>
              <input
                type="text"
                value={brand}
                onChange={handleBrand}
                placeholder="Digite Aqui"
                id="brand"
                required
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
                id="color"
                required
              />
            </div>
            <div className="form-one-item">
              <label>Placa</label>
              <input
                type="text"
                value={plate}
                onChange={handlePlate}
                placeholder="Digite Aqui"
                id="palte"
                required
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
                id="chassi"
                required
              />
            </div>
            <div className="form-one-item">
              <label>Ano de Fabricação</label>
              <input
                type="number"
                value={yearOfFabrication}
                onChange={handleYearOfFabrication}
                placeholder="Digite Aqui"
                id="yearOfFabrication"
                required
                maxlength="4"
                minLength="4"
                size="4"
              />
            </div>
          </div>
          <div className="form-two-itens">
            <div className="form-one-item">
              <label>Valor da compra</label>
              <input
                type="number"
                value={buyValue}
                onChange={handleValue}
                placeholder="Digite Aqui"
                id="buyValue"
                required
              />
            </div>
            <div className="form-one-item">
              <label>Dia da compra</label>
              <input
                type="date"
                value={date}
                onChange={handleDate}
                placeholder="Digite Aqui"
                id="date"
                required
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
