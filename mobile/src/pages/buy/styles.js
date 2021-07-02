import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20, // tamanho da status bar + 20
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
    marginBottom: 20,
  },

  subContainer: {
    // flexDirection: 'column',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    // marginBottom: 20,
  },

  text: {
    // width: 70,
  },

  dateInput: {
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
    height: 30,
    marginBottom: 20,
  },
});
