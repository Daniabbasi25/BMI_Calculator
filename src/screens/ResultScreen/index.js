import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';

const ResultScreen = ({navigation, route}) => {
  console.log(route.params);
  const {bmi, position} = route.params;
  const onpressPrimary = () => {
    navigation.navigate('CalculatorScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.box1}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Your Result
          </Text>
        </View>
        <View style={styles.box2}>
          <View style={styles.bigBox}>
            <Text
              style={[
                {
                  fontSize: 30,
                  fontWeight: 'bold',
                },
                position == 'Normal weight'
                  ? {color: '#2ad072'}
                  : {color: 'darkred'},
              ]}>
              {position == 'Normal weight' ? 'Normal' : position}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 80,
                fontWeight: 'bold',
                color: '#fff',
              }}>
              {bmi}
            </Text>
            <View>
              <Text
                style={{textAlign: 'center', color: '#f0f0f8', fontSize: 18}}>
                You have a {position} Body Weight.
              </Text>
              <Text
                style={{textAlign: 'center', color: '#f0f0f8', fontSize: 18}}>
                {position == 'Normal weight'
                  ? ' Good Job!'
                  : 'Eat Healty and Exercise Daily'}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <PrimaryButton onpressPrimary={onpressPrimary} text="Re-Calculate" />
      </View>
    </View>
  );
};

export default ResultScreen;
