import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20, // tamanho da status bar + 20
  },

  vehicles: {
    alignSelf: 'center',
  },

  newVehicles: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#676C88',
    borderRadius: 5,
  },

  newVehiclesText: {
    color: '#FFF',
  },

  title: {
    marginVertical: 10,
    fontSize: 20,
  },

  card: {
    borderWidth: 1,
    width: 250,
    alignSelf: 'center',
    paddingVertical: 20,
  },

  cardTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },

  cardContainer: {
    width: 250,
    alignSelf: 'center',

    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
