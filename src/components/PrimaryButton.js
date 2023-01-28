import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const PrimaryButton = props => {
  console.log(props);
  const {onpressPrimary, text} = props;
  return (
    <Pressable style={styles.background} onPress={onpressPrimary}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#eb1555',
    width: '100%',
    paddingVertical: 13,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
  },
});
