import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import Icon from 'react-native-vector-icons/Foundation';
import Slider from '@react-native-community/slider';

const CalculatorScreen = ({navigation}) => {
  const [gender, setgender] = useState('M');
  const [height, setHeight] = useState(60);
  const [weight, setWeight] = useState(30);
  const [age, setAge] = useState(1);
  const onpressPrimary = () => {
    let bmi = weight / (height * age);
    let position = '';
    if (gender === 'M') {
      if (bmi < 20) {
        position = 'Underweight';
      } else if (bmi >= 20 && bmi < 25) {
        position = 'Normal weight';
      } else if (bmi >= 25 && bmi < 30) {
        position = 'Overweight';
      } else {
        position = 'Obese';
      }
    } else if (gender === 'F') {
      if (bmi < 19) {
        position = 'Underweight';
      } else if (bmi >= 19 && bmi < 24) {
        position = 'Normal weight';
      } else if (bmi >= 24 && bmi < 29) {
        position = 'Overweight';
      } else {
        position = 'Obese';
      }
    }

    navigation.navigate('ResultScreen', {
      bmi: bmi,
      position: position,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.box1}>
          <TouchableOpacity
            onPress={() => setgender('M')}
            style={[
              styles.genderbutton,
              gender == 'M' && {backgroundColor: '#10132a'},
            ]}>
            <Icon name="male-symbol" size={80} color="#fff" />
            <Text style={{color: '#656678', textAlign: 'center', fontSize: 18}}>
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setgender('F')}
            style={[
              styles.genderbutton,
              gender == 'F' && {backgroundColor: '#10132a'},
            ]}>
            {/* Icon */}
            <Icon name="female-symbol" size={80} color="#fff" />
            <Text style={{color: '#656678', textAlign: 'center', fontSize: 18}}>
              Female
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <View
            style={{
              backgroundColor: '#1d1e33',
              paddingVertical: 25,
              borderRadius: 10,
            }}>
            <Text style={{color: '#656678', textAlign: 'center', fontSize: 17}}>
              Height
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginBottom: 12,
              }}>
              <Text
                style={{
                  color: '#fff',
                  // textAlign: 'center',
                  fontSize: 35,
                  fontWeight: '900',
                }}>
                {' '}
                {height}
              </Text>
              <Text style={{color: '#656678', textAlign: 'center'}}>cm</Text>
            </View>
            <Slider
              minimumTrackTintColor="#eb1555"
              maximumTrackTintColor="#8d8f9e"
              thumbTintColor="#eb1555"
              value={height}
              onValueChange={value => setHeight(value)}
              minimumValue={60} // minimum hight record of any human in this world
              maximumValue={272} // maximum hight of a human in this world
              step={1}
            />
          </View>
        </View>
        <View style={styles.box3}>
          <View style={styles.buttonboxes}>
            <Text style={{color: '#656678', textAlign: 'center', fontSize: 17}}>
              Weight
            </Text>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 35,
                fontWeight: '900',
              }}>
              {' '}
              {weight}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 25,
              }}>
              <TouchableOpacity
                onPress={() => setWeight(weight + 1)}
                style={{
                  backgroundColor: '#4d4f5c',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 14,
                  borderRadius: 50,
                  marginRight: 20,
                }}>
                <Icon name="plus" size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setWeight(weight != 1 ? weight - 1 : 1)}
                style={{
                  backgroundColor: '#4d4f5c',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 14,
                  borderRadius: 50,
                }}>
                <Icon name="minus" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonboxes}>
            <Text style={{color: '#656678', textAlign: 'center', fontSize: 17}}>
              Height
            </Text>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 35,
                fontWeight: '900',
              }}>
              {' '}
              {age}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 25,
              }}>
              <TouchableOpacity
                onPress={() => setAge(age + 1)}
                style={{
                  backgroundColor: '#4d4f5c',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 14,
                  borderRadius: 50,
                  marginRight: 20,
                }}>
                <Icon name="plus" size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setAge(age != 1 ? age - 1 : 1)}
                style={{
                  backgroundColor: '#4d4f5c',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 14,
                  borderRadius: 50,
                }}>
                <Icon name="minus" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <PrimaryButton onpressPrimary={onpressPrimary} text="Calculate" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
