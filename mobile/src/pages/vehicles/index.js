import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import NavBar from '../components/Navbar';

import styles from './styles';

export default function Vehicles() {
  return (
    <View style={styles.container}>
      <NavBar active={'vehicles'} />
    </View>
  );
}
