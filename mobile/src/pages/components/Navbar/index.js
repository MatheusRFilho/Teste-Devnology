import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function NavBar({ active }) {
  const navigation = useNavigation();

  function navigateToFinancial() {
    navigation.navigate('financial');
  }
  function navigateToVehicles() {
    navigation.navigate('vehicles');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigateToFinancial()}
        style={
          active === 'financial'
            ? styles.buttonContainerActive
            : styles.buttonContainer
        }
      >
        <Text style={active === 'financial' ? styles.textActive : styles.text}>
          Financeiro
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToVehicles()}
        style={
          active === 'vehicles'
            ? styles.buttonContainerActive
            : styles.buttonContainer
        }
      >
        <Text style={active === 'vehicles' ? styles.textActive : styles.text}>
          Vehicles
        </Text>
      </TouchableOpacity>
    </View>
  );
}
