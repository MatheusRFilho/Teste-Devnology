import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NavBar from '../components/Navbar';

import styles from './styles';

export default function Financial() {
  return (
    <View style={styles.container}>
      <NavBar active={'financial'} />
    </View>
  );
}
