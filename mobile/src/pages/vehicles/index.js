import React from 'react';
import { View } from 'react-native';
import api from '../../service/api';
import NavBar from '../components/Navbar';

import moment from 'moment';

import styles from './styles';

export default function Vehicles() {
  return (
    <View style={styles.container}>
      <NavBar active={'vehicles'} />
    </View>
  );
}
