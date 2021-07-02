import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import api from '../../service/api';
import NavBar from '../components/Navbar';

import moment from 'moment';

import styles from './styles';

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [vehicle, setVehicle] = useState({});

  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
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
    try {
      const { data } = await api.post(`sell/${vehicle.id}`, {
        sell_value: value,
        sell_date: date,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleValue = (event) => {
    setValue(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };
  return (
    <View style={styles.container}>
      <NavBar active={'vehicles'} />

      <View style={styles.vehicles}>
        <TouchableOpacity
          onPress={() => console.log('compra')}
          style={styles.newVehicles}
        >
          <Text style={styles.newVehiclesText}>Novo Veículo</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Veículos Disponiveis para vendas</Text>
      </View>

      <View style={styles.itens}>
        {vehicles.map((item) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>
                  Informações sobre o veículo
                </Text>
                <Text style={styles.cardText}>Marca: {item.vehicle.brand}</Text>
                <Text style={styles.cardText}>
                  Modelo: {item.vehicle.model}
                </Text>
                <Text style={styles.cardText}>Cor: {item.vehicle.color}</Text>
                <Text style={styles.cardText}>
                  Chassi: {item.vehicle.chassi}
                </Text>
                <Text style={styles.cardText}>Placa: {item.vehicle.plate}</Text>
                <Text style={styles.cardText}>
                  Ano de Fabricação: {item.vehicle.year_of_fabrication}
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>
                  Informações sobre a operação
                </Text>
                <Text style={styles.cardText}>
                  Data da Compra: {moment(item.date).format('DD/MM/YYYY')}
                </Text>
                <Text style={styles.cardText}>
                  Valor da Compra: R$ {item.value}
                </Text>
              </View>

              <View style={styles.vehicles}>
                <TouchableOpacity
                  onClick={() => openModal(item.vehicle)}
                  style={styles.newVehicles}
                >
                  <Text style={styles.newVehiclesText}>Vender</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>

      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <View style="close-button-container">
          <button onClick={closeModal} style="close-button">
            <BsX size="20" />
          </button>
        </View>
        <View>
          <Text style="modal-title">
            Tem certeza que deseja vender o veiculo {vehicle.model} da placa{' '}
            {vehicle.plate}
          </Text>
        </View>
        <form onSubmit={handleSubmit}>
          <View style="form-two-itens">
            <View style="form-one-item">
              <label>Data da venda:</label>
              <input type="date" onChange={handleDate} value={date} required />
            </View>
            <View style="form-one-item">
              <label>Valor da venda:</label>
              <input
                typr="number"
                onChange={handleValue}
                value={value}
                required
              />
            </View>
          </View>
          <View style="form-button-modal">
            <button type="submit" style="form-button">
              {' '}
              Realizar Venda{' '}
            </button>
          </View>
        </form>
      </Modal> */}
    </View>
  );
}
