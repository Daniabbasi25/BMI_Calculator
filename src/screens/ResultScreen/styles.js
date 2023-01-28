import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#0b0e21',
    flex: 1,
  },
  body: {
    flex: 10,
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  box1: {
    flex: 1,
    // backgroundColor: '#6200EE',
    padding: 20,
    // flexDirection: 'row',
    justifyContent: 'center',
  },
  box2: {
    flex: 6,
    // backgroundColor: '#03DAC6',
    padding: 10,
  },
  bigBox: {
    backgroundColor: '#1d1e33',
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  footer: {
    flex: 1,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
