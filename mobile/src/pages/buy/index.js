import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import api from '../../service/api';
import DatePicker from 'react-native-datepicker';
import NavBar from '../components/Navbar';

import styles from './styles';

export default function Buy() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [chassi, setChassi] = useState('');
  const [plate, setPlate] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async () => {
    try {
      if (
        brand !== '' &&
        model !== '' &&
        year !== '' &&
        color !== '' &&
        chassi !== '' &&
        plate !== '' &&
        date !== '' &&
        value !== ''
      ) {
        const object = {
          model: model,
          brand: brand,
          color: color,
          plate: plate,
          chassi: chassi,
          buy_value: value,
          year_of_fabrication: year,
          buy_date: date,
        };

        await api.post('vehicles', object);
      } else {
        console.log('a');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <NavBar active={'vehicles'} />
      <View style={styles.subContainer}>
        <Text style={styles.text}>Marca</Text>
        <TextInput
          value={brand}
          onChangeText={(text) => setBrand(text)}
          style={styles.textInput}
        />

        <Text style={styles.text}>Modelo</Text>
        <TextInput
          value={model}
          onChangeText={(text) => setModel(text)}
          style={styles.textInput}
        />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.text}>Placa</Text>
        <TextInput
          value={plate}
          onChangeText={(text) => setPlate(text)}
          style={styles.textInput}
        />

        <Text style={styles.text}>Cor</Text>
        <TextInput
          value={color}
          onChangeText={(text) => setColor(text)}
          style={styles.textInput}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Chassi</Text>
        <TextInput
          value={chassi}
          onChangeText={(text) => setChassi(text)}
          style={styles.textInput}
        />

        <Text style={styles.text}>Ano de Fabricação</Text>
        <TextInput
          value={year}
          onChangeText={(text) => setYear(text)}
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={4}
        />
      </View>
      <Text style={styles.text}>Valor da compra</Text>
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        style={styles.textInput}
        keyboardType="numeric"
      />

      <Text style={styles.text}>Data da compra</Text>
      <DatePicker
        style={styles.textInput}
        date={date}
        format="DD-MM-YYYY"
        onDateChange={(text) => setDate(text)}
      />

      <TouchableOpacity onPress={() => handleSubmit}>
        <Text>Criar Compra</Text>
      </TouchableOpacity>
    </View>
  );
}
