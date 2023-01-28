import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';

const CalculatorScreen = () => {
  const onpressPrimary = () => {
    alert('HI');
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.box1}>
          <Text>Box 1</Text>
        </View>
        <View style={styles.box2}>
          <Text>Box 2</Text>
        </View>
        <View style={styles.box3}>
          <Text>Box 3</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <PrimaryButton onpressPrimary={onpressPrimary} text="Calculate" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
