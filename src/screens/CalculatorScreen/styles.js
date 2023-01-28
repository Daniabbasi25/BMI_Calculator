import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0e21',
  },
  body: {
    flex: 10,
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  footer: {
    flex: 1,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  box1: {
    flex: 1,
    // backgroundColor: '#6200EE',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box2: {
    flex: 1,
    // backgroundColor: '#03DAC6',
    padding: 20,
  },
  box3: {
    flex: 1,
    // backgroundColor: '#2979FF',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderbutton: {
    backgroundColor: '#1d1e33',
    justifyContent: 'center',
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonboxes: {
    backgroundColor: '#1d1e33',
    justifyContent: 'space-between',
    // paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
