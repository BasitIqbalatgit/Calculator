// Import necessary components from React and React Native
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Create a functional component for the calculator
const CalculatorApp = () => {
  // State to keep track of the input and result
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Function to handle button press
  const handlePress = (value) => {
    if (value === '=') {
      // Evaluate the expression and set the result
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      // Clear the input and result
      setInput('');
      setResult('');
    } else {
      // Update the input
      setInput((prevInput) => prevInput + value);
    }
  };

  // Button layout
  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+'],
  ];

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.displayContainer}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((buttonValue) => (
              <TouchableOpacity
                key={buttonValue}
                style={styles.button}
                onPress={() => handlePress(buttonValue)}>
                <Text style={styles.buttonText}>{buttonValue}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  displayContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'flex-end',
  },
  input: {
    fontSize: 24,
    marginBottom: 10,
  },
  result: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    margin: 5,
    padding: 20,
  },
  buttonText: {
    fontSize: 20,
  },
});

// Export the component for use in other parts of your app
export default CalculatorApp;
