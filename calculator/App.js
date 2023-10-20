import React from 'react';
import { View } from 'react-native';
import Calculator from './src/components/calculator';
import Task2 from './src/components/Task2';
import TaskForm from './src/components/TaskForm';

const App = () => {
  return (
    
    <View style={{flex: 1,
      backgroundColor: 'rgb(247, 245, 245)'}}>
      
      {/* <TaskForm /> */}
      <Calculator />
    </View>
  );
};

export default App;



