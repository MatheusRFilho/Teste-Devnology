import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import moment from 'moment';
import api from '../../service/api';

import NavBar from '../components/Navbar';

import styles from './styles';

export default function Financial() {
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
    <View style={styles.container}>
      <NavBar active={'financial'} />

      <ScrollView>
        <View style={styles.panelHeader}>
          <TouchableOpacity onPress={handleDecreaseDay}>
            <Text style={styles.buttonText}>‹</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 8, fontSize: 20 }}>{todayFormated}</Text>
          <TouchableOpacity onPress={handleAddDay}>
            <Text style={styles.buttonText}>›</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divisor}>
          <Text style={styles.title}>Status Atual</Text>
          <Text>Situação financeira: {type}</Text>
          <Text>Valor: {value}</Text>
        </View>
        <View style={styles.divisor}>
          <Text style={styles.title}>Status de compras/vendas</Text>
          <Text>Total em compras: {totalBuy}</Text>
          <Text>Total em vendas: {totalSell}</Text>
          <Text>Total em comissões: {commission}</Text>
        </View>

        <View style={styles.buttonContainers}>
          <TouchableOpacity
            onPress={() => changeType('buy')}
            style={
              operation === 'buy' ? styles.activeButton : styles.desactiveButton
            }
          >
            <Text
              style={
                operation === 'buy' ? styles.activeText : styles.desactiveText
              }
            >
              Compras
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => changeType('sell')}
            style={
              operation === 'sell'
                ? styles.activeButton
                : styles.desactiveButton
            }
          >
            <Text
              style={
                operation === 'sell' ? styles.activeText : styles.desactiveText
              }
            >
              Vendas
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          {showOperations.length > 0 ? (
            showOperations.map((item) => {
              return (
                <View style={styles.card}>
                  <View>
                    <Text style={styles.cardTitle}>
                      Informações sobre o veículo
                    </Text>
                    <Text style={styles.cardText}>
                      Marca: {item.vehicle.brand}
                    </Text>
                    <Text style={styles.cardText}>
                      Modelo: {item.vehicle.model}
                    </Text>
                    <Text style={styles.cardText}>
                      Cor: {item.vehicle.color}
                    </Text>
                    <Text style={styles.cardText}>
                      Chassi: {item.vehicle.chassi}
                    </Text>
                    <Text style={styles.cardText}>
                      Placa: {item.vehicle.plate}
                    </Text>
                    <Text style={styles.cardText}>
                      Ano de Fabricação: {item.vehicle.year_of_fabrication}
                    </Text>
                  </View>

                  {item.type === 'buy' ? (
                    <View>
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
                  ) : (
                    <View>
                      <Text style={styles.cardTitle}>
                        Informações sobre a operação
                      </Text>
                      <Text style={styles.cardText}>
                        Data da Venda: {moment(item.date).format('DD/MM/YYYY')}
                      </Text>
                      <Text style={styles.cardText}>
                        Valor da Venda: R$ {item.value}
                      </Text>
                      <Text style={styles.cardText}>
                        Comissão da Venda: R$ {item.commision}
                      </Text>
                    </View>
                  )}
                </View>
              );
            })
          ) : (
            <Text style={{ textAlign: 'center' }}>
              Sem transações desse tipo
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
