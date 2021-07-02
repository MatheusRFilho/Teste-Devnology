import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  buttonContainer: {
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
  },

  buttonContainerActive: {
    backgroundColor: '#9FA0A4',
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },

  textActive: {
    color: '#FFF',
    fontSize: 20,
  },
  text: {
    fontSize: 20,
  },
});
