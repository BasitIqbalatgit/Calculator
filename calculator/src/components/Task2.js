import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { RadioButton,TextInput } from 'react-native-paper';
import ModalDropdown from 'react-native-modal-dropdown';

const Task2 = () => {
  const [gender, setGender] = useState('male');
  const [selectedCountry, setSelectedCountry] = useState('');

  const countries = [
    'Select a country',
    'Pakistan',
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'India',
    'Japan',
    'China',
  ];

  return (
    <SafeAreaView style={{ flex: 1, margin: 20 }}>
      <View style={{ flex: 1, backgroundColor:"red" }}>
        {/* Email and Name ---------------------------> */}
        <Text>Email</Text>
        <TextInput placeholder="30 character max" maxLength={30} />
        <Text>Name</Text>
        <TextInput placeholder="50 character max" maxLength={50} />
      </View>
      <View style={{ flex: 1 , backgroundColor:"green"}}>
        <Text>Gender </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="male"
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('male')}
          />
          <Text>Male</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="female"
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('female')}
          />
          <Text>Female</Text>
        </View>

        <Text>Country</Text>
        <ModalDropdown
          options={countries}
          onSelect={(index, value) => setSelectedCountry(value)}
          style={styles.dropdown}
        >
          <View style={styles.dropdownButton}>
            <Text>{selectedCountry || 'Select a country'}</Text>
          </View>
        </ModalDropdown>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  dropdown: {
    width: "100%",
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default Task2;
