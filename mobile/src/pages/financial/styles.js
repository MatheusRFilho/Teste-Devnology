import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20, // tamanho da status bar + 20
    // backgroundColor: '#F00',
  },
  panelHeader: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 50,
    color: '#676C88',
  },

  divisor: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingBottom: 10,
  },

  title: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },

  buttonContainers: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 20,
  },

  desactiveButton: {
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },

  activeButton: {
    // borderColor: '#000',
    // borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#676C88',
  },

  activeText: {
    color: '#FFF',
  },

  desactiveText: {
    color: '#000',
  },

  cardTitle: {
    textAlign: 'center',
    // fontSize: 400,
    // fontSize: 1,
    paddingVertical: 10,
  },

  card: {
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 20,
    width: 250,
    paddingHorizontal: 20,
    alignSelf: 'center',
    // borderB: 1px solid black;
    // border-radius: 5px;
    // min-width: 200px;
    // margin: 20px 20px;
  },
});
