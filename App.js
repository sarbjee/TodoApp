import React from 'react';
import { useState } from 'react';
import {SafeAreaView, } from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

 
 
export default function App() {
 
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to park',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  const Stack = createStackNavigator();
 
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    );
}



